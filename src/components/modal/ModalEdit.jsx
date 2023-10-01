import { BiEdit } from "react-icons/bi";

import ActionButton from "../dashboard/ActionButton";
import Modal from "./Modal";
import EditLink from "../../features/links/EditLink";

function ModalEdit({ link }) {
  return (
    <Modal>
      <Modal.Open opens="edit">
        <ActionButton
          color="var(--color-grey-100)"
          text="var(--color-grey-500)"
        >
          <BiEdit size={18} />
          Edit
        </ActionButton>
      </Modal.Open>

      <Modal.Window title="Edit Link" name="edit">
        <EditLink link={link} />
      </Modal.Window>
    </Modal>
  );
}

export default ModalEdit;
