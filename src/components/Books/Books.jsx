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
            <h2 className="playfair text-4xl font-bold text-center  mt-20 mb-5">Books</h2>
            <p className="text-center lg:w-[620px] lg:ml-[300px] mb-10">Success and knowledge — Read Books Avidly, and Then Work Hard & Smart. Let the One Who Steals Steal No More. Reading books can make you successful. Step by step. Lack of burning desire.</p>
            <div className="lg:grid grid-cols-3 gap-5 mb-3">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
            {/* {
                books.map(book => <Read key={book.id} book={book}></Read>)
            } */}
            </div>
        </div>
    );
};

export default Books;