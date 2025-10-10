import React from 'react';
import { FaGithub } from "react-icons/fa";
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? 'text-[#632ee3] border-b-2 border-[#632ee3] font-semibold'
      : 'text-gray-700 hover:text-[#632ee3]';

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to='/' className={activeClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/apps' className={activeClass}>Apps</NavLink>
            </li>
            <li>
              <NavLink to='/installtion' className={activeClass}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl font-bold text-[#632ee3]">
          <img className='w-10' src={logo} alt="Logo" /> HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base gap-2">
          <li>
            <NavLink to='/' className={activeClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/apps' className={activeClass}>Apps</NavLink>
          </li>
          <li>
            <NavLink to='/installtion' className={activeClass}>Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-base"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;




