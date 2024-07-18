import React, { useEffect, useState } from 'react'
import Section1 from '../component/Career/Section1'
import Section2 from '../component/Career/Section2'
import Section3 from '../component/Career/Section3'
import Section4 from '../component/Career/Section4'
import sanityClient from "../sanity/client";

export default function Career() {
  const [careersData, setCareersData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const career = await sanityClient.fetch(`*[_type == 'Careers']{...}`);
        setCareersData(career[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!careersData) return null;

  return (
    <div>
      <Section1 careersData={careersData}/>
      <Section2 careersData={careersData}/>
      <Section3 careersData={careersData}/>
      <Section4 careersData={careersData} />
    </div>
  )
}