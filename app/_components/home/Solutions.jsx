import { urlForImage } from "@/sanity/lib/utils";

const Solutions = ({data}) => {
    return (
        <section className="body-font">
            <div className="container px-4 py-20 mx-auto">
               <div className="flex justify-center text-center pb-20">
               <h1 className='md:text-[40px] text-2xl'>{data.sec9title}</h1>
               </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    {data.sec9card.map((item, i) => (
                        <div key={i} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full px-10 pt-10" src={urlForImage(item).url()} />
                            </div>
                            <div className='px-10'>
                            <h2 className="text-xl font-medium title-font mt-5">{item.sec9title}</h2>
                            <p className="text-base leading-relaxed mt-2 text-gray-350">{item.sec9subtitle}</p>
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}

export default Solutions;
