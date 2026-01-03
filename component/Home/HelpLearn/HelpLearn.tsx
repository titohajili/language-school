import Image from 'next/image'
import React from 'react'

const HelpLearn = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-full flex h-[90vh]'>
        <div className='w-[50%] bg-[#3E5496] flex items-center justify-center'>
          <div className='w-[80%] flex flex-col items-start'>
            <h1 className='text-6xl font-bold text-white'>
              We'll Help You Learn <br />Fast and Efficiently<span className='text-[#00C5B5] leading-snug tracking-wide'>.</span>
            </h1>
            <p className='text-white mt-8 text-xl tracking-wide font-semibold'>Start writing and speaking in a foreign language tomorrow!</p>
            <p className='text-gray-400 mt-8 text-xl'>Our teaching team has developed learning programs with continuous learning to ensure your success.</p>
            <p className='text-gray-400 mt-8 text-xl'>Whether you’re a beginner starting with the basics or looking to practice your reading, writing, and speaking, LinguaNow is scientifically proven to work. We teach according to a methodology that has proven itself in the market of educational services.</p>
            <button className='border-2 border-[#00C5B5] rounded-md text-md font-semibold mt-8 text-white py-3 px-8 hover:bg-[#00C5B5] transition-all duration-300 cursor-pointer'>More About Us</button>
          </div>
        </div>

        <div className='w-[50%] flex items-center justify-center relative'>
          <Image src={'/images/students2.png'} alt='img' fill className='object-cover' />
        </div>
      </div>
    </div>
  )
}

export default HelpLearn
