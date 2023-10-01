import { styled } from "styled-components";

const StyledBanner = styled.div`
  background: var(--color-brand-500);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & p {
    color: var(--color-grey-0);
    font-weight: 400;
  }
`;

function Banner() {
  return (
    <StyledBanner>
      <p>
        Shortify just launched, enjoy unlimited links for the next 2 months. 🎉
      </p>
    </StyledBanner>
  );
}

export default Banner;
