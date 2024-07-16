import React from 'react';
import blogimg1 from "../../assets/Blog (1).png";
import blogimg2 from "../../assets/Blog (2).png";
import blogimg3 from "../../assets/Blog (3).png";
import blogimg4 from "../../assets/Blog (4).png";
import blogimg5 from "../../assets/Blog (5).png";
import blogimg6 from "../../assets/Blog (6).png";
import blogimg7 from "../../assets/Blog (7).png";
import blogimg8 from "../../assets/Blog (8).png";
import blogimg9 from "../../assets/Blog (9).png";
import blogimg10 from "../../assets/Blog (10).png";

const Blogs = () => {
    const blogData = [
        {
            imgSrc: blogimg1,
            title: 'Analytic Solutions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg10,
            title: '2024 Social Media Benchmark Report',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg9,
            title: 'The 400 Blows',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg8,
            title: 'Shooting Stars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg7,
            title: 'The Catalyzer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg6,
            title: 'The 400 Blows',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg5,
            title: 'Shooting Stars',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg3,
            title: 'The Catalyzer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        {
            imgSrc: blogimg2,
            title: 'The 400 Blows',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet tortor non velit ultrices pellentesque.',
        },
        
        // Add more blog items as needed
    ];

    return (
        <section className="body-font">
            <div className="container px-4 pt-40 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {blogData.map((blog, index) => (
                        <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden bg-white">
                                <img alt="content" className="object-cover object-center h-full w-full px-10 pt-10" src={blog.imgSrc} />
                            </div>
                            <div className='px-10'>
                            <h2 className="text-xl font-medium title-font mt-5">{blog.title}</h2>
                            <p className="text-base leading-relaxed mt-2 text-gray-350">{blog.description}</p>
                        </div>
                        </div>
                    ))}
                    <button class="bg-golden mx-auto px-6 py-2 rounded text-white focus:outline-none md:mt-10">Browse Agenda Articles</button>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
