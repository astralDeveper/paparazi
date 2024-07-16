import React from 'react';
import svg from '../../assets/iconsvg2.png'
import { FaArrowRight } from "react-icons/fa6";

const StrategicIntelligence = () => {
  const blogData = [
    {
        imgSrc: svg,
        title: 'Climate Crises',
        description: 'Real-time and holistic visibility of sensitive data across your entire SaaS ecosystem',
    },
    {
      imgSrc: svg,
      title: 'Cyber Security',
      description: 'Automatically prevent specific data being shared in entire apps or isolated locations',
  },
  {
    imgSrc: svg,
    title: 'Education',
    description: 'Enable the human firewall with real-time employee notifications when a policy has been violated',
},
{
  imgSrc: svg,
  title: 'Future of Work',
  description: 'Control who has access to what data, and when - helping you reduce exposure in a few clicks',
},
{
  imgSrc: svg,
  title: 'Climate Crises',
  description: 'Prevent insider threat with visibility and alerts for anomalous activities in any SaaS app',
},
{
  imgSrc: svg,
  title: 'Cyber Security',
  description: 'Make your SaaS apps compliant with regulations and standards like HIPAA, PCI DSS, and GDPR',
},
  ];
  return (
    <div className="bg-[#65656533] text-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <span className="inline-block bg-[#65656533] border py-2 px-4 rounded-xl text-sm font-semibold">Strategic Intelligence</span>
      </div>
      <h2 className="text-4xl mb-24">Strategic Intelligence from the World <br /> Economic Forum</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.map((blog, index) => (
          <div key={index} className="bg-[#151515] p-6 w-80 h-80 rounded-lg shiny-edges">
            <div className="flex items-center mb-4">
         
                <img src={blog.imgSrc} alt="Icon" className="w-11 h-11" />
     
            </div>
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="mb-4">{blog.description}</p>
            <button className="flex items-center border border-[#D2940A] rounded-xl py-[4px] pl-4 pr-[4px] text-white hover:text-yellow-400">
              <span>Read more</span>
              <FaArrowRight className="w-4 h-4 ml-2 bg-[#D2940A] rounded-lg p-4 text-white" />
            </button>
          </div>
         ))}
      </div>
    </div>
  </div>
  );
};

export default StrategicIntelligence;


