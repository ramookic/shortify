import { styled } from "styled-components";

const StyledDashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem 20px;
  background: var(--color-grey-0);
  border-radius: 10px;
  width: 100%;
  outline: 1px solid var(--color-grey-200);

  & p {
    font-weight: 500;
  }

  & h4 {
    font-size: 22px;
    font-weight: 500;
  }

  & span {
    font-weight: 500;
    font-size: 15px;
    color: var(--color-grey-500);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function DashboardCard({ title, data, description }) {
  return (
    <StyledDashboardCard>
      <Header>
        <p>{title}</p>
      </Header>
      <h4>
        {data} <span>{description}</span>
      </h4>
    </StyledDashboardCard>
  );
}

export default DashboardCard;
