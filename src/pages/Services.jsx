import React, { useEffect, useState } from 'react'
import ServicesCard from '../component/services/ServicesCard'
import sanityClient, { urlFor } from "../sanity/client";


const Services = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await sanityClient.fetch(`*[_type == 'Services']{...}`);
        setServicesData(services[0]);
        console.log(services);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!servicesData) return null;
  console.log(servicesData);


  const obj = [
    {
      head: "Public-Private Cooperation",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
    {
      head: "App desGlobal Future Councilsign",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
    {
      head: "Centre for Cybersecurity",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
    {
      head: "Centre for Health and Healthcare",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
    {
      head: "Strategic Intelligence",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
    {
      head: "C4 Industrial Revolution",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua."
    },
  ]
  return (
    <>
      <section className='p-24 max-w-screen-2xl mx-auto max-xl:p-10'>
        <div className='bg-black max-xl:p-12 p-20'>
            <div className='max-w-screen-lg'>
              <h2 className='text-3xl font-bold  leading-[45px]'>{servicesData.title}</h2>
              <p className='mt-6 '>{servicesData.paragraph}</p>
            </div>

            <div className='grid grid-cols-2 gap-20 mt-20 justify-items-center max-lg:grid-cols-1'>
              {servicesData.card.map((item, index)=> <ServicesCard key={index} head={item.heading} para={item.description} image={item} />)}
            </div>
        </div>
      </section>
    </>
  )
}

export default Services