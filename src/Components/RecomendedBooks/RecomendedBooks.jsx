import RecomendedBook from "./RecomendedBook";
import { useEffect, useState } from "react";

const RecomendedBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(book => setBooks(book));
      }, []); 
    // const recomendedBooks = books.filter(book => book.award.length > 1);
    const recomendedBooks = [];
    books.forEach( book =>{
        if (book.award.length>1){
            recomendedBooks.push(book);
        }
    });
    console.log(recomendedBooks);
    return (
        <div className="space-y-10 mt-10">
            {
                recomendedBooks.map(book => <RecomendedBook key={book.bookId} book={book}></RecomendedBook>)
            }
        </div>
    );
};

export default RecomendedBooks;