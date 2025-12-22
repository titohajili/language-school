import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='h-[12vh] z-1000 fixed w-full transition-all duration-300  bg-rose-300'>
      <div className='flex items-center justify-between mx-auto h-full w-[80%]'>
        {/* Logo */}
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/images/logo.png'} alt='Logo' width={40} height={40}/>
          <span >
            <h1 className='text-2xl font-bold text-white tracking-wide'>LINGUANOW</h1>
            <p className='text-[8.5px] text-gray-300 leading-snug tracking-widest'>LEARN TO SPEAK EASILY NOW</p>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Nav
