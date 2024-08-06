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
    <div>
      <Banner data={home}/>
      {/* <Blogs data={home}/>
      <Development data={home}/>
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
