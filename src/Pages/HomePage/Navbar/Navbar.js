import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Departments</a></li>
                            <li><a>Pages</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><span className='text-blue-500'>Doc</span><span className='text-violet-500'>mic.</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='nav_link'><a href='#home'>Home</a></li>
                        <li className='nav_link'><a href='#about'>About</a></li>
                        <li className='nav_link'><a href='#department'>Departments</a></li>
                        <li className='nav_link'><a href='#pages'>Pages</a></li>
                        <li className='nav_link'><a href='#blog'>Blog</a></li>
                        <li className='nav_link'><a href='#contact'>Contacts</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-blue-500 text-white border-none">Free Consultation</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;