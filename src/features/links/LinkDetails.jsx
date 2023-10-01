import { styled } from "styled-components";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { BiBarChart, BiCopyAlt, BiSubdirectoryRight } from "react-icons/bi";

import { formatDate } from "../../utils/helpers";
import { DOMAIN } from "../../utils/constants";
import ActionButton from "../../components/dashboard/ActionButton";
import ModalDelete from "../../components/modal/ModalDelete";
import ModalEdit from "../../components/modal/ModalEdit";
import ClicksChart from "./charts/ClicksChart";
import DeviceChart from "./charts/DeviceChart";
import CoutriesChart from "./charts/CoutriesChart";
import Alert from "../../components/dashboard/Alert";

const StyledLinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Details = styled.div`
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  height: fit-content;
  background: var(--color-grey-0);
  outline: 1px solid var(--color-grey-200);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-grey-200);

  & div {
    display: flex;
    gap: 10px;
  }

  & h2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 80%;
    }
  }
`;

const Body = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & p {
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: 16px;
  }

  & span {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--color-grey-800);
    font-weight: 500;
  }
`;

const LinkData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    color: var(--color-brand-500);
    font-size: 20px;
    font-weight: 600;
  }
`;

const LongLink = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-grey-500);

  & p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 400px;

    @media screen and (max-width: 768px) {
      max-width: 200px;
    }
  }
`;

function LinkDetails({ initialLink, links }) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("link") || initialLink;

  const link = links.find((link) => link.link.id === Number(id));

  if (!link) {
    return <Alert>Link not Found</Alert>;
  }

  function clicksData(clicks) {
    const data = {};

    clicks.forEach((click) => {
      const clickDate = click.created_at.split("T")[0];

      if (data[clickDate]) {
        data[clickDate]++;
      } else {
        data[clickDate] = 1;
      }
    });

    const dataArray = Object.keys(data).map((date) => ({
      date,
      clicks: data[date],
    }));

    return dataArray;
  }

  function countriesData(clicks) {
    const countries = clicks.map((click) => click.location.country);

    const countryCounts = countries.reduce((counts, country) => {
      counts[country] = (counts[country] || 0) + 1;
      return counts;
    }, {});

    const sortedCountries = Object.entries(countryCounts).sort(
      (a, b) => b[1] - a[1]
    );

    return sortedCountries;
  }

  function deviceData(clicks) {
    const mobileClicks = clicks.filter((click) =>
      click.userAgent.includes("Mobile")
    );
    const desktopClicks = clicks.filter(
      (click) => !click.userAgent.includes("Mobile")
    );

    const data = [
      { name: "Mobile", value: mobileClicks.length },
      { name: "Desktop", value: desktopClicks.length },
    ];

    return data;
  }

  function handleCopy(data) {
    navigator.clipboard.writeText(data);
    toast.success("Link Copied");
  }

  return (
    <StyledLinkDetails>
      <Details>
        <Header>
          <h2>{link.link.title}</h2>
          <div>
            <ModalEdit link={link.link} />

            <ModalDelete linkId={link.link.id} />
          </div>
        </Header>
        <Body>
          <p>{formatDate(link.link.created_at)}</p>
          <span>
            <BiBarChart size={18} /> {link.clicks.length} Total Engagements
            (clicks)
          </span>
        </Body>
        <LinkData>
          <a
            href={`${DOMAIN}/${link.link.shortLink}`}
            target="_blank"
            rel="noreferrer"
          >
            shortify.com/{link.link.shortLink}
          </a>
          <ActionButton
            color="var(--color-grey-100)"
            text="var(--color-grey-500)"
            onClick={() => handleCopy(`${DOMAIN}/${link.link.shortLink}`)}
          >
            <BiCopyAlt size={18} />
            Copy
          </ActionButton>
        </LinkData>
        <LongLink>
          <BiSubdirectoryRight size={18} />
          <p>{link.link.longLink}</p>
        </LongLink>
      </Details>
      <ClicksChart
        data={clicksData(link.clicks)}
        description="Total clicks on this link"
      />
      <CoutriesChart
        data={countriesData(link.clicks)}
        description="Clicks by users location"
      />
      <DeviceChart
        data={deviceData(link.clicks)}
        description="Clicks by users device"
      />
    </StyledLinkDetails>
  );
}

export default LinkDetails;
