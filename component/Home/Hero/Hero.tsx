import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[130vh] w-full bg-[#3E5496] flex justify-center items-center'>
      <div className='flex justify-between items-center w-[85%] mx-auto'>
        {/* Left content */}
        <div className='flex flex-col justify-center items-start w-1/2 pl-8'>
          {/* Heading */}
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
            Master Another <br /> Language Now<span className='text-[#00C5B5]'>.</span>
          </h1>
          <p className='text-lg md:text-xl text-gray-200 mb-6'>
            Welcome to our language school!
          </p>
          {/* Buttons */}
          <div className='flex space-x-4'>
            <button className='bg-[#00C5B5] text-white font-bold py-3 px-6 rounded-full hover:bg-teal-400 transition-all duration-300'>
              Get Started Today
            </button>
            <button className='flex items-center gap-2 text-white font-medium border border-white py-3 px-6 rounded-full hover:bg-white hover:text-[#3E5496] transition-all duration-300'>
              <FaPlayCircle /> About Classes
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className='hidden xl:flex w-1/2 justify-end'>
          <Image src={'/images/w1.png'} alt='Students' width={600} height={600} />
        </div>
      </div>
    </div>
  )
}

export default Hero
