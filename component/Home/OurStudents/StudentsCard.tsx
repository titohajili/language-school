import React from 'react'
import Image from 'next/image'

type Props = {
    image: string,
    name: string,
    title: string,
    des: string,
    data: any
}

const StudentsCard = ({image, name, title, des, data}: Props) => {
  return (
    <div className='w-[90%] mx-auto  flex flex-col items-center justify-center p-12 bg-white cursor-pointer
    transition
    duration-150
    active:scale-95
    active:opacity-80 shadow-lg'>

        <div className='w-30 h-30 rounded-full overflow-hidden  relative mt-10 mb-6'>
          <Image src={image} alt="image" fill className='object-cover'/>
        </div>
        <h1 className='text-blue-800 font-bold tracking-wide text-2xl'>
          {name}
        </h1>
        <h2 className='mt-6 mb-6 font-bold text-gray-600 tracking-wide'>
          {title}
        </h2>
        <p className='text-gray-500 tracking-wide'>
          {des}
        </p>
        <span className='mt-5 font-bold text-gray-800'>
          {data}
        </span>
      
    </div>
  )
}

export default StudentsCard
