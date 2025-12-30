import React from 'react'
import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'
import { IoPersonCircleOutline } from 'react-icons/io5'

const EnglishCard = () => {
  return (
     <div className='flex justify-between items-center'>
                     <div className='w-93 mt-6 flex flex-col space-y-3'>
                       <Image src={"/images/language13.png"} alt='img' width={370} height={370}/>
                       <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$120 / month</h1>
                       <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>English for Beginners</h1>
                       <p className='mt-2 tracking-wide leading-snug text-gray-500'>English can be definitely called the main language of the whole world. Ready to start learning it?</p>
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
                       <Image src={"/images/language14.png"} alt='img' width={370} height={370}/>
                       <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$140 / month</h1>
                       <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intermediate Level</h1>
                       <p className='mt-2 tracking-wide leading-snug text-gray-500'>Let's dive a little deeper into English grammar and explore the differences between British and American English.</p>
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
                       <Image src={"/images/language15.png"} alt='img' width={370} height={370}/>
                       <h1 className='mt-4 text-[#3E5496] text-xl font-semibold'>$160 / month</h1>
                       <h1 className='text-3xl mt-2 font-semibold text-gray-700 leading-snug tracking-wide'>Intensive English Course</h1>
                       <p className='mt-2 tracking-wide leading-snug text-gray-500'>Don't have much time but need to learn English as soon as possible? We offer an intensive course for that!</p>
                       <div className='flex justify-start items-center space-x-4'>
                           <div className='flex space-x-2 items-center '>
                               <FaPlayCircle className='text-purple-700 text-xl' />
                               <p className='text-gray-600 font-bold'>16 Lessons</p>
                           </div>
                           <div className='flex space-x-3 items-center '>
                               <IoPersonCircleOutline className='text-orange-500 text-2xl'/> 
                               <p className='text-gray-600 font-bold'>10 Students</p>
                           </div>
                       </div>
                       {/* button */}
                       <button className='w-41 py-4 bg-[#3E5496] text-white rounded-md hover:bg-[#00C5B5] transition duration-300 cursor-pointer font-semibold tracking-widest mt-12'>Enrol Now</button>
                     </div>
                   </div>
  )
}

export default EnglishCard
