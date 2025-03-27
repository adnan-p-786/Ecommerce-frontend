import React from 'react'
import img from '../assets/fruits-splash.png'

function About() {
  return (
    <section className="flex justify-center items-center w-full bg-[#F4E9E1] min-h-screen p-4">
      <div className="container w-full md:w-[90%] lg:w-[70%] mt-14 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-[50%] flex justify-center">
          <img className="w-[250px] md:w-[300px] lg:w-[400px] h-[300px] md:h-[400px] lg:h-[500px]" src={img} alt="Brand" />
        </div>
        <div className="w-full md:w-[50%] mt-8 md:mt-0 lg:mt-28 xl:mt-28 md:ml-10 text-center md:text-left">
          <h1 className="uppercase font-bold text-3xl">Brand Info</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nemo voluptatibus, sapiente id rerum modi ad provident necessitatibus?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nemo voluptatibus, sapiente id rerum modi ad provident necessitatibus?
          </p>
          <button className="bg-red-500 mt-4 text-white font-semibold px-4 py-2 rounded-xl shadow-2xl hover:bg-red-600">
            Learn more
          </button>
        </div>
      </div>
    </section>
  )
}

export default About