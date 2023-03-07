import { useAtom } from "jotai";
import React, { useMemo, useState } from "react";
import { booksAtom, filterGenreAtom } from "../store";
import "./genre-filter.css";

const GenreFilter = () => {
  const [books] = useAtom(booksAtom);
  const [filter, setFilter] = useAtom(filterGenreAtom);
  const [item, setItem] = useState("");
  const options = useMemo(
    () =>
      books
        .map((book) => book.genre)
        .filter((v, i, a) => a.findIndex((item) => item === v) === i),
    [books]
  );

  console.log(item);
  return (
    <>
      <select
        name="genre"
        className="genre-select"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      >
        <option className="genre-select__item" value="">
          All
        </option>
        {options.map((genre, i) => (
          <option className="genre-select__item" key={i} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </>
  );
};

export default GenreFilter;
