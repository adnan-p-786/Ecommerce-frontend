import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="container mx-auto flex justify-between items-center py-5 px-5">
        {/* Logo */}
        <div className="flex gap-2 uppercase text-3xl font-bold">
          <p className="text-red-500">fruit</p>
          <p className="text-yellow-400">store</p>
          <p className="text-green-700">
            <FaLeaf />
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-10 text-xl">
             <Link to='/'>
             <li className="hover:text-red-500 font-semibold cursor-pointer">Home</li>
             </Link>
            
            <Link to='/products'>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Products</li>
            </Link>
            
            <Link to='/About'>
            <li className="hover:text-red-500 font-semibold cursor-pointer">About</li>
            </Link>
            
            <Link to='/Shop'>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Shop</li>
            </Link>
            
            <Link to='/Contacts'>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Contacts</li>
            </Link>
            
            
          </ul>
        </div>

        {/* Cart Icon */}
      
        <div className="text-2xl  text-red-500 cursor-pointer relative">
          <Link to='/Cart'>
          <IoMdCart />
          </Link>
          
        </div>

        <div>
          <Link to='/login'>
          <button className="cursor-pointer hover:bg-yellow-500 text-2xl flex bg-yellow-400 rounded-full text-white py-1 px-5"><CiLogin className="mt-1 mr-2" /> Login</button>
          </Link>
          
        </div>
        

        {/* Hamburger Menu (Mobile) */}
        <div className="text-2xl lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden text-white shadow-md absolute w-[370px] right-0 top-16 z-50 bg-blue-500  rounded-l-[200px]">
          <ul className="flex flex-col items-center gap-5 py-5 text-xl">
            <Link to='/' onClick={()=> setIsOpen(false)}>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Home</li>
            </Link>

            <Link to='/Products' onClick={()=> setIsOpen(false)}>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Products</li>
            </Link>

            <Link to='About/' onClick={()=> setIsOpen(false)}>
            <li className="hover:text-red-500 font-semibold cursor-pointer">About</li>
            </Link>

            <Link to='/Shop' onClick={()=> setIsOpen(false)}>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Shop</li>
            </Link>

            <Link to='/Contacts' onClick={()=> setIsOpen(false)}>
            <li className="hover:text-red-500 font-semibold cursor-pointer">Contacts</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
