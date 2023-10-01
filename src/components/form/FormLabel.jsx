import { styled } from "styled-components";

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: var(--color-grey-700);
`;

const Error = styled.span`
  color: var(--color-red-500) !important;
`;

function FormLabel({ label, children, error }) {
  return (
    <StyledLabel htmlFor={label}>
      {error ? <Error>{error}</Error> : children}
    </StyledLabel>
  );
}

export default FormLabel;
