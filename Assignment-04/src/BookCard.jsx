// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookCard = ( title, author, rating, genre ) => {
  const { addBorrowedBook, addFavBook } = useContext(BooksContext);

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <p>Genre: {genre}</p>
      <button onClick={() => addBorrowedBook(title)}>Add Me</button>
      <button onClick={() => addFavBook(title)}>Favorite</button>
    </div>
  );
};

export default BookCard;