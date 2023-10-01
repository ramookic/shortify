import { styled } from "styled-components";
import { useForm } from "react-hook-form";

import { useShortenLink } from "./useShortenLink";
import { useUser } from "../authentication/useUser";
import { useMenu } from "../../contexts/MenuContext";
import FormLabel from "../../components/form/FormLabel";
import ActionButton from "../../components/dashboard/ActionButton";
import Spinner from "../../components/loaders/Spinner";

const StyledCreateNew = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    gap: 20px;
  }

  & input {
    outline: 1px solid var(--color-grey-200);
    background: var(--color-grey-100);
    padding: 10px;
    border: none;
    border-radius: 10px;
  }

  & button {
    margin-top: 10px;
  }

  & span {
    font-size: 14px;
    color: var(--color-grey-500);
  }
`;

const FormBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

function CreateNew({ onCloseModal }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { create, isLoading } = useShortenLink();

  const { user } = useUser();
  const { toggleShowMenu } = useMenu();

  function onSubmit({ longLink, customShortLink, title }) {
    const createdBy = user.id;

    create(
      {
        longLink,
        createdBy,
        customShortLink,
        title,
      },
      {
        onSettled: () => {
          reset();
          onCloseModal();
          toggleShowMenu();
        },
      }
    );
  }

  return (
    <StyledCreateNew onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <FormTitle>
          <FormLabel label="longLink" error={errors?.longLink?.message}>
            Destination
          </FormLabel>
          <span>Your Long URL</span>
        </FormTitle>
        <input
          type="text"
          id="longLink"
          placeholder="https://example.com/my-long-url"
          disabled={isLoading}
          {...register("longLink", {
            required: "URL is required",
          })}
        />
      </FormBox>

      <FormBox>
        <FormTitle>
          <FormLabel label="title">Title (optional)</FormLabel>
          <span>Add title to memorize it easier</span>
        </FormTitle>
        <input
          type="text"
          id="title"
          placeholder=""
          disabled={isLoading}
          {...register("title")}
        />
      </FormBox>

      <FormBox>
        <FormTitle>
          <FormLabel label="customShortLink">
            Custom back-half (optional)
          </FormLabel>
          <span>Make your custom link</span>
        </FormTitle>
        <input
          type="text"
          id="customShortLink"
          placeholder="/my-custom-url"
          disabled={isLoading}
          {...register("customShortLink")}
        />
      </FormBox>
      <ActionButton type="fullWidth" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner color="var(--color-grey-0)" size={20} /> Creating...
          </>
        ) : (
          "Create"
        )}
      </ActionButton>
    </StyledCreateNew>
  );
}

export default CreateNew;
