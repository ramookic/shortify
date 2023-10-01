import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { BiX } from "react-icons/bi";

import { useOutsideClick } from "../../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  transition: all 0.5s;
  max-width: 520px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #37415160;
  z-index: 1000;
  transition: all 0.5s;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-700);
  padding-bottom: 14px;
  border-bottom: 1px solid var(--color-grey-200);

  & h4 {
    font-size: 20px;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, title }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Header>
          <h4>{title}</h4>
          <BiX style={{ cursor: "pointer" }} size={22} onClick={close} />
        </Header>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
