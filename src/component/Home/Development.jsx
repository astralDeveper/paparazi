import React from 'react'
import development from '../../assets/Development.png'

const Development = () => {
  return (
    <div>
      <section class="pt-20 overflow-hidden body-font">
        <footer class="body-font">
          <div class="flex   items-center mx-auto px-5 py-8 container">
            <h1 className='font-medium' style={{ fontSize: 'calc(2px + 2vw + 16px)' }}>Videos for you</h1>
            <button class="flex border-0 bg-golden ml-auto px-6 py-2 rounded text-white focus:outline-none">View All</button>
          </div>
        </footer>
        <div class="mx-auto px-5 py-10 container">
          <div class="flex flex-wrap mx-auto">
            <img alt="ecommerce" class="rounded w-full lg:w-1/2 h-64 lg:h-auto object-center object-cover" src={development} />
            <div class="md:mt-24 mt-11 lg:mt-0 lg:py-6 lg:pl-10 w-full lg:w-1/2">
              <h2 class="text-sm tracking-widest title-font">DEVELOPMENT <span className='text-golden'>16 March 2023</span></h2>
              <h1 class="my-7 font-medium text-4xl md:mr-24 title-font">How to make a Game look more attractive with New VR & AI Technology</h1>

              <p class="leading-relaxed md:mr-48">Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
              </p>
                <button class="flex justify-start my-10 border border-[#D2940A] px-6 py-2 rounded text-[#D2940A] focus:outline-none">Play the video</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Development
