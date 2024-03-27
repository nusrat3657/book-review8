/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../utility/wishLocalStorage";
import { SlLocationPin } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { BsSdCard } from "react-icons/bs";

const Wish = () => {
    const [appliedBooks, setAppliedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const books = useLoaderData();
    useEffect(() => {
        const storedBookIds = getStoredWishList();
        if (books.length > 0) {
            const booksApplied = books.filter(book => storedBookIds.includes(book.id))
            setAppliedBooks(booksApplied);
            setDisplayBooks(booksApplied);
            // console.log(books, storedBookIds, booksApplied);
        }
    }, [books])
    return (
        <div>
            {
                appliedBooks.map(book => <section key={book.id}>
                    <div className="hero border-2 rounded-xl justify-start mb-5">
                        <div className="hero-content flex-col lg:flex-row gap-12">
                            <div className="lg:w-[350px] lg:h-[270px] bg-[#131313]/5 rounded-xl p-6 pl-20">
                                <img src={book.img} className="max-w-sm rounded-lg shadow-2xl pt-4" />
                            </div>
                            <div className="w-full">
                                <h1 className="playfair text-xl font-bold">{book.name}</h1>
                                <p className="py-2">By: {book.author}</p>
                                <div className='lg:flex gap-4'>
                                    <div className=" my-4">
                                        <p className="flex gap-3"><span className="font-bold mt-1">Tag: </span>
                                            {
                                                book.tags.map(tag => (
                                                    <p key={tag.id} className="bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-2 rounded-full ">{tag}</p>
                                                ))
                                            }
                                        </p>
                                    </div>
                                    <div className='flex gap-1 mt-6'>
                                        <SlLocationPin className='mt-1'></SlLocationPin><span>Year of Publishing: {book.yearOfPublishing}</span>
                                    </div>
                                </div>
                                <div className="lg:flex gap-5">
                                    <div className='flex gap-1'>
                                        <IoPeopleOutline className='mt-1'></IoPeopleOutline><span>Publisher: {book.publisher}</span>
                                    </div>
                                    <div className='flex gap-1'>
                                        <BsSdCard className='mt-1'></BsSdCard><span>Page {book.totalPages}</span>
                                    </div>
                                </div>
                                <hr className="my-5" />
                                <div className='flex gap-4'>
                                    <a className="bg-[#328EFF]/15 text-[#328EFF] rounded-full px-4 pt-3">Category: {book.category}</a>
                                    <a className="bg-[#FFAC33]/15 text-[#FFAC33] rounded-full px-4 pt-3">Rating: {book.rating}</a>
                                    <button className="bg-[#23BE0A] rounded-full px-4 py-2 text-white btn">View Details</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>)
            }
        </div>
    );
};

export default Wish;