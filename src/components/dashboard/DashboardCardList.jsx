import { styled } from "styled-components";

const DashboardCardList = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default DashboardCardList;
