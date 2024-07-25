import { urlForImage } from '@/sanity/lib/utils'
import BG from '@/app/_assets/home/sec-bg1.png'
import Image from 'next/image'

const AboutUs = ({ data }) => {
  return (
    <section className='my-14'>
      <div className="h-[100px] w-full">
        <Image src={BG} width={1920} height={692} className="md:h-[500px] h-[400px] w-full" alt="icons" />
      </div>

      <div className="flex flex-wrap justify-center gap-96 max-[1095px]:gap-10 md:m-10">
        <div>
          <h2 className='md:text-5xl max-w-xl text-4xl font-bold'>{data.sec4}</h2>
          <p className='text-xl font-normal'>{data.sec4subtitle}</p>
        </div>
        
        <div className="flex justify-items-center">
          <button className='bg-white rounded-3xl h-11 px-9 py-2 text-[#D2940A] text-sm'>
            {data.sec4button}
          </button>
        </div>
      </div>
      <div className="relative flex justify-center mx-10 max-[564px]:-top-12">
        <img className='h-96 rounded-xl object-contain' src={urlForImage(data.sec4image).url()} alt="about-us-image" />
      </div>
    </section>
  )
}

export default AboutUs
