import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useSearchLinks } from "../../features/links/useSearchLinks";
import { useUser } from "../../features/authentication/useUser";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Alert from "./Alert";
import Spinner from "../loaders/Spinner";

const StyledDashboardSearch = styled.div`
  position: relative;
`;

const SearchBar = styled.div`
  :nth-child(1) {
    position: absolute;
    top: 11px;
    left: 12px;
    color: var(--color-grey-500);
  }

  & input {
    outline: 1px solid var(--color-grey-200);
    background: var(--color-grey-100);
    padding: 10px 10px 10px 36px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
  }
`;

const SearchBox = styled.div`
  position: absolute;
  margin-top: 10px;
  background: var(--color-grey-0);
  min-width: 480px;
  width: 100%;
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  padding: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Link = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  & p {
    color: var(--color-grey-700);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 120px;
  }

  & span {
    font-size: 14px;
  }

  &:hover p {
    color: var(--color-brand-500);
  }
`;

function DashboardSearch() {
  const [searchText, setSearchText] = useState("");
  const { user } = useUser();
  const { data, isLoading, invalidateSearchQuery } = useSearchLinks(
    user.id,
    searchText
  );
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const closeSearchBox = () => setShowResults(false);
  const openSearchBox = () => setShowResults(true);

  const ref = useOutsideClick(closeSearchBox);

  function handleSearch(e) {
    const value = e.target.value;

    if (!value) {
      closeSearchBox();
    } else {
      invalidateSearchQuery();
      setSearchText(value);
      openSearchBox();
    }
  }

  function handleSelect(id) {
    navigate(`/app/links?link=${id}`);
    closeSearchBox();
    setSearchText("");
    invalidateSearchQuery();
  }

  return (
    <StyledDashboardSearch>
      <SearchBar>
        <BiSearch size={18} />
        <input onChange={handleSearch} type="text" placeholder="Search..." />
      </SearchBar>
      {showResults && (
        <SearchBox ref={ref}>
          {isLoading ? (
            <Spinner />
          ) : data.length === 0 ? (
            <Alert>Nothing found</Alert>
          ) : (
            data.map((el) => (
              <Link key={el.id} onClick={() => handleSelect(el.id)}>
                <div>
                  <span>Title</span>
                  <p>{el.title}</p>
                </div>
                <div>
                  <span>Long Link</span>
                  <p>{el.longLink}</p>
                </div>
                <div>
                  <span>Short Link</span>
                  <p>{el.shortLink}</p>
                </div>
              </Link>
            ))
          )}
        </SearchBox>
      )}
    </StyledDashboardSearch>
  );
}

export default DashboardSearch;
