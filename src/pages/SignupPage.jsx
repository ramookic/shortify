import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useUser } from "../features/authentication/useUser";
import SignupForm from "../features/authentication/SignupForm";
import StyledLink from "../components/StyledLink";
import FullPageLoading from "../components/loaders/FullPageLoading";

const StyledSignupPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  background: var(--color-grey-100);
`;

function SignupPage() {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/app/dashboard");
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(function () {
    document.title = "Shortify | Sign up";
  }, []);

  if (isLoading) return <FullPageLoading />;

  return (
    <StyledSignupPage>
      <SignupForm />
      <StyledLink to="/">Return Home</StyledLink>
    </StyledSignupPage>
  );
}

export default SignupPage;
