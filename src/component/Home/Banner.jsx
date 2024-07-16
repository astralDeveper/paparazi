import React from 'react';
import Icon1 from '../../assets/sec (1).png';
import Icon2 from '../../assets/sec (2).png';
import Icon3 from '../../assets/sec (3).png';
import Icon4 from '../../assets/sec (4).png';
import Icon5 from '../../assets/sec (5).png';
import Icon6 from '../../assets/sec (6).png';

const Banner = () => {
    // Data array containing information for each item
    const bannerItems = [
        {
            id: 1,
            image: Icon1,
            title: 'Global Warming',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            image: Icon2,
            title: 'Plastic in Oceans',
            // description: 'Sed laoreet tortor non velit ultrices pellentesque.'
        },
        {
            id: 3,
            image: Icon3,
            title: 'Domestic Work',
            // description: 'Fusce interdum metus quam, at luctus arcu vestibulum at.'
        },
        {
            id: 4,
            image: Icon4,
            title: 'Life Satisfaction',
            // description: 'Nullam vel risus finibus, vehicula justo non, aliquam mauris.'
        },
        {
          id: 3,
          image: Icon5,
          title: 'Domestic Work',
          // description: 'Fusce interdum metus quam, at luctus arcu vestibulum at.'
      },
      {
          id: 4,
          image: Icon6,
          title: 'Life Satisfaction',
          // description: 'Nullam vel risus finibus, vehicula justo non, aliquam mauris.'
      },
    ];

    return (
        <div>
            <section className="banner-parent body-font">
                <div className="max-w-screen-2xl mx-auto px-3 md:py-16 container ">
                    <div className="flex flex-col md:mb-14 w-full text-center">
                        <h1 className="mb-4 font-medium title-font" style={{ fontSize: 'calc(2px + 2vw + 16px)' }}>You are probably wrong about</h1>
                    </div>

                    <div className="flex flex-wrap justify-center -mx-4 text-center">
                        {bannerItems.map(item => (
                            <div key={item.id} className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={item.image} alt={item.title} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{item.title}</h2>
                                   
                                
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mx-auto mt-8 lg:w-2/3 text-lg text-center leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.</p>
                </div>
                <button className="flex bg-white mx-auto md:mt-0 px-3 py-3 mt-6 rounded-full font-bold text-base text-center text-golden">
                    Upgrade Your Worldview
                </button>
            </section>
        </div>
    );
};

export default Banner;
