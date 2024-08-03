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

export default async function HomePage() {
  let data = null;

  try {
    const homepageData = await client.fetch(`*[_type == 'Home']{...}`, {}, {
      next: { tags: ['Home'] }
    });
    data = homepageData[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!data) return null;

  return (
    <div>
      <Banner data={data}/>
      <Blogs data={data}/>
      <Development data={data}/>
      <AboutUs data={data}/>
      <BussinessSection data={data}/>
      <SingersSection data={data}/>
      <DevCards2 data={data}/>
      <StrategicIntelligence data={data}/>
      <Solutions data={data}/>
      <SliderSection data={data}/>
    </div>
  );
}
