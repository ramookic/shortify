import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

import { formatDate } from "../../utils/helpers";
import { BiBarChart } from "react-icons/bi";

const StyledLinkListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  outline: 1px solid var(--color-grey-200);
  background: var(--color-grey-0);
  padding: 20px;
  border-radius: 10px;

  &:hover {
    & h4 {
      color: var(--color-brand-500);
    }

    & span {
      color: var(--color-brand-500);
    }
  }

  & span {
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: 15px;
  }

  & h4 {
    font-weight: 600;
    color: var(--color-grey-700);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
      color: var(--color-brand-500);
    }

    & span {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
`;

function LinkListItem({ data }) {
  const [, setSearchParams] = useSearchParams();

  function handleClick(link) {
    setSearchParams({ link });
  }

  return (
    <StyledLinkListItem onClick={() => handleClick(data.link.id)}>
      <span>{formatDate(data.link.created_at)}</span>
      <h4>{data.link.title}</h4>
      <div>
        <p>shortify.com/{data.link.shortLink}</p>
        <span>
          {data.clicks.length}
          <BiBarChart size={18} />
        </span>
      </div>
    </StyledLinkListItem>
  );
}

export default LinkListItem;
