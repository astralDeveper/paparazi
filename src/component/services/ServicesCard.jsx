import React from 'react'
import disk from '../../assets/disk.png'
import { urlFor } from '../../sanity/client'

const ServicesCard = (props) => {
  return (
    <>
      <div className='flex gap-6 items-center w-fit'>
        <div className='img-div bg-white p-3 rounded-2xl'>
          <img src={urlFor(props.image).url()} className='w-10' alt="" />
        </div>
        <div className='w-80 max-lg:w-full transition-all '>
          <h4 className='text-xl font-semibold'>{props.head}</h4>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  )
}

export default ServicesCard