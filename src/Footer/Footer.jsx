import React from "react";

const Footer = () => {
    return (
        <footer className="container w-full mx-auto my-auto p-8 m-8 bg-gray-100">
            <div class="h-0.5 w-full bg-white dark:bg-gray-500"></div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
                <div>
                    <p className="font-bold text-xl">Eliezer Layug.</p>
                </div>
                <div className="space-x-4 flex flex-row items-center">
                    <a href="https://github.com/xEliezer"><i className="hover:text-gray-500 fa-brands fa-github p-3"></i></a>

                    <a href="https://www.facebook.com/eliezer.layug"><i className="hover:text-gray-500 fa-brands fa-facebook p-3"></i></a>

                    <a href="https://www.instagram.com/eliezerlayug/"><i className="hover:text-gray-500 fa-brands fa-instagram p-3"></i></a>

                    <a href="https://www.linkedin.com/in/eliezer-layug-6960bb283/"><i className="hover:text-gray-500 fa-brands fa-linkedin p-3"></i></a>
                </div>                    
            </div>
        </footer>
    )
}

export default Footer;