import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero mx-4 mt-10 lg:h-[550px] h-[250px] rounded-xl lg:rounded-[30px] -ml-1" style={{ backgroundImage: 'url(https://i.ibb.co/8dRzwtr/banner.png)' }}>
            <div className="lg:max-w-md">
                <h1 className="playfair mb-10 lg:text-6xl font-bold lg:-ml-[500px] lg:w-[520px] -ml-24 w-36">Books to freshen up your bookshelf</h1>
                <Link to="/books" className="bg-[#23BE0A]  px-7 rounded-lg text-md text-white font-bold hover:bg-gray-300 btn lg:-ml-[500px] -ml-24 worksans">View The List</Link>
            </div>
        </div>
    );
};

export default Banner;