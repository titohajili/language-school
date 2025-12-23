import { NAVLINKS } from '@/constant/NavLinks'
import Link from 'next/link'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'
import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* overlay */}
      <div className='fixed inset-0 transform transition-all ring-0 duration-500 1-100002 bg-black opacity-70 w-full h-screen'></div>
      {/* NavLinks */}
      <div className='text-gray-300
                        fixed
                        flex
                        flex-col
                        items-center
                        justify-start
                        pt-32
                        h-full
                        transform transition-all duration-500 delay-300
                        w-full
                        bg-[#3E5496]
                        space-y-6
                        z-1000050'> 
      {/* Logo */}
       <Link href={'/'} className='flex items-center gap-2 absolute top-6 left-6'>
          <Image src={'/images/logo.png'} alt='Logo' width={40} height={40}/>
          <span >
            <h1 className='text-2xl font-bold text-white tracking-wide'>LINGUANOW</h1>
            <p className='text-[8.5px] text-gray-300 leading-snug tracking-widest'>LEARN TO SPEAK EASILY NOW</p>
          </span>
        </Link>

        {
          NAVLINKS.map((link)=>{
            return (
              <Link key={link.id} href={link.url} className='
                  text-base text-gray-300 font-medium
                  transition-colors duration-200
                  hover:text-white
              '>
               <p>{link.title}</p>
              </Link>
            )
          })
        }
        <div className=' items-center justify-center space-x-2 flex'>
        {/* Phone */}
          <FaPhoneSquareAlt className='w-5 h-5 text-[#00C5B5]' /> 
          <a href="tel:+994991234567" className='font-bold text-white border-b border-transparent hover:border-white '>+994991234567</a>
        </div>

          {/* Close button */}
       <CgClose className='absolute text-black top-5 right-5 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'/>

      </div>
      
    </div>
  )
}

export default MobileNav
