import React from 'react'
import { urlFor } from '../../sanity/client'

const Development = ({data}) => {

  return (
    <section class="pt-20 overflow-hidden body-font">
      <div>
        <div class="flex items-center mx-auto px-5 py-8 container">
          <h2 className='font-medium text-6xl max-md:text-3xl'>{data.sec2}</h2>
          <button class="flex border-0 bg-golden ml-auto px-6 py-2 rounded text-white focus:outline-none">{data.sec2button}</button>
        </div>
      </div>
      <div class="mx-auto px-5 py-10 container">
        <div class="flex flex-wrap mx-auto">
          <img alt="ecommerce" class="rounded w-full lg:w-1/2 h-64 lg:h-auto object-center object-cover" src={urlFor(data.sec2image).url()} />
          <div class="md:mt-24 mt-11 lg:mt-0 lg:py-6 lg:pl-10 w-full lg:w-1/2">
            <h2 class="text-sm tracking-widest title-font">{data.sec2title} <span className='text-golden'>{data.sec2date}</span></h2>
            <h1 class="my-7 font-medium text-4xl md:mr-24 title-font">{data.sec2heading}</h1>

            <p class="leading-relaxed md:mr-48">{data.sec2subheading}</p>
              {/* <button class="flex justify-start my-10 border border-[#D2940A] px-6 py-2 rounded text-[#D2940A] focus:outline-none">{data.sec2button2}</button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Development
