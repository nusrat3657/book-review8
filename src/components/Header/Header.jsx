/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom"

const Header = () => {

    const links = <>
        {/* <li className="px-4 py-2 rounded-lg hover:border-[#23BE0A] hover:border-2 hover:bg-[#23BE0A]"><NavLink to="/">Home</NavLink></li> */}
        <li className=""><NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A] " : ""
        }>Home</NavLink></li>
        <li><NavLink to="/books" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Listed Books</NavLink></li>
        <li><NavLink to="/pages" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Pages to Read</NavLink></li>
        <li><NavLink to="/review" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2 rounded-lg border-[#23BE0A]" : ""
        }>Review</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 -ml-2 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-2xl font-bold">Bookworm's Paradise</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="mt-2 menu menu-horizontal px-1 ">
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