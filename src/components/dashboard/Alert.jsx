import { styled } from "styled-components";

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-grey-500);
  min-height: 160px;
  max-height: 100%;
  width: 100%;
`;

export default Alert;
