import React from 'react'
import icon1 from '../../assets/card-icon1.png'
import { urlFor } from '../../sanity/client'

const DevCards2 = ({data}) => {
    return (
        <>
                <div class="mx-auto my-24 px-4  container">
                    <div class="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
                    {data.sec7.map((item) => (
                        <div class="mb-6 sm:mb-0 p-4 md:w-1/4">
                            <div class="rounded-3xl overflow-hidden">
                                <img alt="content" class="w-full h-full" src={urlFor(item).url()} />
                            </div>

                            <div className="flex my-4">
                                <img className='h-16' src={icon1} alt="" />
                                <div className="flex flex-col justify-center mx-4">
                                    <h2 class="font-medium text-xl title-font">{item.sec7title}</h2>
                                    <p class="text-xs tracking-widest title-font text-[#D2940A]">{item.sec7date}</p>
                                </div>
                            </div>
                            <p class="mt-2 text-xl font-medium text-gray-300">{item.sec7paragraph}</p>

                        </div>
                        ))}

                    </div>
                </div>
        </>
    )
}

export default DevCards2
