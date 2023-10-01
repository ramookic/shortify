import { styled } from "styled-components";

const StyledFormHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 1rem 0;
`;

function FormHeader({ heading }) {
  return (
    <StyledFormHeader>
      <h2>{heading}</h2>
    </StyledFormHeader>
  );
}

export default FormHeader;
