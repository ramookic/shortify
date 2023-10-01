import { styled } from "styled-components";

const StyledDashboardSidebarAlert = styled.div`
  background: var(--color-grey-100);
  padding: 1rem;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;

  & p {
    color: var(--color-grey-500);
  }

  & a {
    color: var(--color-brand-500);
  }
`;

function DashboardSidebarAlert() {
  return (
    <StyledDashboardSidebarAlert>
      <p>
        This app is built for learning purposes by{" "}
        <a href="https://github.com/ramookic" target="_blank" rel="noreferrer">
          @ramookic
        </a>
      </p>
    </StyledDashboardSidebarAlert>
  );
}

export default DashboardSidebarAlert;
