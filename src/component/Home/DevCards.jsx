import React from 'react'
import travel from '../../assets/DevCards (1).png'
import devcard from '../../assets/DevCards (2).png'
import sports from '../../assets/DevCards (3).png'

const DevCards = () => {
  return (
    <>
      <section class="body-font ">
        <div class="mx-auto px-4 py-4 container">
          <div class="flex flex-col">

          </div>
          <div class="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
            <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
              <div class="rounded-3xl h-64 overflow-hidden">
                <img alt="content" class="w-full h-full object-center object-cover" src={travel} />
              </div>
              <h2 class="text-sm tracking-widest title-font pt-5">DEVELOPMENT <span className='text-golden'>16 March 2023</span></h2>
              <h2 class="mt-3 font-medium  text-xl title-font">Shooting Stars</h2>
              <p class="mt-2 text-base leading-relaxed text-gray-300">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

            </div>
            <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
              <div class="rounded-3xl h-64 overflow-hidden">
                <img alt="content" class="w-full h-full object-center object-cover" src={devcard} />
              </div>
              <h2 class="text-sm tracking-widest title-font pt-5">DEVELOPMENT <span className='text-golden'>16 March 2023</span></h2>
              <h2 class="mt-3 font-medium  text-xl title-font">The Catalyzer</h2>
              <p class="mt-2 text-base leading-relaxed text-gray-300">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

            </div>
            <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
              <div class="rounded-3xl h-64 overflow-hidden">
                <img alt="content" class="w-full h-full object-center object-cover" src={sports} />
              </div>
              <h2 class="text-sm tracking-widest title-font pt-5">DEVELOPMENT <span className='text-golden'>16 March 2023</span></h2>
              <h2 class="mt-3 font-medium  text-xl title-font">The 400 Blows</h2>
              <p class="mt-2 text-base leading-relaxed text-gray-300">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DevCards
