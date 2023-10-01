import { BiTrash } from "react-icons/bi";

import ActionButton from "../dashboard/ActionButton";
import Modal from "./Modal";
import DeleteLink from "../../features/links/DeleteLink";

function ModalDelete({ linkId }) {
  return (
    <Modal>
      <Modal.Open opens="delete">
        <ActionButton color="var(--color-red-700)">
          <BiTrash size={18} />
          Delete
        </ActionButton>
      </Modal.Open>

      <Modal.Window title="Delete Link" name="delete">
        <DeleteLink linkId={linkId} />
      </Modal.Window>
    </Modal>
  );
}

export default ModalDelete;
