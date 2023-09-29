/* eslint-disable no-unused-vars */
import React from "react";
import { ReactDOM } from "react";
import { NavLink, Navigate } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="w-1/3 justify-between">
            <ul className="flex items-center justify-end">
                <li className="navlink">
                    <a href="/about" className="items-center font-bold text-xl p-4 hover:text-gray-400">about</a>
                </li>
                <li className="navlink">
                    <a href="/portfolio" className="items-center font-bold text-xl p-4 hover:text-gray-400">portfolio</a>
                </li>
                <li className="navlink">
                    <a href="/contact" className="items-center font-bold text-xl p-4 hover:text-gray-400">contact</a>
                </li>      
                    
                <button><i className="fa-solid fa-sun text-xl ms-2 me-0 p-4 hover:text-yellow-500"></i></button>
            </ul>
        </nav>
    )
}

export default Navbar;