'use client'
import Icon1 from '@/app/_assets/home/sec1-card1.png';
import Icon2 from '@/app/_assets/home/sec1-card2.png';
import Icon3 from '@/app/_assets/home/sec1-card3.png';
import Icon4 from '@/app/_assets/home/sec1-card4.png';
import Icon5 from '@/app/_assets/home/sec1-card5.png';
import Icon6 from '@/app/_assets/home/sec1-card6.png';
import vector from '@/app/_assets/home/Vector.svg';
import { urlForImage } from '@/sanity/lib/utils';
import Image from 'next/image';

export default function Banner({ data }) {
  // console.log(data);
  
  return (
    <>
    {/* <section className="px-4 py-24 max-w-screen-2xl mx-auto ">
      <h1 className="font-medium text-5xl max-md:text-3xl text-center">
        {data.header}
      </h1>

      <p className="mt-10 text-lg max-sm:text-base  text-center max-w-screen-sm mx-auto">
        {data.subheaderpara}
      </p>

      <p className="mt-10 text-lg max-sm:text-base text-center max-w-screen-sm mx-auto">
        {data.headerpara}
      </p>

      <div className="mt-10 grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 justify-center text-zinc-800 font-medium text-center text-lg max-sm:text-base gap-4">
        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon1} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>
          <h2 className="mt-4 leading-tight">{data.headercards[0]}</h2>
        </div>

        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon2} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>
          <h2 className="mt-4 leading-tight">{data.headercards[1]}</h2>
        </div>

        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon3} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>

          <h2 className="mt-4 leading-tight">{data.headercards[2]}</h2>
        </div>

        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon4} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>

          <h2 className="mt-4 leading-tight">{data.headercards[3]}</h2>
        </div>

        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon5} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>

          <h2 className="mt-4 leading-tight">{data.headercards[4]}</h2>
        </div>

        <div className="p-8 w-full bg-white rounded-lg">
          <Image src={Icon6} width={80} height={80} className="mx-auto size-20 object-cover rounded-full" alt="card icon"/>

          <h2 className="mt-4 leading-tight">{data.headercards[5]}</h2>
        </div>
      </div>

      <p className="mt-10 text-lg max-sm:text-base text-center max-w-screen-sm mx-auto">
        {data.headerpara}
      </p>
      <button className="bg-white mx-auto md:mt-0 px-3 py-3 mt-6 rounded-full font-bold text-base text-center text-golden">
        {data.button}
      </button>
    </section> */}

    <section className='w-full pb-16 max-sm:pb-0 bg-[#252525]'>
      <div className='absolute h-full w-full top-0 max-lg:mt-32  left-0 z-0 max-md:mt-[40%] transition-all'>
        <Image src={vector} className='relative'/>
      </div>
            <div className='relative z-10 px-4 py-24 max-w-screen-2xl mx-auto max-sm:-mt-8'>

            <p className="my-6 text-lg max-sm:text-base  text-center max-w-screen-lg italic mx-auto">
              {data.subheaderpara}
            </p>
              <h1 className="font-medium text-5xl  text-center max-xl:text-3xl max-sm:mx-8">
              {data.header}
            </h1>

            <p className="mt-10 text-lg max-sm:text-base text-center max-w-screen-lg mx-auto max-xl:w-[80%]">
              {data.headerpara}
            </p>

            <h4 className="mt-10 text-xl max-sm:text-base text-center max-w-screen-lg mx-auto">
              {data.subheaderline}
            </h4>

            <h3 className="mt-10 text-lg font-semibold max-sm:text-base text-center max-w-screen-lg mx-auto max-xl:w-[80%]">
              {data.subheader2}
            </h3>


        </div>
    </section>

    
    </>
  );
}
