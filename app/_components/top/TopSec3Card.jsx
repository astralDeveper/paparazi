import React from 'react'
import { urlForImage } from '@/sanity/lib/utils'

const TopSec3Card = (props) => {
  return (
    <>
        <div className='bg-white'>
            <div className='h-[250px] w-full'>
                <img src={urlForImage(props.image).url()} alt="card" className='w-full h-full object-cover grayscale' />
            </div>

            <div className='p-4 pb-8'>
                <h5 className='text-[#D2940A] bg-[#d2930a35] text-sm w-fit p-1 px-2'>{props.tag}</h5>
                <h3 className='text-black font-semibold text-lg mt-4'>{props.head}</h3>
                <p className='text-[#696969] text-xs mt-2'>{props.para}</p>
            </div>
        </div>
    </>
  )
}

export default TopSec3Card