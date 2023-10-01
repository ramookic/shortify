import { useState } from "react";
import { styled } from "styled-components";

import LinkListItem from "./LinkListItem";

const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 100%;
`;

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    border: none;
    padding: 0;
  }
`;

const LinkFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 4px;

  & div {
    display: flex;
    align-items: center;
    gap: 10px;

    & label {
      color: var(--color-grey-700);
      font-weight: 500;
    }

    & input {
      cursor: pointer;
      accent-color: var(--color-brand-500);
      width: 16px;
      height: 16px;
    }
  }
`;

function LinkList({ links }) {
  const [sortBy, setSortBy] = useState("date");

  const sortedLinks = [...links];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  if (sortBy === "clicks") {
    sortedLinks.sort((a, b) => b.clicks.length - a.clicks.length);
  } else {
    sortedLinks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  return (
    <StyledLinkList>
      <LinkFilters>
        <div>
          <input
            type="radio"
            name="sorting"
            id="date"
            value="date"
            onChange={handleSortChange}
            checked={sortBy === "date"}
          />
          <label htmlFor="date">Date Created</label>
        </div>
        <div>
          <input
            type="radio"
            name="sorting"
            id="clicks"
            value="clicks"
            onChange={handleSortChange}
            checked={sortBy === "clicks"}
          />
          <label htmlFor="clicks">Top Performing</label>
        </div>
      </LinkFilters>
      <List>
        {sortedLinks.map((el) => (
          <LinkListItem key={el.link.id} data={el} />
        ))}
      </List>
    </StyledLinkList>
  );
}

export default LinkList;
