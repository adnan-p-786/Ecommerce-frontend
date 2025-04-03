import React from 'react'
import fruit1 from '../assets/apple.png'
import fruit2 from '../assets/avocado.png'
import fruit3 from '../assets/cherry.png'
import fruit4 from '../assets/orange.png'
import fruit5 from '../assets/anar.jpg'
import fruit6 from '../assets/dragon.jpg'
import fruit7 from '../assets/pappaya.jpg'
import fruit8 from '../assets/shammam.jpg'

import { Card } from 'antd';
import { useDispatch } from 'react-redux'
import { setProdcut } from '../redux/prodcutSlice'
import { getData } from '../../../Admin/Admin/src/utils/ProductList'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'




const menu = [
  {
    id: 1,
    title: "Fresh Red Apple",
    link: "/",
    Price: "$5.00",
    image: fruit1
  },
  {
    id: 2,
    title: "Fresh Avocado",
    link: "/",
    Price: "$10.00",
    image: fruit2
  },
  {
    id: 3,
    title: "Fresh Cherries",
    link: "/",
    Price: "$49.00",
    image: fruit3
  },
  {
    id: 4,
    title: "Fresh oranges",
    link: "/",
    Price: "$40.00",
    image: fruit4
  },
  {
    id: 5,
    title: "Fresh Anar",
    link: "/",
    Price: "$60.00",
    image: fruit5
  },
  {
    id: 6,
    title: "Fresh Dragonfruit",
    link: "/",
    Price: "$55.00",
    image: fruit6
  },
  {
    id: 7,
    title: "Fresh Pappaya",
    link: "/",
    Price: "$10.00",
    image: fruit7
  },
  {
    id: 8,
    title: "Fresh Shammam",
    link: "/",
    Price: "$29.00",
    image: fruit8
  },
]


function Products() {
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])


  const fetchInfo = async () => {
    const response = await getData()
    console.log(response.data)
    if (response.data) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {

    const user = localStorage.getItem("id");
    console.log("aaaaaaaa", user);


    if (user) {
      const userData = (user);
      console.log("User Data:", userData);
      console.log("User is logged in:", userData);

      
      fetch('http://localhost:3000/api/post-cart', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user,  
          product: id,
          quantity: 1  
        })
      })
        .then(response => response.json())
        .then(data => console.log("Cart Data:", data))
        .catch(error => console.error("Error fetching cart:", error));

    } else {
      console.log("User is not logged in");
      // alert('please Login')
      // navigate("/Login");
    }
  };





  return (
    <section className='justify-center items-center w-[100%] flex'>
      <div className="container w-[85%]">
        <h1 className='text-2xl uppercase font-bold text-center mt-10'>Our menu</h1>

        <div className="grid grid-cols-1 mt-12 text-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.map((product, index) => (
            <Card
              key={index}
              title={product.name}
              variant="borderless"
              style={{
                width: 300,
              }}

            >
              <p> <img className='h-[220px] w-[220px]' src={product.image} alt="" /> </p>
              <p className='text-xl text-red-500 mt-10 font-semibold'>$ {product.price}</p>
              {/* <p className='text-xl text-red-500 mt-10 font-semibold'>{product.unit}</p> */}
              <button onClick={()=>handleClick(product._id)} className='mt-4 bg-rose-500 rounded-full text-white px-5 py-2 font-semibold hover:bg-rose-600 cursor-pointer'>Add to cart</button>

            </Card>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Products