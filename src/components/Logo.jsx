import { styled } from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 26px;
  font-weight: 700;
  color: ${(props) =>
    props.type === "light" ? "var(--color-grey-0)" : "var(--color-grey-700)"};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

function Logo({ type, to }) {
  return (
    <StyledLogo type={type} to={to || "/"}>
      <img width={34} src={logo} alt="logo" />
      Shortify
    </StyledLogo>
  );
}

export default Logo;
