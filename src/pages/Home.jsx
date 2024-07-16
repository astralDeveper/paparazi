import React, { useEffect, useState } from 'react'
import Banner from '../component/Home/Banner'
import Development from '../component/Home/Development'
import DevCards from '../component/Home/DevCards'
import AboutUs from '../component/Home/AboutUs'
import BussinessSection from '../component/Home/BussinessSection'
import SingersSection from '../component/Home/SingersSection'
import StrategicIntelligence from '../component/Home/StrategicIntelligence'
import client from '../sanity/client'
import Blogs from '../component/Home/Blogs'
import DevCards2 from '../component/Home/DevCards2'
import Solutions from '../component/Home/Solutions'
import SliderSection from '../component/Home/SliderSection'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "post"] {
            title,
            slug,
            body,
            mainImage,
          }`
        );
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();


  }, []);

  console.log(data);


  return (
    <div>
      <Banner/>
      <Blogs/>
      <Development/>
      <DevCards/>    
      <AboutUs/>
      <BussinessSection/>
      <SingersSection/>
      <DevCards2/>
      <StrategicIntelligence/>
      <Solutions/>
      <SliderSection/>
    </div>
  )
}

export default Home
