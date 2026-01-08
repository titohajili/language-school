"use client"
import React from 'react'
import StudentsCard from './StudentsCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 2,
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

const OurStudents = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      <div className='mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-extrabold tracking-wide text-gray-700 mb-6'>Our Students Say About Us<span className='text-[#00C5B5]'>.</span></h1>
        <p className=' text-gray-400 text-xl font-semibold tracking-wide'>We are extremely grateful for your feedback!</p>

        <div className='w-[80%] mx-auto mt-10'>
           <Carousel
                arrows={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                keyBoardControl={true}
        
                >

                    <StudentsCard image='/images/mikael.png' name='Mikael Higgins' title='Student (Chineese for beginners)' des='"I always wanted to learn Chineese but never had time for that. The offline course was a savior for me. I like that the course materials include text, audio, video, plus interactive exercises. Speaking with great teachers makes learning more fun. I recommend them and will continue my learning."' data='21 Novamber 2025' />

                    <StudentsCard image='/images/bradley.jpg' name='Bradley Mills' title='Student ( French intensive course)' des='"I have taken French lessons before both in a traditional class and via Skype. The online classroom at LinguaNow is on par with a regular classroom, but with the added benefit of having private lessons. Teachers are very friendly, and I know that teaching French can be just as irritating."' data='10 March 2025' />

                    <StudentsCard image='/images/johanna.png' name='Johanna Wolfurg' title='Student ( French for beginners)' des='"I really liked the variety. The best part was a video recording of students learning French and speaking to each other. A close second favorite was listening to audio recordings and choosing a response to what you`ve heard. Very thought out. I will definitely recommend your lessons to friends "' data='20 March 2025' />
           </Carousel>
        </div>


      </div>
    </div>
  )
}

export default OurStudents
