import React from 'react'
import bg from '../assets/banner-bg.jpg'

function Contacts() {
  return (
    <section
  className="h-screen  w-full bg-cover bg-center p-6"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="flex justify-center">
    <div className="w-full max-w-lg bg-transparent p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center text-black drop-shadow-lg">
        Contact Us
      </h1>
      <form className="space-y-4">
        <div className="text-black">
          <label htmlFor="name" className="block text-lg font-medium pt-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-black rounded-lg"
            placeholder="Enter your name"
          />

          <label htmlFor="email" className="block text-lg font-medium pt-4">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-black rounded-lg"
            placeholder="Enter your email"
          />

          <label htmlFor="number" className="block text-lg font-medium pt-4">
            Mobile Number
          </label>
          <input
            type="text"
            id="number"
            className="w-full p-2 border border-black rounded-lg"
            placeholder="Enter your mobile number"
          />

          <label htmlFor="message" className="block text-lg font-medium pt-4">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-black rounded-lg bg-transparent"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="h-12 w-40 px-4 text-white text-lg font-bold bg-green-500 rounded-xl shadow-lg transition transform hover:bg-green-600 active:scale-95">
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  )
}

export default Contacts