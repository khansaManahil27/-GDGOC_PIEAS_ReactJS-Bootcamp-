// Import the Books array
import Books from './books.js';

//  Functions using map/filter

//  Print book titles with rating higher than 4.5
const highRatedBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
console.log("Books with rating higher than 4.5:", highRatedBooks);

//  Iterate over books and print their details using destructuring
const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
        console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
};
printBookDetails();

// Print book titles with the genre “fiction”
const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
console.log("Fiction Books:", fictionBooks);

//  Display an array of book authors
const bookAuthors = Books.map(book => book.author);
console.log("Authors of books:", bookAuthors);
