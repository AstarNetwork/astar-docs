import React, { useRef } from "react";
import { useSearch } from "../../theme/Root";
import styles from "./search.module.css";

const ENTER_KEY = "Enter";

export function Search({ searchTags }: { searchTags: string[] }): JSX.Element {
  const { setQuery } = useSearch();
  const inputRef = useRef(null);

  function handleSearch() {
    setQuery(inputRef.current.value);
    inputRef.current.value = "";
  }

  function handleEnter(event) {
    if (event.key === ENTER_KEY) {
      handleSearch();
    }
  }

  function handleTagClick(tag: string) {
    setQuery(tag);
  }

  function handleTagEnter(event, tag: string) {
    if (event.key === ENTER_KEY) {
      setQuery(tag);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          ref={inputRef}
          type="text"
          id="search_input"
          placeholder="Search"
          onKeyUp={handleEnter}
        />
        <button type="button" onClick={handleSearch}>
          <svg
            width="20"
            height="20"
            className="search-icon"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.suggestionsContainer}>
        <p>Popular searches:</p>
        <div className={styles.tagsContainer}>
          {searchTags.map((tag, index) => (
            <span
              tabIndex={0}
              key={`tag-${tag}`}
              className={styles.diffusedBackground}
              onClick={() => handleTagClick(tag)}
              onKeyUp={(event) => handleTagEnter(event, tag)}
            >{`#${tag}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
