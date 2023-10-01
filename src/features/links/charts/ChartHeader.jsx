import { styled } from "styled-components";

const StyledChartHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & span {
    font-size: 14px;
    color: var(--color-grey-500);
  }
`;

function ChartHeader({ title, description }) {
  return (
    <StyledChartHeader>
      <h4>{title}</h4>
      <span>{description}</span>
    </StyledChartHeader>
  );
}

export default ChartHeader;
