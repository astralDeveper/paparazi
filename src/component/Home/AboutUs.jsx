import React from 'react'
import BG from '../../assets/Aboutus.png'
import aboutus from '../../assets/About-us.png'
const AboutUs = () => {
  return (
    <div className='my-14'>
      <div className="about-us h-[100px] w-full">
        <img className='md:h-[500px] h-[400px] w-full' src={BG} alt="bg-img" />
      </div>
      <div className="flex flex-wrap justify-center gap-96 max-[1095px]:gap-10 md:m-10">
        <div className=" space-y-2">
        <h1 className='md:text-5xl text-4xl font-bold'>Doing Everything</h1>
        <h1 className='md:text-5xl text-4xl font-bold'>Yourself is Difficult</h1>
        <p className='text-xl font-normal'>Get to know About Us</p>
        </div>
        <div className="flex justify-items-center">
            <button className='bg-white rounded-3xl h-11 px-9 py-2 text-[#D2940A] text-sm'>Know More About Us</button>
        </div>
      </div>
      <div className="relative img flex justify-center mx-10 max-[564px]:-top-12">
        <img className='h-[350px] rounded-xl object-contain' src={aboutus} alt="about-us-image" />
      </div>
    </div>
  )
}

export default AboutUs
