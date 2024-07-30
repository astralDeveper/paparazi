import { urlForImage } from '@/sanity/lib/utils'

const DevCards2 = ({ data }) => {
  return (
    <>
      <div className="mx-auto my-24 px-4  container">
        <div className="flex justify-center flex-wrap sm:-m-4 -mx-4 -mt-4 -mb-10">
          {data.sec7.map((item, i) => (
            <div key={i} className="mb-6 sm:mb-0 p-4 md:w-1/4">
              <div className="rounded-3xl overflow-hidden aspect-square">
                <img alt="content" className="w-full h-full object-cover grayscale" src={urlForImage(item).url()} />
              </div>

              <div className="flex my-4">
                <div className="flex flex-col justify-center mx-4">
                  <h2 className="font-medium text-xl title-font">{item.sec7title}</h2>
                  <p className="text-xs tracking-widest title-font text-[#D2940A]">{new Intl.DateTimeFormat('en-GB').format(new Date(item.sec7date))}</p>
                </div>
              </div>
              <p className="mt-2 text-xl font-medium text-gray-300">{item.sec7paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DevCards2
