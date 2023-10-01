import { styled } from "styled-components";

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
  padding: 1.6rem 0;
  background: var(--color-grey-0);
  border-top: 1px solid var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-100);

  & input {
    outline: 1px solid var(--color-grey-200);
    background: var(--color-grey-100);
    padding: 10px;
    border: none;
    border-radius: 10px;
  }

  & a {
    display: flex;
    justify-content: center;
  }
`;

export default AuthForm;
