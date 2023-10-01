import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: var(--color-grey-800);
  font-weight: 500;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink to="/login">Log in</StyledLink>
      <StyledLink to="/signup">Sign up</StyledLink>
    </StyledNavigation>
  );
}

export default Navigation;
