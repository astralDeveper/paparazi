import React, { useEffect, useState } from 'react'
import Banner from '../component/Home/Banner'
import Development from '../component/Home/Development'
import DevCards from '../component/Home/DevCards'
import AboutUs from '../component/Home/AboutUs'
import BussinessSection from '../component/Home/BussinessSection'
import SingersSection from '../component/Home/SingersSection'
import StrategicIntelligence from '../component/Home/StrategicIntelligence'
import Blogs from '../component/Home/Blogs'
import DevCards2 from '../component/Home/DevCards2'
import Solutions from '../component/Home/Solutions'
import SliderSection from '../component/Home/SliderSection'
import sanityClient from "../sanity/client";

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await sanityClient.fetch(`*[_type == 'Home']{...}`);
        setData(Data[0]);
        console.log(Data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null;


  return (
    <div>
      <Banner data={data}/>
      <Blogs data={data}/>
      <Development data={data}/>
      <DevCards data={data}/>    
      <AboutUs data={data}/>
      <BussinessSection data={data}/>
      <SingersSection data={data}/>
      <DevCards2 data={data}/>
      <StrategicIntelligence data={data}/>
      <Solutions data={data}/>
      <SliderSection data={data}/>
    </div>
  )
}

export default Home
