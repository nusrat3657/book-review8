import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const book = books.find(book => book.id == id);
    console.log(book);
    return (

        // <h3>show details</h3>

        <div className="lg:grid grid-cols-2 gap-10 my-10">
            <div className="bg-[#131313]/5 rounded-xl lg:h-[630px]">
                <img className="h-[450px] lg:mt-[90px] lg:ml-36" src={book.img} alt="" />
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
                                <p className="bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-2 rounded-full ">{tag}</p>
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
                    <button className="btn border-2 bg-none">Read</button>
                    <button className="btn bg-[#59C6D2] text-white font-bold ml-5">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Details;