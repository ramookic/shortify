import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledActionLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  color: var(--color-grey-0);
  background: ${(props) =>
    props.color ? props.color : "var(--color-brand-500)"};
`;

function ActionLink({ children, to, color }) {
  return (
    <StyledActionLink to={to} color={color}>
      {children}
    </StyledActionLink>
  );
}

export default ActionLink;
