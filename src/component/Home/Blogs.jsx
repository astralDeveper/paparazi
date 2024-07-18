import React from 'react';
import { urlFor } from '../../sanity/client';

const Blogs = ({data}) => {

    return (
        <section className="body-font">
            <div className="container px-4 pt-40 mx-auto">
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {data.sec1.map((item) => (
                        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden bg-white">
                                <img alt="content" className="object-cover object-center h-full w-full px-10 pt-10" src={urlFor(item).url()} />
                            </div>
                            <div className='px-10'>
                            <h2 className="text-xl font-medium title-font mt-5">{item.cardheader}</h2>
                            <p className="text-base leading-relaxed mt-2 text-gray-350">{item.cardparagraph}</p>
                        </div>
                        </div>
                    ))}
                    <button class="bg-golden mx-auto px-6 py-2 rounded text-white focus:outline-none md:mt-10">{data.sec1button}</button>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
