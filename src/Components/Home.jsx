import React from 'react'

const Home = () => {
  return (
    <>
      <section className='hero-section flex items-center container mx-auto pb-8 mb-8'>
            <div className='w-20 p-8'>
                <ul>
                    <li>
                          <a href="https://github.com/xEliezer"><i className="hover:text-gray-500 fa-brands fa-github p-3"></i></a>
                    </li>
                    <li>
                          <a href="https://www.facebook.com/eliezer.layug"><i className="hover:text-gray-500 fa-brands fa-facebook p-3"></i></a>
                    </li>
                    <li>
                          <a href="https://www.instagram.com/eliezerlayug/"><i className="hover:text-gray-500 fa-brands fa-instagram p-3"></i></a>
                    </li>
                    <li>
                          <a href="https://www.linkedin.com/in/eliezer-layug-6960bb283/"><i className="hover:text-gray-500 fa-brands fa-linkedin p-3"></i></a>
                    </li>
                </ul>
            </div>
            <div className='justify-start p-10 leading-tight'>
                <p>
                    Hi! I'am a
                </p>
                    <h1 className='hero-text-header font-bold leading-tight'>
                        Front-End Web Developer
                    </h1>
                <p className='leading-tight'>
                    with a passion of creating clean and beautiful 
                    web applications.
                </p>

                <br />

                <div className='flex space-x-4'>
                      <button className='bg-black shadow-lg font-semibold 
                        hover:bg-gray-800 text-gray-100 py-4 px-6 rounded-lg'>
                          <i class="fa-solid fa-file-export"></i> download CV
                      </button>

                      <button className='bg-black shadow-lg font-semibold 
                        hover:bg-gray-800 text-gray-100 py-4 px-6 rounded-lg'>
                          <i class="fa-solid fa-paper-plane"></i> hire me
                      </button>
                </div>

            </div>
            <div className='hero-img'>
                <img src="./assets/pic.png" alt="" />
            </div>

            
      </section>
    </>
  )
}

export default Home;
