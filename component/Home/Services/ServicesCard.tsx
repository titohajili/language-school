import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    title: string,
    description: string,
}

const ServicesCard = ({image, title, description}: Props) => {
  return (
     <div className="w-95 h-100 flex flex-col p-6 items-start bg-white">

       <div className='w-18 h-18 rounded-full overflow-hidden mt-6 border-2 border-[#00C5B5] p-2.5 flex items-center justify-center relative '>
         <Image src={image} alt="image" width={38} height={38} className='object-cover'/>
      </div>
      <h1 className='mt-4 text-2xl font-bold tracking-wide'>{title}</h1>
      <p className='mt-6 text-gray-500 tracking-wide text-md leading-6'>{description}</p>

      <button className='text-[#00C5B5] relative mt-5 text-xl font-bold before:content-[""] before:block before:absolute before:w-full before:bottom-0 before:h-[1.5px] before:bg-[#00C5B5] cursor-pointer'>Learn More</button>
    </div>
  )
}

export default ServicesCard
