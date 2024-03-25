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
            <h2 className="playfair text-4xl font-bold text-center my-10">Books: {books.length}</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;