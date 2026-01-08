"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import UkrainianCard from './UkrainianCard'
import FrenchCard from './FrenchCard'
import SpanishCard from './SpanishCard'
import ChineseCard from './ChineseCard'
import EnglishCard from './EnglishCard'

type Language = 'uk' | 'fr' | 'sp' | 'ch' | 'en'

const Languages = () => {

  const [active, setActive] = useState<Language>('uk')

  return (
    <div className='pt-16 pb-16 space-y-5 bg-white'>
      <h1 className='text-6xl font-extrabold text-gray-700 text-center'>
        Languages<span className='text-[#3E5496]'>.</span>
      </h1>

      {/* Buttons */}
      <div className='flex justify-center gap-10'>

        <div onClick={() => setActive('uk')} className='group flex items-center gap-2 cursor-pointer'>
          <Image src='/images/Ukflag.png' alt='' width={30} height={30} />
          <p>Ukrainian</p>
        </div>

        <div onClick={() => setActive('fr')} className='group flex items-center gap-2 cursor-pointer'>
          <Image src='/images/Frflag.png' alt='' width={30} height={30} />
          <p>French</p>
        </div>

        <div onClick={() => setActive('sp')} className='group flex items-center gap-2 cursor-pointer'>
          <Image src='/images/Spflag.png' alt='' width={30} height={30} />
          <p>Spanish</p>
        </div>

        <div onClick={() => setActive('ch')} className='group flex items-center gap-2 cursor-pointer'>
          <Image src='/images/Chflag.png' alt='' width={30} height={30} />
          <p>Chinese</p>
        </div>

        <div onClick={() => setActive('en')} className='group flex items-center gap-2 cursor-pointer'>
          <Image src='/images/Eflag.png' alt='' width={30} height={30} />
          <p>English</p>
        </div>

      </div>

      {/* Content */}
      <div className='w-[80%] mx-auto border-t-2 mt-6 pt-6'>
        {active === 'uk' && <UkrainianCard />}
        {active === 'fr' && <FrenchCard />}
        {active === 'sp' && <SpanishCard />}
        {active === 'ch' && <ChineseCard />}
        {active === 'en' && <EnglishCard />}
      </div>
    </div>
  )
}

export default Languages
