"use client"
import Banner from '@/app/_components/home/Banner'
import Blogs from '@/app/_components/home/Blogs'
import Development from '@/app/_components/home/Development'
import AboutUs from '@/app/_components/home/AboutUs'
import BussinessSection from '@/app/_components/home/BussinessSection'
import SingersSection from '@/app/_components/home/SingersSection'
import StrategicIntelligence from '@/app/_components/home/StrategicIntelligence'
import DevCards2 from '@/app/_components/home/DevCards2'
import Solutions from '@/app/_components/home/Solutions'
import SliderSection from '@/app/_components/home/SliderSection'
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'
import { urlForImage } from '@/sanity/lib/utils'
import AdvantageSection from '../_components/home/AdvantageSection'

export default function HomePage() {
  const [home , setHome] = useState(null)
  useEffect(() => {
    const fetchHomeData = async () => {
      const homepageData = await client.fetch(`*[_type == 'Home'][0]{...}`, {}, {
        next: { tags: ['Home'] }
      });
     setHome(homepageData)
    }
    fetchHomeData()
  }, [home])



  if (!home) return null;

  return (
    <div className='pb-16'>
      <Banner data={home}/>
      <div className='max-w-screen-2xl mx-auto px-4 py-24 max-sm:py-16 flex flex-col gap-32 max-lg:px-6 max-lg:gap-24'>
        {home.sec1.map((item, index )=>{
          const isReverse = index % 2 !== 0;
          return <div key={index}><Blogs head={item.cardheading} para={item.cardparagraph} image={urlForImage(item).url()} reverse={isReverse}/></div>
        })}
      </div>
      <AdvantageSection head={home.lastheading} para={home.lastpara} smallPara={home.lastparaline}/>
       
      {/*<Development data={home}/>
      <BussinessSection data={home}/>
      <SingersSection data={home}/>
      <DevCards2 data={home}/>
      <StrategicIntelligence data={home}/>
      <AboutUs data={home}/>
      <Solutions data={home}/>
      <SliderSection data={home}/> */}
    </div>
  );
}
