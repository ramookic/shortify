import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useUpdateUser } from "../../../features/authentication/useUpdateUser";
import FormLabel from "../../form/FormLabel";
import ActionButton from "../ActionButton";
import Spinner from "../../loaders/Spinner";

const StyledPasswordUpdate = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid var(--color-grey-200);
  padding-top: 20px;

  & input {
    outline: 1px solid var(--color-grey-200);
    background: var(--color-grey-100);
    padding: 10px;
    border: none;
    border-radius: 10px;
  }

  & span {
    font-size: 14px;
    color: var(--color-grey-500);
  }
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

function PasswordUpdate() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { update, isLoading } = useUpdateUser();

  function onSubmit({ password }) {
    update(
      { password },
      {
        onSettled: () => {
          reset();
        },
        onSuccess: () => {
          toast.success("Password updated");
        },
      }
    );
  }

  return (
    <StyledPasswordUpdate onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <FormTitle>
          <FormLabel for="password" error={errors?.password?.message}>
            New Password
          </FormLabel>
          <span>Enter your new passwod, 6 characters minimum</span>
        </FormTitle>
        <input
          id="password"
          type="password"
          disabled={isLoading}
          placeholder="Your new password"
          {...register("password", {
            required: "Name is required",
          })}
        />
      </FormBox>
      <FormBox>
        <FormTitle>
          <FormLabel for="passwordConfirm">Repeat Password</FormLabel>
          <span>Please repeat your new password</span>
        </FormTitle>
        <input
          id="passwordConfirm"
          type="password"
          placeholder="Repeat your password"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Password is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormBox>
      <ActionButton disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner color="var(--color-grey-0)" size={20} /> Updating...
          </>
        ) : (
          "Update yout password"
        )}
      </ActionButton>
    </StyledPasswordUpdate>
  );
}

export default PasswordUpdate;
