import { styled } from "styled-components";

import { useMenu } from "../../contexts/MenuContext";
import Logo from "../Logo";
import DashboardNavigation from "./DashboardNavigation";
import DashboardSidebarAlert from "./DashboardSidebarAlert";
import ModalCreate from "../modal/ModalCreate";

const StyledDashboardSidebar = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  transform: translateX(0);
  background: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow-y: auto;
    z-index: 99;
    box-shadow: var(--shadow-sm);
    transform: translateX(-100vw);

    &.active {
      transform: translateX(0);
    }
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: 768px) {
    & > :nth-child(1) {
      display: none;
    }
  }
`;

function DashboardSidebar() {
  const { showMenu, toggleShowMenu } = useMenu();

  return (
    <StyledDashboardSidebar className={showMenu ? "active" : ""}>
      <SidebarHeader>
        <Logo to="/app/dashboard" />
        <ModalCreate />
      </SidebarHeader>
      <DashboardNavigation handleShowSidebar={toggleShowMenu} />
      <DashboardSidebarAlert />
    </StyledDashboardSidebar>
  );
}

export default DashboardSidebar;
