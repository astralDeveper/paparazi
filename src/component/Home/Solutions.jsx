import React from 'react';
import blogimg1 from "../../assets/Solution (1).png";
import blogimg2 from "../../assets/Blog (4).png";
import blogimg3 from "../../assets/Solution (2).png";

const Solutions = () => {
    const solutionData = [
        {
            imgSrc: blogimg1,
            title: 'Analytic Solutions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
            bgColor: '#FFEDFE',
        },
        {
            imgSrc: blogimg2,
            title: '2024 Social Media Benchmark Report',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
            bgColor: '#FFE7E3',
        },
        {
            imgSrc: blogimg3,
            title: 'The 400 Blows',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
            bgColor: '#FFD7E3',
        },
       
        // Add more blog items as needed
    ];

    return (
        <section className="body-font">
            <div className="container px-4 py-20 mx-auto">
               <div className="flex justify-center text-center pb-20">
               <h1 className='md:text-[40px] text-2xl'><span className='md:text-5xl text-3xl font-medium text-[#D2940A]'>Crowdsource solutions</span> for the world's <br /> most important and pressing issues</h1>
               </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {solutionData.map((solution, index) => (
                        <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden" style={{ backgroundColor: solution.bgColor }}>
                                <img alt="content" className="object-cover object-center h-full w-full px-10 pt-10" src={solution.imgSrc} />
                            </div>
                            <div className='px-10'>
                            <h2 className="text-xl font-medium title-font mt-5">{solution.title}</h2>
                            <p className="text-base leading-relaxed mt-2 text-gray-350">{solution.description}</p>
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}

export default Solutions;
