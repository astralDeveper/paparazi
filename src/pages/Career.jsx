import React from 'react'
import Careersection1 from '../component/Career/Careercomponent'
import Careersection2 from '../component/Career/Careersection2'
import Careersection3 from '../component/Career/Careersection3'
import Careersection4 from '../component/Career/Careersection4'


const Career = () => {

  const positions = [
    {
      title: "Software Engineer",
      location: "Tokyo, Japan",
      type: "Full-Time",
      vacancies: "01",
      deadline: "03 June, 2021",
    },
    {
      title: "Marketing Specialist",
      location: "Moscow,Russia",
      type: "Part-Time",
      vacancies: "02",
      deadline: "15 July, 2021",
    },
    {
      title: "Director of Accounting",
      location: "Mumbai, India",
      type: "Contract",
      vacancies: "03",
      deadline: "20 August, 2021",
    },
    {
      title: "Software Engineer",
      location: "Tokyo, Japan",
      type: "Full-Time",
      vacancies: "01",
      deadline: "03 June, 2021",
    },
    {
      title: "Marketing Specialist",
      location: "New York, USA",
      type: "Part-Time",
      vacancies: "02",
      deadline: "15 July, 2021",
    },
    {
      title: "Director of Accounting",
      location: "Mumbai, India",
      type: "Contract",
      vacancies: "03",
      deadline: "20 August, 2021",
    },
    // Add more positions as needed
  ];

  
  return (
    <div>
      <Careersection1/>
      <Careersection2/>
      <Careersection3/>
      <Careersection4 positions={positions} />
    </div>
  )
}

export default Career