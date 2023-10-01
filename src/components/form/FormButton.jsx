import { styled } from "styled-components";

const StyledFormButton = styled.button`
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 500;
  color: var(--color-grey-0);
  background: var(--color-brand-500);

  &:hover {
    background: var(--color-brand-600);
  }
`;

function FormButton({ onClick, children }) {
  return <StyledFormButton onClick={onClick}>{children}</StyledFormButton>;
}

export default FormButton;
