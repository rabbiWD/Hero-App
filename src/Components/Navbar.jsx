import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm">
           <div className="navbar-start">
             <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
               </div>
               <ul
                 tabIndex={0}
                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                 <li>
                    <NavLink to='/apps'>Apps</NavLink>
                </li>
                 <li>
                    <NavLink to='/installtion'>Installation</NavLink>
                </li>
               </ul>
             </div>
             <Link to='/' className="btn btn-ghost text-2xl font-bold"><img className='w-10' src={logo} alt="" />HERO.IO</Link>
           </div>
           <div className="navbar-center ">
             <ul className="menu menu-horizontal px-1 hidden lg:flex text-base">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                 <li>
                    <NavLink to='/apps'>Apps</NavLink>
                </li>
                 <li>
                    <NavLink to='/installtion'>Installation</NavLink>
                </li>
             </ul>
            
           </div>
           <div className="navbar-end">
             <NavLink to='/https://github.com/' className="btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-base"><FaGithub /> Contribute</NavLink>
           </div>
        </div>
    );
};

export default Navbar;