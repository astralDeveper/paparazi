import { RiArrowRightDoubleLine } from "@remixicon/react";
import { urlForImage } from "@/sanity/lib/utils";

const BussinessSection = ({ data }) => {
  return (
    <section className='min-h-screen bg-white md:px-20 md:py-20 px-4 py-10'>
      {/* text section */}
      <div className="flex flex-wrap justify-between mb-2">
        <h1 className='md:text-3xl text-2xl font-bold text-black'>{data.sec5}</h1>
        <div className="flex gap-2">
          <button className='text-white rounded-xl md:px-4 px-2 py-[12px] bg-[#D2940A] md:text-sm text-[12px] flex flex-row gap-2'>
            {data.sec5button1}
            <RiArrowRightDoubleLine />
          </button>
          <button className='text-white rounded-xl md:px-4 px-2 py-[12px] bg-[#D2940A] md:text-sm text-[12px] flex flex-row gap-2'>
            {data.sec5button2}
            <RiArrowRightDoubleLine />
          </button>
        </div>
      </div>
      <hr />
      {/* column1 */}
      <div className="grid grid-cols-[70%_30%] max-md:grid-cols-1 text-black">
        {/* left-col */}

        <div className="flex flex-col md:border-r">
          {data.sec5column.map((item, i) => (
            <div key={i}>
              <div className="flex max-sm:flex-col my-10 gap-10">
                <div className=''>
                  <img className='' src={urlForImage(item).url()} alt="" />
                </div>
                <div className="space-y-2 pr-14">
                  <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>{item.sec5subtitle}</h5>
                  <h3 className='text-[#353C3F] text-xl font-bold'>{item.sec5title}</h3>
                  <p className='text-[#868B8C] text-sm'>{item.sec5heading}</p>
                  <p className='text-[#353C3F] text-sm'>{item.sec5paragraph}</p>
                </div>
              </div>
              <hr />
            </div>
          ))}

        </div>

        {/* end */}

        {/* right-col */}
        <div className="flex flex-col space-y-5 px-4">
          {data.sec5row.map((item, i) => (
            <div key={i}>
              <div className="space-y-2 pt-4 pb-14">
                <h5 className='text-[#668E9E] text-sm font-bold tracking-widest uppercase'>{item.subtitle}</h5>
                <h3 className='text-[#353C3F] text-xl font-bold'>{item.title}</h3>
                <p className='text-[#868B8C] text-sm'>{item.date}</p>
              </div>
              <hr />
            </div>
          ))}

        </div>
        {/* end */}
      </div>
    </section>
  )
}

export default BussinessSection
