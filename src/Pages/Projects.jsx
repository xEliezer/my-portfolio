import React from "react";

const Projects = () => {
    return (
        <>
            <section className="about-section container my-auto mx-auto mt-60 mb-96">
                <div className="container-header">
                    <h1 className="font-bold ps-8">Projects</h1>
                </div>
                <div className="da relative flex min-h-screen flex-col justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-center"></div>
                    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                        <div className="z-10 h-full w-full overflow-hidden rounded-xl opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                            <img src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                        </div>
                        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                            <p className="text-sm font-semibold text-gray-200 shadow-xl">In Jesus Name Church</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;