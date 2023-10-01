import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import { MenuProvider } from "../../contexts/MenuContext";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: "aside header" "aside main";
  height: 100vh;

  & main {
    grid-area: main;
    padding: 2rem;
    overflow-y: auto;
    background: var(--color-grey-100);
    height: calc(100vh - 60px);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main";

    & main {
      padding: 20px;
    }
  }
`;

function DashboardLayout() {
  return (
    <MenuProvider>
      <StyledDashboardLayout>
        <DashboardHeader />
        <DashboardSidebar />
        <main>
          <Outlet />
        </main>
      </StyledDashboardLayout>
    </MenuProvider>
  );
}

export default DashboardLayout;
