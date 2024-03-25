const Book = ({book}) => {
    console.log(book);
    return (
        <div className="lexend w-[400px] bg-base-100 border-2 rounded-xl p-6">
            <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl h-[230px]">
                <img src={book.img} alt="Shoes" className="ml-20 pb-6 -mt-2" />
            </figure>
            <div className="  ">
                <h2 className="playfair font-bold text-2xl my-">{book.name}</h2>
                <p>By: {book.author}</p>
                <hr className="my-4 border-dashed border-[1.60px]" />
                <div className="flex justify-between">
                    
                </div>
            </div>
        </div>
    );
};

export default Book;