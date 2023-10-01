import { styled } from "styled-components";

import HeroBanner from "../assets/HeroBanner.png";
import ActionLink from "./dashboard/ActionLink";

const StyledHero = styled.section`
  margin-top: 20px;
  padding: 1rem 2rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0rem;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  & h1 {
    color: var(--color-grey-700);
    font-size: 36px;
  }

  & p {
    color: var(--color-grey-500);
  }

  & button {
    margin-top: 10px;
  }

  & img {
    padding: 10px;
    max-width: 1200px;
    width: 100%;
    height: max-content;
    background-size: cover;
    box-shadow: var(--shadow-md);
    border-radius: 10px;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <div>
        <h1>Manage your links the easy way</h1>
        <p>
          Make your links shorter and more user-friendly for effortless sharing
          on social media, emails, and other platforms.
        </p>
        <ActionLink to="/signup">Get Started for Free</ActionLink>
      </div>
      <img src={HeroBanner} alt="" />
    </StyledHero>
  );
}

export default Hero;
