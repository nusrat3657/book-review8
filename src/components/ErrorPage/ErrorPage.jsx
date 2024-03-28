import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center p-28">
            <h2 className="text-4xl playfair font-bold mb-2">Opps!!! This page are not found.</h2>
            <p className="text-xl">Go Home...</p>
            <button className="btn px-4 py-2 my-5 rounded-lg bg-[#23BE0A] text-white"><Link to="/">Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;