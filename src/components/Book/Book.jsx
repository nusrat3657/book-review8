import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";


const Book = ({ book }) => {
    console.log(book);
    const { name, author, img, review, rating, category, tags } = book;
    return (
        <div className="lexend lg:w-[400px] bg-base-100 border-2 rounded-xl p-6">
            <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl h-[230px]">
                <img src={img} alt="" className="ml-20 pb-6 -mt-2" />
            </figure>
            <div className="">
                <div className=" mt-4 flex gap-4">
                    {
                        tags.map(tag => (
                                <p className="bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-2 rounded-full ">{tag}</p>
                        ))
                    }
                </div>
                <h2 className="playfair font-bold text-2xl mt-4 mb-2">{name}</h2>
                <p className="worksans">By: {author}</p>
                <hr className="my-4 border-dashed border-[1.60px]" />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <div className="flex">
                        <p>{rating} </p> <span className="ml-2 mt-1"><FaRegStar></FaRegStar></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes ={
    name: PropTypes.object.isRequired
}

export default Book;