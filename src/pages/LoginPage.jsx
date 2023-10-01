import { styled } from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";
import LoginForm from "../features/authentication/LoginForm";
import StyledLink from "../components/StyledLink";
import FullPageLoading from "../components/loaders/FullPageLoading";
import TestAccountDetails from "../components/TestAccountDetails";

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  background: var(--color-grey-100);
`;

function LoginPage() {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/app/dashboard");
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(function () {
    document.title = "Shortify | Log in";
  }, []);

  if (isLoading) return <FullPageLoading />;

  return (
    <StyledLoginPage>
      <TestAccountDetails />
      <LoginForm />
      <StyledLink to="/">Return Home</StyledLink>
    </StyledLoginPage>
  );
}

export default LoginPage;
