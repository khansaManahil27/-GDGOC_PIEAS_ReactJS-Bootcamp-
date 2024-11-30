import React from "react";
import BooksProvider from "../context/BooksContext";
import BookCard from "./components/BookCard";
import BorrowedBooks from "./components/BorrowedBooks";
import FavBooks from "./components/FavBooks";

const books = [
  { id: 1, title: "Book One" },
  { id: 2, title: "Book Two" },
  { id: 3, title: "Book Three" },
];

const App = () => {
  return (
    <BooksProvider>
      <div>
        <h1>Library</h1>
        <div>
          {books.map((book) => (
            <BookCard key={book.id} title={book.title} />
          ))}
        </div>
        <BorrowedBooks />
        <FavBooks />
      </div>
    </BooksProvider>
  );
};

export default App;
