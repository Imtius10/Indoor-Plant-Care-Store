import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'
const Navbar = () => {
    const links = <>
        <NavLink className={({ isActive }) => isActive ? "underline text-[#d3fda3]  font-semibold text-lg " : "font-semibold text-lg"} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "underline text-[#75d705] font-semibold text-lg " : "font-semibold text-lg"} to={'/profile'}>Plants</NavLink>
          <NavLink className={({ isActive }) => isActive ? "underline text-[#75d705] font-semibold text-lg " : "font-semibold text-lg"} to={'/profile'}>My Profile</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-full h-[155px]' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center gap-5 hidden lg:flex">
                    {links}
                </div>
                <div className="navbar-end gap-5">
                   <NavLink to={'/login'}><button className='btn btn-success rounded-3xl'>Login</button></NavLink>
                   <NavLink to={'/register'}> <button className='btn btn-success rounded-3xl'>Register</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;