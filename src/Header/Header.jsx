import React from "react";
import Navbar from "../Components/Navbar";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="container mt-16 top-0 z-[20] 
                         mx-auto my-auto flex w-full items-center justify-between p-8 bg-white shadow-xl">
            <Logo />
            
            <Navbar />
        </header>
    )
}

export default Header;