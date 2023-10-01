import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "styled-components";

import { useUser } from "../features/authentication/useUser";
import StyledLink from "../components/StyledLink";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";

const StyledForgotPasswordPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  background: var(--color-grey-100);
`;

function ForgotPasswordPage() {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/app/dashboard");
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(function () {
    document.title = "Shortify | Forgot Password";
  }, []);

  return (
    <StyledForgotPasswordPage>
      <ForgotPasswordForm />
      <StyledLink to="/">Return Home</StyledLink>
    </StyledForgotPasswordPage>
  );
}

export default ForgotPasswordPage;
