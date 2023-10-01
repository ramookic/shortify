import { styled } from "styled-components";
import { Jelly } from "@uiball/loaders";

const StyledFullPageLoading = styled.div`
  z-index: 999;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullPageLoading() {
  return (
    <StyledFullPageLoading>
      <Jelly size={100} speed={0.9} color="var(--color-brand-500)" />
    </StyledFullPageLoading>
  );
}

export default FullPageLoading;
