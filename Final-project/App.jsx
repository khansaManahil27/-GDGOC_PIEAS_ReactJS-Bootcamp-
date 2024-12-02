/* eslint-disable react-refresh/only-export-components */
import  { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

export const BooksProvider = ( children ) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [favBooks, setFavBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/assets/books.json");
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const addBorrowedBook = (title) => {
    setBorrowedBooks((prev) => [...prev, title]);
  };

  const addFavBook = (title) => {
    setFavBooks((prev) => [...prev, title]);
  };

  return (
    <BooksContext.Provider
      value={{ books, borrowedBooks, favBooks, addBorrowedBook, addFavBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};
