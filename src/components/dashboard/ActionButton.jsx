import { styled } from "styled-components";

const StyledActionButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => (props.text ? props.text : "var(--color-grey-0)")};
  background: ${(props) =>
    props.color ? props.color : "var(--color-brand-500)"};
  width: ${(props) => (props.type === "fullWidth" ? "" : "fit-content")};

  &:disabled {
    background: var(--color-grey-500);
    cursor: not-allowed;
  }
`;

function ActionButton({ children, onClick, disabled, type, color, text }) {
  return (
    <StyledActionButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      type={type}
      text={text}
    >
      {children}
    </StyledActionButton>
  );
}

export default ActionButton;
