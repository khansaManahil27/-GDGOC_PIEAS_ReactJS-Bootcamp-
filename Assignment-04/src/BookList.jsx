import  { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCard from "./BookCard";

const BookList = () => {
  const { books } = useContext(BooksContext);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          genre={book.genre}
        />
      ))}
    </div>
  );
};

export default BookList;