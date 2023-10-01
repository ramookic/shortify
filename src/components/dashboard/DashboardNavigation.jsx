import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { BiCategory, BiCog, BiHelpCircle, BiLink } from "react-icons/bi";

import { useMenu } from "../../contexts/MenuContext";

const StyledDashboardNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  border-top: 1px solid var(--color-grey-200);

  & a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 500;
    color: var(--color-grey-800);
  }

  & a:hover {
    color: var(--color-brand-600);
  }

  & a.active {
    background: var(--color-brand-50);
    color: var(--color-brand-500);
  }

  & a.active:hover {
    color: var(--color-brand-600);
  }
`;

function DashboardNavigation() {
  const { toggleShowMenu } = useMenu();

  return (
    <StyledDashboardNavigation>
      <NavLink to="/app/dashboard" onClick={toggleShowMenu}>
        <BiCategory size={20} />
        Home
      </NavLink>
      <NavLink to="/app/links" onClick={toggleShowMenu}>
        <BiLink size={20} />
        Links
      </NavLink>
      <NavLink to="/app/settings" onClick={toggleShowMenu}>
        <BiCog size={20} />
        Settings
      </NavLink>
      <NavLink to="/app/help" onClick={toggleShowMenu}>
        <BiHelpCircle size={20} />
        Help
      </NavLink>
    </StyledDashboardNavigation>
  );
}

export default DashboardNavigation;
