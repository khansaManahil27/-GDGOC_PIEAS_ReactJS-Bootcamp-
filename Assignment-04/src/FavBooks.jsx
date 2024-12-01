import  { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const FavBooks = () => {
  const { favBooks } = useContext(BooksContext);

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favBooks.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavBooks;