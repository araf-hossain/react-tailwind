import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='mx-w-[1240px] mx-auto grid lg:grid-cols-3 gap-x-5'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold capitalize'>Want tips & tricks?</h1>
                <p>Singup to our newsletter</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-2 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
                    <button className='bg-theme-green rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black'>Notify me</button>
                </div>
                <p>We care of your data. <span className='text-theme-green'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter