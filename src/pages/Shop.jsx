import React from 'react'
import pic from '../assets/fruit-plate2.png'

function Shop() {
  return (
    <section className="flex justify-center items-center w-full min-h-screen p-4">
      <div className="container w-full md:w-[90%] lg:w-[85%] mt-14 flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-[40%] mt-8 md:mt-0 lg:mt-28 xl:mt-28 md:ml-10 text-center md:text-left">
          <h1 className="uppercase font-bold text-3xl">ONLINE FRUIT STORE</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nemo voluptatibus, sapiente id rerum modi ad provident necessitatibus?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nemo voluptatibus, sapiente id rerum modi ad provident necessitatibus?
          </p>
          <button className="bg-red-500 mt-4 text-white font-semibold px-4 py-2 rounded-xl shadow-2xl hover:bg-red-600">
            Order Now
          </button>
        </div>
        <div className="w-full md:w-[60%] flex justify-center">
          <img className="w-[250px] md:w-[300px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px]" src={pic} alt="Brand" />
        </div>
        
      </div>
    </section>
  )
}

export default Shop