import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-theme-green'>Navbar</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos velit voluptatibus laborum ex, voluptate vero inventore repellat quam voluptates a numquam ratione consectetur repellendus esse quibusdam ad magni! Nobis.</p>
            <div className='flex md:w-[75%] my-6'>
                <FaFacebookSquare className='text-3xl mr-4' />
                <FaTwitterSquare className='text-3xl mr-4' />
                <FaInstagram className='text-3xl mr-4' />
                <FaGithubSquare className='text-3xl mr-4' />
                <FaDribbbleSquare className='text-3xl mr-4' />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Menu</h6>
                <ul>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Menu</h6>
                <ul>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Menu</h6>
                <ul>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                    <li className='py-2 text-sm'>Link</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer