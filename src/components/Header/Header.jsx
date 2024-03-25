import { NavLink } from "react-router-dom"

const Header = () => {

    const links = <>
        {/* <li className="px-4 py-2 rounded-lg hover:border-[#23BE0A] hover:border-2 hover:bg-[#23BE0A]"><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/books">Listed Books</NavLink></li>
        <li><NavLink to="/pages">Pages to Read</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="blog">Blog</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {/* <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 rounded-box ">
                        {links}
                    </ul> */}
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#23BE0A] border-2  text-white font-bold mr-4">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white font-bold">Sign up</a>
            </div>
        </div>
    );
};

export default Header;