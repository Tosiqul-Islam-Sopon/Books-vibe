import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(book => setBooks(book));
      }, []); 

    return (
        <div className="space-y-6">
            <h2 className="text-4xl font-bold text-center play">Books</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;