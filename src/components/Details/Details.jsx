import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../utility/readLocalStorage";


const Details = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt);
    console.log(book);

    const handleReadBooks = () =>{
        saveReadBooks(idInt);
        toast('Book added to read');
    }
    const handleWishLists = () =>{
        toast('Book added to wishlist ')
    }

    return (

        // <h3>show details</h3>

        <div className="lg:grid grid-cols-2 gap-10 my-10 lg:mx-0 mx-5">
            <div className="bg-[#131313]/5 rounded-xl lg:h-[630px]">
                <img className="lg:h-[450px] lg:mt-[90px] lg:ml-36 ml-28" src={book.img} alt="" />
            </div>
            <div>
                <h2 className="playfair text-4xl font-bold">{book.name}</h2>
                <p className="my-5">By: {book.author}</p>
                <hr />
                <p className="my-3">{book.category}</p>
                <hr />
                <p className="text-sm my-4"><span className="font-bold">Review: </span>{book.review}</p>
                <div className=" my-4">
                    <p className="flex gap-3"><span className="font-bold mt-1">Tag: </span>
                        {
                            book.tags.map(tag => (
                                <p key={tag} className="bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-2 rounded-full ">{tag}</p>
                            ))
                        }
                    </p>
                </div>
                <hr />
                <div className="flex gap-6 text-sm my-5">
                    <div className="">
                        <p>Number of Pages: </p>
                        <p className="my-2">Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p className="mt-2">Rating: </p>


                    </div>
                    <div className="font-bold">
                        <p>{book.totalPages}</p>
                        <p className="my-2">{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p className="mt-2">{book.rating}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleReadBooks} className="btn border-2 bg-none">Read</button>
                    <button onClick={handleWishLists} className="btn bg-[#59C6D2] text-white font-bold ml-5">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Details;