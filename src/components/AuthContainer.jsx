import { styled } from "styled-components";

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
  background: var(--color-grey-0);
  border-radius: 20px;
  padding: 2rem;
  outline: 1px solid var(--color-grey-200);

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export default AuthContainer;
