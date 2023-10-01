import { useEffect } from "react";
import { styled } from "styled-components";

import StyledLink from "../components/StyledLink";
import errorImage from "../assets/404.svg";

const StyledNotFoundPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  background: var(--color-grey-100);
  padding: 20px;

  & h1 {
    font-size: 36px;
    text-align: center;
    color: var(--color-grey-700);
  }

  & p {
    max-width: 500px;
    text-align: center;
    color: var(--color-grey-700);
  }

  & img {
    padding: 10px;
    height: 400px;
    background-size: cover;
    border-radius: 10px;
  }

  & a {
    color: var(--color-brand-500);
  }
`;

function NotFoundPage() {
  useEffect(function () {
    document.title = "Shortify | Not Found";
  }, []);
  return (
    <StyledNotFoundPage>
      <img src={errorImage} alt="" />
      <h1>Something's wrong here.</h1>
      <p>
        This is a 404 error, which means you've clicked on a bad link or entered
        an invalid URL. Maybe what you are looking for can be found{" "}
        <StyledLink to="/">here</StyledLink>
      </p>
    </StyledNotFoundPage>
  );
}

export default NotFoundPage;
