import React from 'react'
import img from '../../assets/image 2.png'
import { RiFacebookBoxFill, RiInstagramFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from '@remixicon/react'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#252525] w-full h-auto p-10'>
                <div className=' w-[80%] mx-auto'>
                    <div className='grid grid-cols-2 justify-between items-center max-sm:grid-cols-1 flex-wrap gap-4' >
                        <div className='flex items-center gap-4 max-lg:flex-col'>
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <h1 className='text-[32px] text-white font-[700]'>Papparazi</h1>
                            </div>

                        </div>
                        <ul className='flex items-center gap-4 h-[23px] justify-end max-sm:justify-center'>
                            <li className='text-white'><RiFacebookBoxFill /></li>
                            <li className='text-white'> <RiYoutubeFill /></li>
                            <li className='text-white'> <RiInstagramLine /></li>
                            <li className='text-white'> <RiTwitterFill /></li>
                        </ul>
                    </div>
                    <div className='bg-[#364067] mt-[4%]'>
                        <hr className='w-full border-[#364067]' />
                    </div>

                    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_auto] max-lg:grid-cols-2 max-lg:justify-items-center *:max-w-96 gap-10 mt-16 mb-[5%]'>
                        <div>
                            <h2 className='text-white text-[22px] font-[700]'>Company Info</h2>
                            <ul className='flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%] '>
                                <li>About</li>
                                <li>Career</li>
                                <li>Lorem</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-white text-[22px] font-[700] '>Legal</h2>
                            <ul className='flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]'>
                                <li>About</li>
                                <li>Career</li>
                                <li>Lorem</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-white text-[22px] font-[700]'>Features</h2>
                            <ul className='flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]'>
                                <li>Business Marketing</li>
                                <li>User Analytic</li>
                                <li>Lorem</li>
                                <li>Unlimited Support</li>
                            </ul>
                        </div>

                        <div className=''>
                            <h2 className='text-white text-[22px] font-[700]'>Resources</h2>
                            <ul className='flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]'>
                                <li>IOS & Android</li>
                                <li>Watch a Demo</li>
                                <li>Customers</li>
                                <li>API</li>
                            </ul>
                        </div>

                        <div className='max-lg:col-span-2'>
                            <div>
                                <h2 className='text-white text-[22px] font-bold'>Company Info</h2>
                            </div>
                            <div className='flex items-center mt-[8%]'>
                                <div className='basis-3/5'>
                                    <input type="text" placeholder='Enter your Email' className='p-2 h-[50px] ' />
                                </div>
                                <div>
                                    <button className='bg-[#FFA62B] h-[50px] p-2 text-white borrder-white'>
                                        subscribe
                                    </button>
                                </div>

                            </div>
                            <p className='text-[#E9E9E9]'>Lorem impsum dolor amit</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='bg-black text-center p-4 text-white'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rem.
                </p>
            </div>
        </div>

    )
}

export default Footer
