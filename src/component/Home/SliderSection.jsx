



import React, { useRef } from 'react';
import slider from '../../assets/slider.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderSection = () => {
    const cardsData = [
        { id: 1, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: slider },
        { id: 2, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/201/200' },
        { id: 3, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/200/201' },
        { id: 4, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/201/201' },
        { id: 5, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/202/200' },
        { id: 6, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/200/199' },
        { id: 7, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/199/199' },
        { id: 8, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/199/200' },
        { id: 9, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/200/198' },
        { id: 10, title: 'FIRE RESISTANT CABLES', content: 'Finds applications where electrical  integrity of the cable has to remain intact for at least three hours, so as to activate and maintain crucial.', imgUrl: 'https://unsplash.it/198/199' },
    ]

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };

    return (
        <div className='relative'>
       
            <div ref={sliderRef} className="cards-container flex rounded-md pb-40 pl-20">

                {cardsData.map((card, index) => (
                    <div key={index} className="card border relative  md:w-1/3 sm:mb-0 mb-6 overflow-hidden">
                      
                        <img alt="content" className="relative w-full h-full object-center" src={card.imgUrl} />
              
                        <div className='absolute z-10 top-40 p-2 text-center w-60 text-white'>
                            <h2 className=" font-medium">{card.title}</h2>
                            <p className="text-sm">{card.content}</p>
                        </div>

                        <div className="rounded-r-full bg-white absolute top-72 -rotate-45 px-6 py-6">
                            <p className='font-bold text-2xl'>{card.id}</p>
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
