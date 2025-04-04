import React from 'react'
import fruit1 from '../assets/apple.png'
import fruit2 from '../assets/avocado.png'
import fruit3 from '../assets/cherry.png'
import fruit4 from '../assets/orange.png'
import fruit5 from '../assets/anar.jpg'
import fruit6 from '../assets/dragon.jpg'
import fruit7 from '../assets/pappaya.jpg'
import fruit8 from '../assets/shammam.jpg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";

// const cart = [
//   {
//     id: 1,
//     title: "Fresh Red Apple",
//     Price: "$5.00",
//     image: fruit1
//   },
//   {
//     id: 2,
//     title: "Fresh Avocado",
//     Price: "$10.00",
//     image: fruit2
//   },
//   {
//     id: 3,
//     title: "Fresh Cherries",
//     Price: "$49.00",
//     image: fruit3
//   },
//   {
//     id: 4,
//     title: "Fresh oranges",
//     Price: "$40.00",
//     image: fruit4
//   },
//   {
//     id: 5,
//     title: "Fresh Anar",
//     Price: "$60.00",
//     image: fruit5
//   },
//   {
//     id: 6,
//     title: "Fresh Dragonfruit",
//     Price: "$55.00",
//     image: fruit6
//   },
//   {
//     id: 7,
//     title: "Fresh Pappaya",
//     Price: "$10.00",
//     image: fruit7
//   },
//   {
//     id: 8,
//     title: "Fresh Shammam",
//     Price: "$29.00",
//     image: fruit8
//   },
// ]

function Cart() {

  // const products = useSelector((state) => state.product.cart_item)

  // console.log({ products });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log(userId);

    if (userId) {
      fetch(`http://localhost:3000/api/get-cart/${userId}`)
        .then(response => response.json())
        .then(data => { 
          console.log("Fetched Data:", data);
          // setCartItems(Array.isArray(data.cartItems) ? data.cartItems : []);
          setCartItems(data)
        })
        .catch(error => console.error("Error fetching cart items:", error));
    }
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.product.price) || 0;
    return acc + price;
  }, 0);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart); // assuming you're managing cartItems via state
  };
  
  

  return (
    <div className="flex items-center justify-center w-[100%] mt-10">
      <div className="w-[80%] bg-white shadow-lg rounded-lg p-5">
        <h1 className="bg-yellow-500 text-2xl text-center uppercase font-bold p-3 rounded-t-lg">
          Your Cart
        </h1>
        <table className="mt-4 w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-300 text-gray-700">
            <tr>
              <th className="border border-gray-400 p-3 text-center">Product</th>
              <th className="border border-gray-400 p-3 text-center">Quantity</th>
              <th className="border border-gray-400 p-3 text-center">Price</th>
              <th className="border border-gray-400 p-3 text-center">Remove</th>
            </tr>
          </thead>
          <tbody className="bg-white text-2xl"> 
            {cartItems.map((item) => (
                <tr key={item.id} className="text-center border-b border-gray-300 transition">
                  <td className="border border-gray-300 p-3 text-center">
                    <div className="items-center justify-center flex">
                      <img className="h-20 w-20" src={item.product.image || ''} alt={item.title || 'Product'} />
                    </div>
                    <h1 className="mt-4 text-lg">{item.product.name || 'Unknown Product'}</h1>
                  </td>
                  <td className="border border-gray-300 p-3 text-center">{item.product.unit}</td>
                  <td className="border border-gray-300 p-3 text-center text-red-400">$ {item.product.price || '$0.00'}</td>
                 <td><button onClick={()=>handleRemove(item.id)} className='ml-5 text-3xl hover:text-red-500 cursor-pointer'><MdOutlineDeleteOutline /></button></td>   
                </tr>
            ))}
          </tbody>


        </table>
        <div className="flex justify-between items-center bg-yellow-500 text-white text-xl font-semibold p-4 mt-4 rounded-b-lg">
          <span>Total</span>
          <span>$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>

  )
}

export default Cart