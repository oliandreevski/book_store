import { atom } from "jotai";

function filterBooks(books, searchQuery, selectedGenre) {
  return books.filter((book) => {
    return (
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedGenre ||
        book.genre.toLowerCase() === selectedGenre.toLowerCase())
    );
  });
}

export const booksAtom = atom([]);
export const filterAtom = atom("");
export const filterGenreAtom = atom("");
export const filteredNameListAtom = atom((get) => {
  const textSearch = get(filterAtom);
  const genreSearch = get(filterGenreAtom);
  const nameList = get(booksAtom);
  if (textSearch || genreSearch) {
    return filterBooks(nameList, textSearch, genreSearch);
  }
  return nameList;
});
