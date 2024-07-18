import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { urlFor } from '../../sanity/client';

const SliderSection = ({data}) => {
    

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };

    return (
        <div className='relative max-w-screen-2xl mx-auto'>
       
            <div ref={sliderRef} className="cards-container flex rounded-md pb-40 pl-20">

                {data.sec10card.map((item, index) => (
                    <div  className="card h-96 border relative max-w-72 sm:mb-0 mb-6 overflow-hidden">
                        <img alt="content" className="grayscale relative w-full h-full object-center" src={urlFor(item).url()} />
                        <div className="absolute inset-0 w-full h-full bg-black/40" />
                        <div className='absolute z-10 top-1/2 -translate-y-1/2 p-2 left-1/2 -translate-x-1/2 text-center w-60 text-white'>
                            <h2 className=" font-medium">{item.sec10title}</h2>
                            <p className="text-sm">{item.sec10subtitle}</p>
                        </div>

                        <div className="rounded-full bg-white absolute -bottom-4 -left-4 size-20 flex items-center justify-center">
                            <p className='font-bold text-xl'>{index+1}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="absolute left-0 top-40 transform -translate-y-1/2 m-2">
                <button onClick={scrollLeft} className="bg-white text-black p-2 rounded-full">
                    <FaArrowLeft />
                </button>
            </div>
            <div className="absolute right-0 top-40 transform -translate-y-1/2 m-2">
                <button onClick={scrollRight} className="bg-white text-black p-2 rounded-full">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default SliderSection
