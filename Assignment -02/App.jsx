
import HighRatedBooks from "./components./HighRatedBooks";
import BookDetails from "./components./BookDetails";
import FictionBooks from "./components./FictionBooks";
import BookAuthors from "./components./BookAuthors";
import BookCard from "./components./BookCard";

  
  





const App = () => {
  return (
    <div>
      <h1>Library Manager</h1>
      <HighRatedBooks />
      <FictionBooks />
      <BookAuthors />
      <BookDetails />
      <BookCard
        title="Book Title"
        author="Author Name"
        rating={4.5}
        genre="Fiction"
      />
    </div>
    
  );
};

export default App;




