import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Sulotion</h1>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Enterprise</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>WorkFlow</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>By Team</p>

        </div>
        {/* 2nd part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>About Us</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>News & Press</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Our Customer</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Leadership</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Careers</p>
        </div>
        {/* 3rd part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Blog</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Webinar & Event</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>Podcast</p>
            <p className='light:text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-700'>E-books & Guides</p>
        </div>
        {/* 4th part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
            <div className='mt-6'>
                <h1 className='text-sm light:text-gray-600 '>Our Mobile Number</h1>
                <h1 className='text-base font-bold mt-1'>+012 3456789</h1>
            </div>
            <div className='mt-6'>
                <h1 className='text-sm light:text-gray-600 '>Our Email</h1>
                <h1 className='text-base font-bold mt-1'>example@gmail.com</h1>
            </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className='mt-8 w-[80%] mx-auto border-t p-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>Copyright Ⓒ 2025 GandomAcc. All rights reserved</p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social : </span>
            <span><FaFacebook /></span>
            <span><FaTwitter /></span>
            <span><FaDribbble /></span>

        </div>
      </div>
    </div>
  )
}

export default Footer
