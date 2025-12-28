import Image from 'next/image'
import React from 'react'
import UkrainianCard from './UkrainianCard'

const Languages = () => {
  return (
    <div className='pt-16 pb-16 space-y-5'>
      <h1 className='text-6xl font-extrabold text-gray-700 text-center mb-5 mt-5'>Languages<span className='text-[#3E5496]'>.</span></h1>
      <p className='text-gray-400 text-2xl text-center font-semibold mb-22'>
        We offer classes in five languages for different levels and purposes.
      </p>

        {/* Button group */}
      <div className='flex justify-center gap-10 cursor-pointer'>
        <div className='group transition flex items-center justify-center cursor-pointer space-x-2'>
            <Image src={'/images/Ukflag.png'} alt='flag' width={30} height={30} className='opacity-60 group-hover:opacity-100 transition duration-300' />
            <p className='text-xl font-medium text-gray-400 group-hover:text-gray-700 transition duration-300'>Ukrainian</p>
        </div>
        <div className='group flex items-center justify-center cursor-pointer space-x-2 group transition'>
            <Image src={'/images/Frflag.png'} alt='flag' width={30} height={30} className='opacity-60 group-hover:opacity-100 transition duration-300'/>
            <p className='text-xl font-medium text-gray-400 group-hover:text-gray-700 transition duration-300'>French</p>
        </div>
        <div className='group flex items-center justify-center cursor-pointer space-x-2'>
            <Image src={'/images/Spflag.png'} alt='flag' width={30} height={30} className='opacity-60 group-hover:opacity-100 transition duration-300' />
            <p className='text-xl font-medium text-gray-400 group-hover:text-gray-700 transition duration-300'>Spanish</p>
        </div>
        <div className='group flex items-center justify-center cursor-pointer space-x-2'>
            <Image src={'/images/Chflag.png'} alt='flag' width={30} height={30} className='opacity-60 group-hover:opacity-100 transition duration-300' />
            <p className='text-xl font-medium text-gray-400 group-hover:text-gray-700 transition duration-300'>Chinese</p>
        </div>
        <div className='group flex items-center justify-center cursor-pointer space-x-2'>
            <Image src={'/images/Eflag.png'} alt='flag' width={30} height={30} className='opacity-60 group-hover:opacity-100 transition duration-300' />
            <p className='text-xl font-medium text-gray-400 group-hover:text-gray-700 transition duration-300'>English</p>
        </div>
      </div>



      <div className='w-[80%] mx-auto border-t-2 border-t-gray-300'>
        <UkrainianCard/>
      </div>
    </div>
  )
}

export default Languages