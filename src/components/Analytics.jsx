import React from 'react'
import ComingSoon from '../assets/coming-soon.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-10 '>
            <img className='w-[500px] mx-auto my-4' src={ComingSoon} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-theme-green uppercase font-bold'>Data analytics dashboard</p>
                <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>manage data analytics</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem soluta vel quo minus quisquam quaerat, odio eveniet doloribus nam officia saepe ex enim distinctio dicta quam possimus earum voluptatum consequatur.</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;