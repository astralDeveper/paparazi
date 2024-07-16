import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Bussiness1 from '../../assets/Bussiness-1.png'
import Bussiness2 from '../../assets/Bussiness-2.jpg'

const BussinessSection = () => {
    return (
        <div className='min-h-screen bg-white md:px-20 md:py-20 px-4 py-10'>
            {/* text section */}
            <div className="flex flex-wrap justify-between mb-2">
                <h1 className='md:text-3xl text-2xl font-bold text-black'>Business Prespectives</h1>
                <div className="flex gap-2">
                    <button className='text-white rounded-xl md:px-4 px-2 py-[12px] bg-[#D2940A] md:text-sm text-[12px] flex flex-row gap-2'>Discover Our Centres <MdOutlineKeyboardDoubleArrowRight /></button>
                    <button className='text-white rounded-xl md:px-4 px-2 py-[12px] bg-[#D2940A] md:text-sm text-[12px] flex flex-row gap-2'>Find out more about our partners <MdOutlineKeyboardDoubleArrowRight /></button>
                </div>
            </div>
            <hr />
            {/* column1 */}
            <div className="grid grid-cols-[70%_30%] max-md:grid-cols-1 text-black">
                {/* left-col */}
                <div className="flex flex-col md:border-r">

                    <div className="flex max-sm:flex-col my-10 gap-10">
                        <div className=''>
                            <img className='' src={Bussiness1} alt="" />
                        </div>
                        <div className="space-y-2 pr-14">
                            <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>Research Highlights Podcast</h5>
                            <h3 className='text-[#353C3F] text-xl font-bold'>The political consequences of NAFTA</h3>
                            <p className='text-[#868B8C] text-sm'>June 19, 2024</p>
                            <p className='text-[#353C3F] text-sm'>Jiwon Choi and Gavin Wright discuss the economic and political fallout of
                                the North American Free Trade Agreement.</p>
                        </div>
                    </div>

                    <hr />

                    <div className="flex max-sm:flex-col my-10 gap-10">
                        <div className=''>
                            <img className='' src={Bussiness2} alt="" />
                        </div>
                        <div className="space-y-2 pr-14">
                            <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>Featured Chart</h5>
                            <h3 className='text-[#353C3F] text-xl font-bold'>Pausing student loans</h3>
                            <p className='text-[#868B8C] text-sm'>June 25, 2024</p>
                            <p className='text-[#353C3F] text-sm'>How did borrowers respond to the 2020 debt moratorium on US student
                            loans?</p>
                        </div>
                    </div>

                </div>
                {/* end */}

                {/* right-col */}
                <div className="flex flex-col space-y-5 px-4">
                    <div className="space-y-2 pt-4 pb-14">
                        <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>Research Highlights Article</h5>
                        <h3 className='text-[#353C3F] text-xl font-bold'>Product variety and congestion effects online</h3>
                        <p className='text-[#868B8C] text-sm'>June 19, 2024</p>
                    </div>
                    <hr />
                    <div className="space-y-2 pb-14">
                        <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>Featured Chart</h5>
                        <h3 className='text-[#353C3F] text-xl font-bold'>Policy interventions in conflict areas</h3>
                        <p className='text-[#868B8C] text-sm'>June 11, 2024</p>
                    </div>
                    <hr />
                    <div className="space-y-2 pb-14">
                        <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>Research Highlights Podcast</h5>
                        <h3 className='text-[#353C3F] text-xl font-bold'>Moral hazard and migration</h3>
                        <p className='text-[#868B8C] text-sm'>June 5, 2024</p>
                    </div>
                </div>
                {/* end */}
            </div>
        </div>
    )
}

export default BussinessSection
