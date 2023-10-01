import { useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { styled } from "styled-components";

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 28px;
  }
`;

const FaqList = styled.ul`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & li {
    cursor: pointer;
    background: var(--color-grey-0);
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    outline: 1px solid var(--color-grey-200);

    & h4 {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & p {
      display: none;
      color: var(--color-grey-500);
    }

    &.active p {
      display: block;
      transition: 0.3s ease;
    }
  }
`;

function Faq({ data, title }) {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <StyledFaq>
      <h2>{title || "Frequently Asked Questions"}</h2>
      <FaqList>
        {data.map((el, i) => (
          <li
            key={i}
            className={isOpen === i ? "active" : ""}
            onClick={() => setIsOpen(isOpen === i ? null : i)}
          >
            <h4>
              {el.question}{" "}
              {isOpen === i ? (
                <BiCaretUp size={18} />
              ) : (
                <BiCaretDown size={18} />
              )}
            </h4>
            <p>{el.answer}</p>
          </li>
        ))}
      </FaqList>
    </StyledFaq>
  );
}

export default Faq;
