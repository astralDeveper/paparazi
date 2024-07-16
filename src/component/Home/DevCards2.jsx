import React from 'react'
import travel from '../../assets/DevCards2.png'
import devcard from '../../assets/DevCards2 (1).png'
import sports from '../../assets/DevCards2 (2).png'
import icon1 from '../../assets/card-icon1.png'
import icon2 from '../../assets/card-icon2.png'
import icon3 from '../../assets/card-icon3.png'

const DevCards2 = () => {
    return (
        <>
                <div class="mx-auto my-24 px-4  container">
                    <div class="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
                        <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
                            <div class="rounded-3xl overflow-hidden">
                                <img alt="content" class="w-full h-full" src={travel} />
                            </div>

                            <div className="flex my-4">
                                <img className='h-16' src={icon1} alt="" />
                                <div className="flex flex-col justify-center mx-4">
                                    <h2 class="font-medium text-xl title-font">Radio Davos</h2>
                                    <p class="text-xs tracking-widest title-font text-[#D2940A]">16 March 2023</p>
                                </div>
                            </div>
                            <p class="mt-2 text-xl font-medium text-gray-300">How to build strong portfolio <br /> and get a Job in UI/UX</p>

                        </div>
                        <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
                            <div class="rounded-3xloverflow-hidden">
                                <img alt="content" class="w-full h-full" src={devcard} />
                            </div>
                           
                            <div className="flex my-4">
                                <img className='h-16' src={icon2} alt="" />
                                <div className="flex flex-col justify-center mx-4">
                                    <h2 class="font-medium text-xl title-font">Radio Davos</h2>
                                    <p class="text-xs tracking-widest title-font text-[#D2940A]">16 March 2023</p>
                                </div>
                            </div>
                            <p class="mt-2 text-xl font-medium text-gray-300">How to build strong portfolio <br /> and get a Job in UI/UX</p>

                        </div>
                        <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
                            <div class="rounded-3xl overflow-hidden">
                                <img alt="content" class="w-full h-full" src={sports} />
                            </div>
                           
                            <div className="flex my-4">
                                <img className='h-16' src={icon3} alt="" />
                                <div className="flex flex-col justify-center mx-4">
                                    <h2 class="font-medium text-xl title-font">Radio Davos</h2>
                                    <p class="text-xs tracking-widest title-font text-[#D2940A]">16 March 2023</p>
                                </div>
                            </div>
                            <p class="mt-2 text-xl font-medium text-gray-300">How to build strong portfolio <br /> and get a Job in UI/UX</p>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default DevCards2
