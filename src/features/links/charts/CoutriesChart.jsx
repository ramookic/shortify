import { styled } from "styled-components";

import { useGetAllClicksByUser } from "../useGetAllClicks";
import { weekStartDate } from "../../../utils/helpers";
import { useUser } from "../../authentication/useUser";
import ChartHeader from "./ChartHeader";
import Alert from "../../../components/dashboard/Alert";
import Spinner from "../../../components/loaders/Spinner";

const StyledCountriesChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--color-grey-0);
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  outline: 1px solid var(--color-grey-200);

  & h4 {
    color: var(--color-grey-700);
    font-size: 20px;
  }

  & ul {
    max-height: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-x: auto;
    padding-right: 20px;
  }

  & li {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & p {
      font-weight: 500;
    }

    & span {
      font-weight: 500;
      color: var(--color-grey-500);
    }
  }
`;

function CoutriesChart({ description, data }) {
  const { user } = useUser();
  const { isLoading, clicks } = useGetAllClicksByUser(user.id);

  if (isLoading) return <Spinner />;

  const { currentDate, currentWeekStartDate } = weekStartDate();

  const clicksForWeek = clicks.filter((click) => {
    const clickDate = new Date(click.created_at.split("T")[0]);
    return clickDate >= currentWeekStartDate && clickDate <= currentDate;
  });

  const countries = clicksForWeek.map((click) => click.location.country);

  const countryCounts = countries.reduce((counts, country) => {
    counts[country] = (counts[country] || 0) + 1;
    return counts;
  }, {});

  const sortedCountries = Object.entries(countryCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const preparedData = data || sortedCountries;

  return (
    <StyledCountriesChart>
      <ChartHeader
        title="Locations"
        description={description || "Clicks by users location this week"}
      />
      {preparedData.length === 0 ? (
        <Alert>No data to display</Alert>
      ) : (
        <ul>
          {preparedData.map(([country, clickCount], index) => (
            <li key={index}>
              <p> {country}</p>
              <span>
                {clickCount} {clickCount === 1 ? "click" : "clicks"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </StyledCountriesChart>
  );
}

export default CoutriesChart;
