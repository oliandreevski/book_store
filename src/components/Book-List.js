import { useAtom } from "jotai";
import React from "react";
import { filteredNameListAtom } from "../store";
import Book from "./Book";
import "./book-list.css";

const BookList = () => {
  const [books] = useAtom(filteredNameListAtom);

  console.log(books);
  return (
    <div className="container">
      <div className="book-list">
        {books.map((book, i) => (
          <Book key={i} item={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
