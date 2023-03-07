import React, { useState } from "react";
import { useAtom } from "jotai";
import { filterAtom } from "../store";
import "./search-filter.css";

const SearchFilter = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(search);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        value={search}
        placeholder="Search form books by keyword/title/author"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-form__button">Search</button>
    </form>
  );
};

export default SearchFilter;
