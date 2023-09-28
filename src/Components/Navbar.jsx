/* eslint-disable no-unused-vars */
import React from "react";
import { ReactDOM } from "react";
import { NavLink, Navigate } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="w-1/3 justify-between">
            <ul className="flex items-center justify-end">
                <li className="navlink">
                    <a href="/about" className="items-center font-bold text-xl p-4">about</a>
                </li>
                <li className="navlink">
                    <a href="/portfolio" className="items-center font-bold text-xl p-4">portfolio</a>
                </li>
                <li className="navlink">
                    <a href="/contact" className="items-center font-bold text-xl p-4">contact</a>
                </li>
                
                <li className="navlink">
                    <i className="button fa-solid fa-cloud-sun text-xl p-5"></i>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;