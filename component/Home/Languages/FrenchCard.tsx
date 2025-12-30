import React from 'react'
import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'
import { IoPersonCircleOutline } from 'react-icons/io5'

const FrenchCard = () => {
  return (
   <div className='flex justify-between items-center'>
         <div className='w-93 mt-6 flex flex-col space-y-3'>
           <Image src={"/images/language4.png"} alt='img' width={370} height={370}/>
           <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$120 / month</h1>
           <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>French for Beginners</h1>
           <p className='mt-2 tracking-wide leading-snug text-gray-500'>Take the first steps in learning French with our school, online or offline. We offer interactive learning with experienced teachers.</p>
           <div className='flex justify-start items-center space-x-4'>
               <div className='flex space-x-2 items-center '>
                   <FaPlayCircle className='text-purple-700 text-xl' />
                   <p className='text-gray-600 font-bold'>25 Lessons</p>
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
           <Image src={"/images/language5.png"} alt='img' width={370} height={370}/>
           <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$140 / month</h1>
           <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intermediate Level</h1>
           <p className='mt-2 tracking-wide leading-snug text-gray-500'>Ready to continue learning the language of love and literature? In this course, we will dive deeper into French grammar.</p>
           <div className='flex justify-start items-center space-x-4'>
               <div className='flex space-x-2 items-center '>
                   <FaPlayCircle className='text-purple-700 text-xl' />
                   <p className='text-gray-600 font-bold'>20 Lessons</p>
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
           <Image src={"/images/language6.png"} alt='img' width={370} height={370}/>
           <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$160 / month</h1>
           <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intensive French Course</h1>
           <p className='mt-2 tracking-wide leading-snug text-gray-500'>We offer intensive courses to quickly master basic grammar, proper spelling, and conversational French.</p>
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

export default FrenchCard
