/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { BooksContext } from ".../context/BooksContext";

const Button = ({ title }) => {
  const { addBorrowedBook, addFavBook } = useContext(BooksContext);

  return (
    <div>
      <button onClick={() => addBorrowedBook(title)}>Add Me</button>
      <button onClick={() => addFavBook(title)}>Favorite</button>
    </div>
  );
};

export default Button;