import React from 'react'
import { urlFor } from '../../sanity/client'


const TopSec1Card = (props) => {
  return (
    <>
      <div className='max-w-80 max-sm:max-w-screen-lg transition-all w-full h-[380px] relative'>
        <img src={urlFor(props.image).url()} className='opacity-40 grayscale w-full object-cover h-full' alt="card-img" />

        <div className='bg-white absolute bottom-6 p-4 left-6 right-6'>
            <h5 className='text-[#FF6636] text-center text-lg'>{props.types}</h5>
            <h4 className='text-black text-center text-xl mt-2'>{props.head}</h4>
            <p className='text-[#6E7485] text-center mt-2'>{props.para}</p>
        </div>
      </div>
    </>
  )
}

export default TopSec1Card