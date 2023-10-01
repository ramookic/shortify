import { useState } from "react";
import { styled } from "styled-components";

import { usePasswordRecovery } from "./usePasswordRecovery";
import AuthForm from "../../components/form/AuthForm";
import AuthContainer from "../../components/AuthContainer";
import FormHeader from "../../components/form/FormHeader";
import FormFooter from "../../components/form/FormFooter";
import StyledLink from "../../components/StyledLink";
import FormLabel from "../../components/form/FormLabel";
import FormButton from "../../components/form/FormButton";

const Description = styled.p`
  text-align: center;
  color: var(--color-grey-500);
`;

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const { reset, isLoading } = usePasswordRecovery();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) return;

    reset(
      { email },
      {
        onSettled: () => {
          setEmail("");
        },
      }
    );
  }

  return (
    <AuthContainer>
      <FormHeader heading="Forgot your password?" />
      <Description>
        It happens to the best of us. Enter your email to request a password
        reset link.
      </Description>
      <AuthForm onSubmit={handleSubmit}>
        <div>
          <FormLabel label="email">Email</FormLabel>
          <input
            type="email"
            id="email"
            placeholder="Email"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <FormButton disabled={isLoading}>Reset</FormButton>
      </AuthForm>
      <FormFooter>
        <p>Dont have an account?</p>
        <StyledLink to="/signup">Sign up for Shortify</StyledLink>
      </FormFooter>
    </AuthContainer>
  );
}

export default ForgotPasswordForm;
