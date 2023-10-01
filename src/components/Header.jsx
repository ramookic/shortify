import { styled } from "styled-components";

import Logo from "./Logo";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
