import { useForm } from "react-hook-form";

import { useSignup } from "./useSignup";
import AuthForm from "../../components/form/AuthForm";
import FormLabel from "../../components/form/FormLabel";
import AuthContainer from "../../components/AuthContainer";
import FormHeader from "../../components/form/FormHeader";
import FormButton from "../../components/form/FormButton";
import FormFooter from "../../components/form/FormFooter";
import StyledLink from "../../components/StyledLink";

function LoginForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();

  function onSubmit({ email, password, name }) {
    signup(
      { email, password, name },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <AuthContainer>
      <FormHeader heading="Sign up to Shortify" />
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormLabel label="email" error={errors?.email?.message}>
            Whats your Email?
          </FormLabel>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            disabled={isLoading}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </div>
        <div>
          <FormLabel label="password" error={errors?.password?.message}>
            Create a Password
          </FormLabel>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            disabled={isLoading}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </div>
        <div>
          <FormLabel
            label="passwordConfirm"
            error={errors?.passwordConfirm?.message}
          >
            Repeat Password
          </FormLabel>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="Repeat password"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "Password is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </div>
        <div>
          <FormLabel label="name" error={errors?.name?.message}>
            How should we call you?
          </FormLabel>
          <input
            type="text"
            id="name"
            placeholder="Enter a profile name"
            disabled={isLoading}
            {...register("name", {
              required: "Name is required",
            })}
          />
        </div>
        <FormButton disabled={isLoading}>Sign up</FormButton>
      </AuthForm>
      <FormFooter>
        <p>Have an account?</p>
        <StyledLink to="/login">Log in</StyledLink>
      </FormFooter>
    </AuthContainer>
  );
}

export default LoginForm;
