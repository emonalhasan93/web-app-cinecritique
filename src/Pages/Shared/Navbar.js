import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const token = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.setItem('token', '');
        window.location = '/';
    }
    const menutItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/contact">Conatact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        {token !== 'undefined' && token ? <li><Link onClick={handleLogout}>Log Out</Link></li> : <li><Link to="/signup">Sign Up</Link></li>}


    </>
    return (
        <div className="navbar  px-12 bg-accent     shadow-lg ">
            <div className="navbar-start sticky-top ">
                <div className="dropdown sticky-top ">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                        {menutItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white font-bold"> CINECRITIQUE</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-2 ml-44 pe-5 ps-5 font-bold text-white">
                    {menutItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;