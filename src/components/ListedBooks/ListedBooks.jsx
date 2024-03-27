import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../utility/readLocalStorage";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();

    const [appliedBooks, setAppliedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    // const handleBooksFilter = sort
    // const data = [5,1,6,9,3];
    console.log(displayBooks);
    

    const handleBookSort = sort =>{
        // const sortBook = displayBooks.sort((a, b) => b - a);
        // console.log(sortBook);
        if (sort === 'rating') {
            const rating = appliedBooks.sort((a, b) => b - a);
            setAppliedBooks(rating);
            setDisplayBooks(rating);
            // console.log(rating);
        }
    }

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();
        if (books.length > 0) {
            const booksApplied = books.filter(book => storedBookIds.includes(book.id))
            setAppliedBooks(booksApplied);
            setDisplayBooks(booksApplied);
            // console.log(books, storedBookIds, booksApplied);
        }
    }, [books])


    return (
        <div className="lg:px-0 px-3">
            <div className="bg-[#131313]/5 h-[100px] rounded-xl">
                <h3 className="text-2xl font-bold text-center pt-8">Books</h3>
            </div>
            <details className="dropdown mt-5 lg:ml-[585px]">
                <summary className="m-1 bg-[#23BE0A] text-white btn">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleBookSort('rating')}><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Published Year</a></li>
                </ul>
            </details>
            {/* tabs */}
            <div className="flex items-center lg:-mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 my-10 ">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>

                </Link>
                <Link
                    to={`wish`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>



                {/* <ul>
                    {
                        appliedBooks.map(book => <li key={book.id}>
                            <span>{book.rating} {book.totalPages} {book.yearOfPublishing}</span>
                        </li>)
                    }
                </ul> */}

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;