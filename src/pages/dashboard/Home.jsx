import { useEffect } from "react";
import { styled } from "styled-components";

import DashboardHeading from "../../components/dashboard/DashboardHeading";
import LinkCards from "../../features/links/LinkCards";
import ClicksChart from "../../features/links/charts/ClicksChart";
import CountriesChart from "../../features/links/charts/CoutriesChart";
import DashboardSubHeading from "../../components/dashboard/DashboardSubHeading";
import DeviceChart from "../../features/links/charts/DeviceChart";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HomeRow = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1360px) {
    flex-wrap: wrap;
  }
`;

function Home() {
  useEffect(function () {
    document.title = "Shortify | Link Dashboard";
  }, []);

  return (
    <StyledHome>
      <DashboardHeading>Dashboard</DashboardHeading>
      <LinkCards />
      <DashboardSubHeading>Your Weekly Report</DashboardSubHeading>
      <HomeRow>
        <ClicksChart />
        <CountriesChart />
        <DeviceChart />
      </HomeRow>
    </StyledHome>
  );
}

export default Home;
