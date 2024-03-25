import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!!</h2>
            <button className="px-4 py-2 rounded-lg bg-[#23BE0A] text-white"><Link to="/">Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;