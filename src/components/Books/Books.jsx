import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch('BookInformation.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="playfair text-4xl font-bold text-center  mt-20 mb-10">Books</h2>
            <div className="lg:grid grid-cols-3 gap-5 mb-3">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;