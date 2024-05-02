import React from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItems = <>

        <li>
            <details>
                <summary>Home</summary>
                <ul>
                    <Link to='/'>
                        <li className="px-4">Home</li>
                    </Link>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>About</summary>
                <ul >
                    <Link to='/about'>
                        <li className="px-4">About</li>
                    </Link>
                </ul>
            </details>
        </li>

        {/* <li><Link to='/about'>About</Link></li> */}



    </>
    const navDrop = <>
        <li>
            <details>
            <summary>Home</summary>
            <ul className="p-2">
               <Link to='/'><li>Home</li></Link>
            </ul>
            </details>

        </li>
        <li>
            <details>
            <summary>About</summary>
            <ul className="p-2">
               <Link to='/about'><li>About</li></Link>
            </ul>
            </details>

        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navDrop}

                        {/* <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}

                    </ul>
                </div>
                <Link to='/'>
                    <img className='btn btn-ghost text-xl' src={logo} alt="" />

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navItems}
                    {/* <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li> */}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'> <button className="btn btn-outline btn-warning">Sign Up</button></Link>
            </div>
        </div>
    );
};

export default NavBar;