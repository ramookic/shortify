import { styled } from "styled-components";
import { useForm } from "react-hook-form";

import { useUpdateLink } from "./useUpdateLink";
import FormLabel from "../../components/form/FormLabel";
import ActionButton from "../../components/dashboard/ActionButton";
import Spinner from "../../components/loaders/Spinner";

const StyledEditLink = styled.form`
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

function EditLink({ link, onCloseModal }) {
  const { register, handleSubmit, reset } = useForm();

  const { update, isLoading } = useUpdateLink();

  function onSubmit({ customShortLink, title }) {
    update(
      {
        id: link.id,
        title,
        shortLink: customShortLink,
      },
      {
        onSettled: () => {
          reset();
          onCloseModal();
        },
      }
    );
  }

  return (
    <StyledEditLink onSubmit={handleSubmit(onSubmit)}>
      <FormBox>
        <FormTitle>
          <FormLabel label="title">Title</FormLabel>
          <span>Add title to memorize it easier</span>
        </FormTitle>
        <input
          type="text"
          id="title"
          placeholder={link.title}
          disabled={isLoading}
          {...register("title")}
        />
      </FormBox>

      <FormBox>
        <FormTitle>
          <FormLabel label="customShortLink">Custom back-half</FormLabel>
          <span>Make your custom link</span>
        </FormTitle>
        <input
          type="text"
          id="customShortLink"
          placeholder={link.shortLink}
          disabled={isLoading}
          {...register("customShortLink")}
        />
      </FormBox>
      <ActionButton type="fullWidth" disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner color="var(--color-grey-0)" size={20} /> Saving...
          </>
        ) : (
          "Edit"
        )}
      </ActionButton>
    </StyledEditLink>
  );
}

export default EditLink;
