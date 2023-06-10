import React from 'react';
import Lights from '../assets/city-lights.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1230px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Lights} alt="" />
                <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500g</p>
                    <p className='py-2 border-b mx-8'>1 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-theme-green rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 text-black'>Start trial</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Lights} alt="" />
                <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
                <p className='text-center text-4xl font-bold'>$209</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500g</p>
                    <p className='py-2 border-b mx-8'>1 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-theme-green rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 text-black'>Start trial</button>
            </div>

            <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Lights} alt="" />
                <h3 className='text-2xl font-bold text-center py-8'>Single User</h3>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500g</p>
                    <p className='py-2 border-b mx-8'>1 Granted user</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-theme-green rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 text-black'>Start trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards;