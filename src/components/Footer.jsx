import { styled } from "styled-components";

import Logo from "./Logo";

const StyledFooter = styled.footer`
  margin-top: 3rem;
  background: var(--color-grey-800);
  width: 100%;
  padding: 20px;
`;

const Container = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & a {
    color: var(--color-grey-0);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo type="light" />
        <a href="https://github.com/ramookic" target="_blank" rel="noreferrer">
          Github
        </a>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
