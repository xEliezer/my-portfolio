import React from "react";

const About = () => {
    return (
        <>
            <section className="about-section container my-auto mx-auto">
                <div className="grid gap-8 grid-cols-2">
                    <div className="about-img flex mx-auto">
                        <img src="./assets/aboutpic.png" alt="elie" />
                    </div>
                    <div className="col">
                        <h1 className="font-bold text-xl p-8">About</h1>
                        <br />
                        <hr />
                        <p className="text-lg p-8 leading-8">
                            <span className="font-bold text-xl">Hi! I'am Eliezer but they call me Elie!</span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Qui similique dolore at necessitatibus odio voluptatibus? 
                            Aliquam laudantium vel impedit ducimus recusandae nam dolores 
                            dolor. Harum voluptates vero deserunt tempora perspiciatis?
                        </p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default About;