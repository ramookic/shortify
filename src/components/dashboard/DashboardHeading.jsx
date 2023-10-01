import { styled } from "styled-components";

const StyledDashboardHeading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: var(--color-grey-800);
`;

function DashboardHeading({ children }) {
  return <StyledDashboardHeading>{children}</StyledDashboardHeading>;
}

export default DashboardHeading;
