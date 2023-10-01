import { useState } from "react";

import { useLogin } from "./useLogin";
import AuthForm from "../../components/form/AuthForm";
import FormLabel from "../../components/form/FormLabel";
import AuthContainer from "../../components/AuthContainer";
import FormHeader from "../../components/form/FormHeader";
import FormButton from "../../components/form/FormButton";
import FormFooter from "../../components/form/FormFooter";
import StyledLink from "../../components/StyledLink";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <AuthContainer>
      <FormHeader heading="Log in to Shortify" />
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
        <div>
          <FormLabel label="password">Password</FormLabel>
          <input
            type="password"
            id="password"
            placeholder="Password"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <FormButton disabled={isLoading}>Log in</FormButton>
        <StyledLink to="/forgot-password">Forgot your Password?</StyledLink>
      </AuthForm>
      <FormFooter>
        <p>Dont have an account?</p>
        <StyledLink to="/signup">Sign up for Shortify</StyledLink>
      </FormFooter>
    </AuthContainer>
  );
}

export default LoginForm;
