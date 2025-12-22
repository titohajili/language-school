import Image from 'next/image'
import Link from 'next/link'
import { NAVLINKS } from '@/constant/NavLinks'
import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
const Nav = () => {
  return (
    <div className='h-[12vh] z-1000 fixed w-full transition-all duration-300  bg-rose-300'>
      <div className='flex items-center justify-between mx-auto h-full w-[85%]'>
        {/* Logo */}
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/images/logo.png'} alt='Logo' width={40} height={40}/>
          <span >
            <h1 className='text-2xl font-bold text-white tracking-wide'>LINGUANOW</h1>
            <p className='text-[8.5px] text-gray-300 leading-snug tracking-widest'>LEARN TO SPEAK EASILY NOW</p>
          </span>
        </Link>

      <div className='flex items-center sm:space-x-20'>
        {/* Nav Links */}
        <div className='hidden lg:flex items-center space-x-10'>
            {
              NAVLINKS.map((link)=>{
                return (
                  <Link key={link.id} href={link.url} className='text-base text-white hover:text-gray-400  font-medium transition-all duration-200'>
                    <p>{link.title}</p>
                  </Link>
                )
              })
            }
        </div>

        <div className='flex items-center justify-center space-x-3'>
          {/* Phone */}
            <FaPhoneSquareAlt className='w-5 h-5 text-[#00C5B5]' /> 
            <a href="tel:+994991234567" className='font-bold text-white border-b border-transparent hover:border-white '>+994991234567</a>
          {/* Burger */}
        </div>

      </div>
      <RxHamburgerMenu className='w-8 h-8 font-bold text-white cursor-pointer lg:hidden'/>
      </div>
    </div>
  )
}

export default Nav
