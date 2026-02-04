import Image from 'next/image'
import React from 'react'

const News = () => {
  return (
    <div className='bg-white py-20'>
        <h1 className='text-5xl font-extrabold tracking-wide text-gray-700 mb-6 text-center'>Blog & News<span className='text-[#0913d1f0]'>.</span></h1>
        <p className=' text-gray-400 text-xl font-semibold tracking-wide text-center'>Learn more about foreign languages and cultures of different countries !</p>

        <div className='w-[80%] mx-auto mt-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              <div>
                <Image src={"/images/1fr.png"}alt='img' width={450} height={450} className="w-full h-75 object-cover"/>
                <div className='flex items-center mt-4 mb-4'>
                  <h1 className='text-[#415798] font-bold text-[16px] tracking-wider'>#INTERESTING </h1>
                  <div className='w-[1.4px] h-4.25 bg-gray-950 mx-1'></div>
                  <p className='text-gray-500 tracking-wider'> September 26, 2025</p>
                </div>
                <h1 className='text-gray-900 text-2xl font-bold leading-8 tracking-wide'>European Day of Languages — The Facts and Fun!</h1>
                <p className='text-gray-400 leading-6 tracking-wider text-[17px]  mt-4'>Europe is the home to 225 indigenous languages. About 3% of all the global languages originate from here. Although English is considered the most useful.. <br />.</p>

                <button className='bg-[#00C5B5] py-3 px-9 rounded-md text-white font-bold mt-5 hover:bg-blue-900 transition-all duration-300 cursor-pointer'>Read More</button>
              </div>

              <div>
                <Image src={"/images/2nd.png"}alt='img' width={450} height={450} className="w-full h-75 object-cover"/>
                <div className='flex items-center mt-4 mb-4'>
                  <h1 className='text-[#415798] font-bold text-[16px] tracking-wider'>#LANGUAGES </h1>
                  <div className='w-[1.4px] h-4.25 bg-gray-950 mx-1'></div>
                  <p className='text-gray-500 tracking-wider'> September 15, 2025</p>
                </div>
                <h1 className='text-gray-900 text-2xl font-bold leading-8 tracking-wide'>5 Interesting Facts About Sounds in Different Languages</h1>
                <p className='text-gray-400 leading-6 tracking-wider text-[17px]  mt-4'>Language learning premises on the processing of sounds. Most of the world's languages altogether include around 800 sounds, and babies' brain is gifted to differentiate...</p>

                <button className='bg-[#00C5B5] py-3 px-9 rounded-md text-white font-bold mt-5 hover:bg-blue-900 transition-all duration-300 cursor-pointer'>Read More</button>
              </div>


              <div>
                <Image src={"/images/3th.png"}alt='img' width={450} height={450} className="w-full h-75 object-cover"/>
                <div className='flex items-center mt-4 mb-4'>
                  <h1 className='text-[#415798] font-bold text-[16px] tracking-wider'>#INTERESTING </h1>
                  <div className='w-[1.4px] h-4.25 bg-gray-950 mx-1'></div>
                  <p className='text-gray-500 tracking-wider'> September 26, 2025</p>
                </div>
                <h1 className='text-gray-900 text-2xl font-bold leading-8 tracking-wide'>How to Start Thinking in a Foreign Language and Is It Necessary?

</h1>
                <p className='text-gray-400 leading-6 tracking-wider text-[17px]  mt-4'>Immersing inside a native-speaking environment is the key to learn any language. But how will your brain react when suddenly it is all-surrounded with information in a...</p>

                <button className='bg-[#00C5B5] py-3 px-9 rounded-md text-white font-bold mt-5 hover:bg-blue-900 transition-all duration-300 cursor-pointer'>Read More</button>
              </div>
            </div>
        </div>

      
    </div>
  )
}

export default News
