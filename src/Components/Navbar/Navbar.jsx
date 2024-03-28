// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    const links = <>
        <li className="font-semibold"><NavLink to="/" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Home</NavLink></li>
        <li className="font-semibold"><NavLink to="/ListedBooks" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Listed Books</NavLink></li>
        <li className="font-semibold"><NavLink to="/PagesToRead" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Pages to Read</NavLink></li>
        <li className="font-semibold"><NavLink to="/RecomendedBooks" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Recomended Books</NavLink></li>
        <li className="font-semibold"><NavLink to="/AuthorSpotlight" className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}>Author Spotlight</NavLink></li>
        
    </>

    return (
        <div className="navbar bg-base-100 work">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Books Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn font-semibold mr-2 bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn font-semibold bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

Navbar.propTypes = {

};

export default Navbar;