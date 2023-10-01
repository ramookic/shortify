import { styled } from "styled-components";
import { useEffect } from "react";

import Faq from "../../components/Faq";
import faqHome from "../../data/faqHome.json";

const StyledHelp = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 2rem;
`;

function Help() {
  useEffect(function () {
    document.title = "Shortify | Help";
  }, []);

  return (
    <StyledHelp>
      <Faq title="Having a problem?" data={faqHome} />
    </StyledHelp>
  );
}

export default Help;
