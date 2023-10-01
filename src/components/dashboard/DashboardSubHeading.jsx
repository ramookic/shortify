import { styled } from "styled-components";

const StyledDashboardSubHeading = styled.h3`
  font-size: 22px;
  color: var(--color-grey-700);
`;

function DashboardSubHeading({ children }) {
  return <StyledDashboardSubHeading>{children}</StyledDashboardSubHeading>;
}

export default DashboardSubHeading;
