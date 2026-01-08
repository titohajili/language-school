"use client"
import React from 'react'
import ServicesCard from './ServicesCard'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';


type ArrowProps = {
  onClick?: () => void
}



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Services = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='mx-auto flex flex-col items-center justify-center'>

      <h1 className='text-5xl font-extrabold tracking-wide text-gray-700'>Services We Provide<span className='text-[#00C5B5]'>.</span></h1>
      <p className='mt-6 text-gray-400 text-md font-semibold tracking-wide'>In addition to language courses, we also offer related services.</p>

        <div className='w-[80%] mx-auto mt-10'>

            <Carousel
            arrows={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}

        >
            <ServicesCard image='/images/hola.svg' title='Translation & Interpreting' description='LinguaNow offers full translation and interpreting services in five languages, both online and offline in Berlin. Our translators are certified.' />
            
            <ServicesCard image='/images/003-conversation.svg' title='Individual Lessons' description='For those who have particular goals or would like to increase their speaking in a particular language, private lessons can be arranged' />

            <ServicesCard image='/images/043-business.svg' title='Corporate Training Globally' description='LinguaNow has years of experience in tailoring language services to fit the needs of many industries. We service many businesses across the globe.' />

            <ServicesCard image='/images/027-online.svg' title='College Credits' description='LinguaNow helps students reach the needed command of the language over a relatively short period that you can allocate on other things.' />

            </Carousel>

        </div>

      
          </div>
    </div>
  )
}

export default Services
