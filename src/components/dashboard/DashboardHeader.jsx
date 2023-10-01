import { useState } from "react";
import { styled } from "styled-components";
import { BiCaretDown, BiMenuAltLeft, BiX } from "react-icons/bi";

import { useUser } from "../../features/authentication/useUser";
import { useLogout } from "../../features/authentication/useLogout";
import { useMenu } from "../../contexts/MenuContext";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import defaultAvatar from "../../assets/defaultAvatar.svg";
import DashboardSearch from "./DashboardSearch";
import ActionButton from "./ActionButton";
import Logo from "../Logo";

const StyledDashboardHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: var(--color-grey-0);

  & img {
    object-fit: cover;
    border-radius: 100%;
  }

  & > :nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    & > :nth-child(1) {
      display: none;
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

const DashboardHeaderUser = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;

  &:hover {
    color: var(--color-brand-500);

    & p {
      color: var(--color-brand-500);
    }
  }
`;

const DashboardUserDropdown = styled.div`
  display: none;
  position: absolute;
  z-index: 999;
  right: 20px;
  top: 56px;
  background: var(--color-grey-0);
  padding: 1rem;
  border-radius: 10px;
  flex-direction: column;
  gap: 20px;
  font-weight: 500;
  box-shadow: var(--shadow-md);

  &.active {
    display: flex;
  }

  :nth-child(1) {
    display: flex;
    gap: 10px;

    & span {
      font-size: 15px;
      font-weight: 400;
      color: var(--color-grey-500);
    }
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;
`;

function DashboardHeader() {
  const { user, isLoading } = useUser();
  const { logout } = useLogout();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const { showMenu, toggleShowMenu } = useMenu();

  const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);
  const closeDropdown = () => setIsDropdownActive(false);

  const ref = useOutsideClick(closeDropdown);

  if (isLoading) return;
  const { name, avatar } = user.user_metadata;

  return (
    <StyledDashboardHeader>
      <DashboardSearch />
      <div>
        <MenuToggle onClick={toggleShowMenu}>
          {showMenu ? <BiX size={24} /> : <BiMenuAltLeft size={24} />}
        </MenuToggle>
        <Logo to="/app/dashboard" />
      </div>
      <DashboardHeaderUser onClick={toggleDropdown}>
        <img width={32} height={32} src={avatar || defaultAvatar} alt="" />
        <p>{name}</p>
        <BiCaretDown />
      </DashboardHeaderUser>
      <DashboardUserDropdown
        className={isDropdownActive ? "active" : ""}
        ref={ref}
      >
        <div>
          <img width={42} src={avatar || defaultAvatar} alt="" />
          <div>
            <p>{name}</p>
            <span>{user.email}</span>
          </div>
        </div>
        <ActionButton type="fullWidth" onClick={logout}>
          Sign out
        </ActionButton>
      </DashboardUserDropdown>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;
