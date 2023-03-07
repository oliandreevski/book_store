import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/Book";
import BookList from "./components/Book-List";
import Filters from "./components/Genre-filter";

import Navbar from "./components/Navbar";
import { booksAtom } from "./store";

function App() {
  const [, setBooks] = useAtom(booksAtom);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:3000/listofbooks.json");
    const data = await res.json();
    setBooks(data.sort((a, b) => a.author.localeCompare(b.author)));
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <BookList />
    </>
  );
}

export default App;
