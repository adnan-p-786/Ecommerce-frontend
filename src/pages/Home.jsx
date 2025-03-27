import React from 'react'
import fruit from '../assets/fruit-plate.png'
import leaf from '../assets/leaf.png'

function Home() {
  return (
    <section className="flex justify-center items-center w-full px-4 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px] w-full max-w-6xl gap-10">
        <div className="flex flex-col justify-center items-center md:items-start py-5">
          <div className="text-center md:text-left max-w-lg space-y-6 w-[80%] md:w-full">
            <h1 className="text-5xl font-bold">Healthy</h1>
            <h1 className="text-5xl font-bold">
              Fresh <span className="text-orange-400">Fruits!</span>
            </h1>
            <p className="text-2xl">Order Now For Fresh Healthy Life</p>
            <p className='opacity-40'>Healthy and yummy food for fresh morning
              breakfast. Eat Daily for good health and mind
              Order now and get 20% off on your first order</p>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={fruit} alt="Fresh Fruits" className="max-w-full md:max-w-md object-contain" />
        </div>
      </div>

      <div className="absolute top-14 left-[30%] md:left-[30%] lg:left-[30%] xl:left-[30%] transform -translate-x-1/2 w-[350px] md:w-[450px] opacity-90 rotate-[40deg] blur-sm">
        <img src={leaf} alt="Leaf" className="max-w-full object-contain" />
      </div>
    </section>

  )
}

export default Home