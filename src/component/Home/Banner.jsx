import React from 'react';
import Icon1 from '../../assets/sec (1).png';
import Icon2 from '../../assets/sec (2).png';
import Icon3 from '../../assets/sec (3).png';
import Icon4 from '../../assets/sec (4).png';
import Icon5 from '../../assets/sec (5).png';
import Icon6 from '../../assets/sec (6).png';

const Banner = ({data}) => {

    return (
        <div>
            <section className="banner-parent body-font">
                <div className=" mx-auto px-3 md:py-16 container ">
                    <div className="flex flex-col md:mb-14 w-full text-center">
                        <h1 className="mb-4 font-medium title-font" style={{ fontSize: 'calc(2px + 2vw + 16px)' }}>
                        {data.header}
                        </h1>
                    </div>

                    <div className="flex flex-wrap justify-center -mx-4 text-center">
                     
                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon1} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[0]}</h2>
                                </div>
                            </div>

                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon2} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[1]}</h2>
                                </div>
                            </div>

                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon3} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[2]}</h2>
                                </div>
                            </div>

                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon4} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[3]}</h2>
                                </div>
                            </div>

                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon5} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[4]}</h2>
                                </div>
                            </div>

                            <div className="p-4 w-full sm:w-1/2 md:w-1/6">
                                <div className="bg-white w-22 h-44 rounded-lg text-gray-800  pt-7">
                                  
                                    <img src={Icon6} className="mx-auto w-20" />
                                    <h2 className="font-medium title-font sm:text-1xl md:text-lg lg:text-lg xl:text-1xl" >{data.headercards[5]}</h2>
                                </div>
                            </div>
               
                    </div>

                    <p className="mx-auto mt-8 lg:w-2/3 text-lg text-center leading-relaxed">
                    {data.headerpara}</p>
                </div>
                <button className="flex bg-white mx-auto md:mt-0 px-3 py-3 mt-6 rounded-full font-bold text-base text-center text-golden">
                {data.button}
                </button>
            </section>
        </div>
    );
};

export default Banner;
