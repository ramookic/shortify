import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LinkStyled = styled(Link)`
  text-decoration: underline;
`;

function StyledLink({ to, children }) {
  return <LinkStyled to={to}>{children}</LinkStyled>;
}

export default StyledLink;
