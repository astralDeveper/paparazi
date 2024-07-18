import React from 'react'
import { urlFor } from '../../sanity/client'

const DevCards = ({data}) => {

  return (
    <>
      <section class="body-font ">
        <div class="mx-auto px-4 py-4 container">
          <div class="flex flex-col">

          </div>
          <div class="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
          {data.sec3.map((item) => (
            <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
            <div class="rounded-3xl h-64 overflow-hidden">
              <img alt="content" class="w-full h-full object-center object-cover" src={urlFor(item).url()} />
            </div>
            <h2 class="text-sm tracking-widest title-font pt-5">{item.sec3title} <span className='text-golden'>{item.sec3date}</span></h2>
            <h2 class="mt-3 font-medium  text-xl title-font">{item.sec3heading}</h2>
            <p class="mt-2 text-base leading-relaxed text-gray-300">{item.sec3paragraph}</p>

          </div>
            ))}
            

            
           
          </div>
        </div>
      </section>
    </>
  )
}

export default DevCards
