import React from 'react'
import { FaPlay } from 'react-icons/fa'
const Offer = () => {
  return (
    <div className='bg-transparent backdrop-blur-[2px] w-full h-screen relative'>
      <div className='flex flex-col items-start p-3 absolute top-1/3 left-80'>
        <h1 className='text-6xl font-bold text-black'>
            We Offer Offline and <br />Online Lessons<span className='text-[#00C5B5]'>.</span>
        </h1>
        <p className='mt-6 mb-6 text-gray-600 text-[1.5rem] font-semibold trancking-wide'>Learn more about available options from this video.</p>

        <div className='flex items-center justify-center bg-[#DFF4FF] rounded-full w-30 h-30'>
            <FaPlay className='text-[#79C9F9] text-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default Offer
