import { styled } from "styled-components";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { useUpdateUser } from "../../../features/authentication/useUpdateUser";
import FormLabel from "../../form/FormLabel";
import ActionButton from "../ActionButton";
import Spinner from "../../loaders/Spinner";

const StyledProfileUpdate = styled.form`
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

  & input[type="file"] {
    cursor: pointer;
    padding: 1rem;
    border: 1px dashed var(--color-grey-500);
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

function ProfileUpdate({ user }) {
  const { update, isLoading } = useUpdateUser();

  const [name, setName] = useState(user.user_metadata.name);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    update(
      { name, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
          toast.success("Profile successfully updated");
        },
      }
    );
  }

  return (
    <StyledProfileUpdate onSubmit={handleSubmit}>
      <FormBox>
        <FormTitle>
          <FormLabel for="name">Profile Name</FormLabel>
          <span>How should we call you?</span>
        </FormTitle>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
      </FormBox>

      <FormBox>
        <FormTitle>
          <FormLabel for="avatar">Profile Image</FormLabel>
          <span>Make your profile stand out, with your image</span>
        </FormTitle>
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormBox>
      <ActionButton disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner color="var(--color-grey-0)" size={20} /> Updating...
          </>
        ) : (
          "Update your profile"
        )}
      </ActionButton>
    </StyledProfileUpdate>
  );
}

export default ProfileUpdate;
