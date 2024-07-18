import React from 'react'
import { urlFor } from '../../sanity/client'

const TopSec2Card = (props) => {
  return (
    <>
      <div className='bg-white p-6 rounded-xl flex gap-12 items-center max-xl:gap-8 max-lg:flex-wrap'>
          <div className='h-[300px] w-[380px] max-lg:w-full'>
             <img src={urlFor(props.image).url()} className='rounded-xl grayscale min-w-72 max-sm:min-w-full w-full h-full object-cover' alt="image1" />
          </div>

          <div className='max-w-screen-lg'>
              <h6 className='p-1 px-6 border-2 font-semibold rounded-xl w-fit border-[#D2940A] text-[#D2940A]'>{props.diary}</h6>
              <h2 className='text-3xl mt-6 text-black font-semibold'>{props.head}</h2>
              <p className='text-[#525151] mt-6'>{props.para}</p>
          </div>
      </div>
    </>
  )
}

export default TopSec2Card