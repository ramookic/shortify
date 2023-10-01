import { Ring } from "@uiball/loaders";
import { styled } from "styled-components";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Spinner({ color = "var(--color-brand-500)", size }) {
  return (
    <StyledSpinner>
      <Ring size={size || 40} lineWeight={5} speed={2} color={color} />
    </StyledSpinner>
  );
}

export default Spinner;
