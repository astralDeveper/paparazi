import React from 'react'
import singer from '../../assets/Singer.png'
const SingersSection = () => {
    return (
        <div className='min-h-screen bg-white my-20'>
            <div className="grid grid-cols-2 max-md:grid-cols-1">
                <div className="flex flex-col justify-center md:pl-20 md:gap-10 gap-4 p-10">
                    <h3 className='text-[#000000] md:text-5xl text-3xl font-bold capitalize'>Listen from one of <br /> the best singers</h3>
                    <p className='text-[#343434] md:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    <button className='text-white px-10 py-4 rounded-xl bg-[#D2940A] text-sm w-52'>Listen The Podcast</button>
                </div>
                <div className="">
                    <img className='relative md:h-screen h-96' src={singer} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SingersSection
