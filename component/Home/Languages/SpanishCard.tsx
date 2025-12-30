import React from 'react'
import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'
import { IoPersonCircleOutline } from 'react-icons/io5'

const SpanishCard = () => {
  return (
    <div className='flex justify-between items-center'>
             <div className='w-93 mt-6 flex flex-col space-y-3'>
               <Image src={"/images/language7.png"} alt='img' width={370} height={370}/>
               <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$120 / month</h1>
               <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Spanish for Beginners</h1>
               <p className='mt-2 tracking-wide leading-snug text-gray-500'>Spanish is spoken in 22 countries. Do you want to master this language? This course will be a good start!</p>
               <div className='flex justify-start items-center space-x-4'>
                   <div className='flex space-x-2 items-center '>
                       <FaPlayCircle className='text-purple-700 text-xl' />
                       <p className='text-gray-600 font-bold'>26 Lessons</p>
                   </div>
                   <div className='flex space-x-3 items-center '>
                       <IoPersonCircleOutline className='text-orange-500 text-2xl'/> 
                       <p className='text-gray-600 font-bold'>20 Students</p>
                   </div>
               </div>
               {/* button */}
               <button className='w-41 py-4 bg-[#3E5496] text-white rounded-md hover:bg-[#00C5B5] transition duration-300 cursor-pointer font-semibold tracking-widest mt-12'>Enrol Now</button>
             </div>
       
             <div className='w-93 mt-6 flex flex-col space-y-3'>
               <Image src={"/images/language8.png"} alt='img' width={370} height={370}/>
               <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$140 / month</h1>
               <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intermediate Level</h1>
               <p className='mt-2 tracking-wide leading-snug text-gray-500'>Continue learning one of the most popular languages in the world with certified teachers at LinguaNow!</p>
               <div className='flex justify-start items-center space-x-4'>
                   <div className='flex space-x-2 items-center '>
                       <FaPlayCircle className='text-purple-700 text-xl' />
                       <p className='text-gray-600 font-bold'>16 Lessons</p>
                   </div>
                   <div className='flex space-x-3 items-center '>
                       <IoPersonCircleOutline className='text-orange-500 text-2xl'/> 
                       <p className='text-gray-600 font-bold'>15 Students</p>
                   </div>
               </div>
               {/* button */}
               <button className='w-41 py-4 bg-[#3E5496] text-white rounded-md hover:bg-[#00C5B5] transition duration-300 cursor-pointer font-semibold tracking-widest mt-12'>Enrol Now</button>
             </div>
       
             <div className='w-93 mt-6 flex flex-col space-y-3'>
               <Image src={"/images/language9.png"} alt='img' width={370} height={370}/>
               <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$160 / month</h1>
               <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intensive Spanish Course</h1>
               <p className='mt-2 tracking-wide leading-snug text-gray-500'>If you are limited in time and want to learn Spanish at least at an intermediate level quickly, we offer you our intensive course.</p>
               <div className='flex justify-start items-center space-x-4'>
                   <div className='flex space-x-2 items-center '>
                       <FaPlayCircle className='text-purple-700 text-xl' />
                       <p className='text-gray-600 font-bold'>26 Lessons</p>
                   </div>
                   <div className='flex space-x-3 items-center '>
                       <IoPersonCircleOutline className='text-orange-500 text-2xl'/> 
                       <p className='text-gray-600 font-bold'>12 Students</p>
                   </div>
               </div>
               {/* button */}
               <button className='w-41 py-4 bg-[#3E5496] text-white rounded-md hover:bg-[#00C5B5] transition duration-300 cursor-pointer font-semibold tracking-widest mt-12'>Enrol Now</button>
             </div>
           </div>
  )
}

export default SpanishCard
