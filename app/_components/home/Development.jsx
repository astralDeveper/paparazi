import { urlForImage } from "@/sanity/lib/utils"

export default function Development({ data }) {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-24">
      <div className="flex items-center justify-between">
        <h2 className='font-medium text-6xl max-md:text-3xl'>{data.sec2}</h2>
        {/* <button className="flex border-0 bg-golden ml-auto px-6 py-2 rounded text-white focus:outline-none">{data.sec2button}</button> */}
      </div>

      <article className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-12 w-full mt-12">
        <div className="w-full rounded-lg overflow-hidden">
          <img alt="ecommerce" className="w-full object-cover aspect-video" src={urlForImage(data.sec3[0]).url()} />
        </div>

        <div className="mt-12 w-full">
          <h3 className="text-sm tracking-widest">{data.sec3[0].sec3title} <span className='text-golden'>{new Intl.DateTimeFormat('en-US').format(new Date(data.sec3[0].sec3date))}</span></h3>
          <h2 className="font-medium text-4xl mt-3">{data.sec3[0].sec3heading}</h2>

          <p className="leading-relaxed mt-6 text-gray-300">{data.sec3[0].sec3paragraph}</p>
        </div>
      </article>

      <div className="grid grid-cols-3 max-md:grid-cols-1 justify-between mt-12 w-full gap-4">
        {data.sec3.slice(1, 4).map((item, i) => (
          <article key={i} className="p-4 w-full">
            <div className="w-full rounded-lg overflow-hidden">
              <img alt="content" className="w-full object-cover aspect-video" src={urlForImage(item).url()} />
            </div>
            <h3 className="text-sm tracking-widest pt-4">{item.sec3title} <span className='text-golden'>{item.sec3date && new Intl.DateTimeFormat('en-US').format(new Date(item.sec3date))}</span></h3>
            <h2 className="mt-4 font-medium text-xl">{item.sec3heading}</h2>
            <p className="mt-2 leading-relaxed text-gray-300">{item.sec3paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  )
}