import ActionButton from "../dashboard/ActionButton";
import Modal from "./Modal";
import CreateNew from "../../features/links/CreateNew";

function ModalCreate() {
  return (
    <Modal>
      <Modal.Open opens="create">
        <ActionButton type="fullWidth" color="var(--color-grey-700)">
          Create New
        </ActionButton>
      </Modal.Open>

      <Modal.Window title="Create New" name="create">
        <CreateNew />
      </Modal.Window>
    </Modal>
  );
}

export default ModalCreate;
