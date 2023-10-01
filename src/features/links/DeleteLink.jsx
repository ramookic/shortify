import { styled } from "styled-components";

import { useDeleteLink } from "./useDeleteLink";
import ActionButton from "../../components/dashboard/ActionButton";
import Spinner from "../../components/loaders/Spinner";

const StyledDeleteLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & p {
    color: var(--color-grey-500);
  }
`;

function DeleteLink({ linkId, onCloseModal }) {
  const { isLoading, deleteLink } = useDeleteLink();

  return (
    <StyledDeleteLink>
      <p>
        Deleting this link will redirect it to the Shortify error page. This
        cannot be undone.
      </p>
      <ActionButton
        color="var(--color-red-700)"
        type="fullWidth"
        onClick={() => {
          deleteLink(linkId);
          onCloseModal();
        }}
      >
        {isLoading ? (
          <>
            <Spinner color="var(--color-grey-0)" size={20} /> Deleting...
          </>
        ) : (
          "Delete"
        )}
      </ActionButton>
    </StyledDeleteLink>
  );
}

export default DeleteLink;
