import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import contentImage from '../../_assets/home/Container.png'
import { PortableText } from "next-sanity";

export default function Blogs(props) {


  
  return (
    <>
      {/* <section className="max-w-screen-2xl mx-auto px-4 py-24">
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center">
          {data.sec1.map((item, i) => (
            <article key={i} className="p-4 w-full max-w-md">
              <div className="rounded-lg overflow-hidden bg-white px-10 pt-10">
                <img alt="content" className="object-cover w-full" src={urlForImage(item).url()} />
              </div>
              <div className='px-10'>
                <h2 className="text-xl max-sm:text-lg font-medium mt-6">{item.cardheader}</h2>
                <p className="leading-relaxed mt-2 max-sm:text-sm">{item.cardparagraph}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-max mt-12">
          <button className="bg-[#D2940A] px-6 py-2 rounded text-white">{data.sec1button}</button>
        </div>
      </section> */}

      <section className="">
        <div className={`flex items-center justify-center max-lg:flex-wrap gap-20 max-sm:gap-6 ${props.reverse ? 'flex-row-reverse' : ''}`}>
         <div className="flex flex-col">
            <h2 className="text-4xl mb-8 max-sm:mb-2 max-lg:mb-4 max-sm:text-3xl font-semibold">{props.head}</h2>
            <div className="w-[95%]"> 
              <PortableText value={props.para} />

            </div>
             
         </div>

          <Image src={props.image} className="w-[55%] max-lg:w-full" width={1200} height={1200}/>
        </div>
      </section>
    </>
  );
}