"use client"
import Image from 'next/image'
import Link from 'next/link'
import { NAVLINKS } from '@/constant/NavLinks'
import React, { useEffect, useState } from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'

type Props = {
  openNav: () => void
}

const Nav = ({openNav}: Props) => {
  const [navBg,setNavBg] = useState(false);
  
  useEffect(()=>{
    const handler = ()=>{
      if(window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    }
    window.addEventListener("scroll", handler);
    return ()=> window.removeEventListener("scroll", handler);
  },[])
  return (
    <div className={`h-[12vh] z-1000 fixed w-full transition-all duration-300  ${navBg ? "bg-[#3E5496]" : "bg-transparent"}`}>
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
        <div className='hidden xl:flex items-center space-x-10'>
            {
              NAVLINKS.map((link)=>{
                return (
                  <Link key={link.id} href={link.url} className='
                  relative
                  text-base text-gray-300 font-medium
                  transition-colors duration-200
                  hover:text-white
                  after:content-[""]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:bg-white
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                  '>
                    <p>{link.title}</p>
                  </Link>
                )
              })
            }
        </div>

        <div className='hidden items-center justify-center space-x-2 xl:flex'>
          {/* Phone */}
            <FaPhoneSquareAlt className='w-5 h-5 text-[#00C5B5]' /> 
            <a href="tel:+994991234567" className='font-bold text-white border-b border-transparent hover:border-white '>+994991234567</a>
        </div>

      </div>
          {/* Burger */}
      <RxHamburgerMenu onClick={openNav} className='xl:hidden w-8 h-8 text-white cursor-pointer'/>
      </div>
    </div>
  )
}

export default Nav
