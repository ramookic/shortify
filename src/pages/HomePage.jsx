import { useEffect } from "react";
import { styled } from "styled-components";

import Hero from "../components/Hero";
import Faq from "../components/Faq";
import faqHome from "../data/faqHome.json";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function HomePage() {
  useEffect(function () {
    document.title = "Shortify | The power of links";
  }, []);
  return (
    <StyledHomePage>
      <Hero />
      <Faq data={faqHome} />
    </StyledHomePage>
  );
}

export default HomePage;
