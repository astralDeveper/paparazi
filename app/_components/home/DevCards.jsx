import { urlForImage } from "@/sanity/lib/utils"

const DevCards = ({data}) => {

  return (
    <>
      <section className="body-font ">
        <div className="mx-auto px-4 py-4 container">
          <div className="flex flex-col">

          </div>
          <div className="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
          {data.sec3.map((item, i) => (
            <div key={i} className="mb-6 sm:mb-0 p-4 md:w-1/4">
            <div className="rounded-3xl h-64 overflow-hidden">
              <img alt="content" className="w-full h-full object-center object-cover" src={urlForImage(item).url()} />
            </div>
            <h2 className="text-sm tracking-widest title-font pt-5">{item.sec3title} <span className='text-golden'>{item.sec3date}</span></h2>
            <h2 className="mt-3 font-medium  text-xl title-font">{item.sec3heading}</h2>
            <p className="mt-2 text-base leading-relaxed text-gray-300">{item.sec3paragraph}</p>

          </div>
            ))}
            

            
           
          </div>
        </div>
      </section>
    </>
  )
}

export default DevCards
