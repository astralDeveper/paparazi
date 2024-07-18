import React from 'react';
import svg from '../../assets/iconsvg2.png'
import { FaArrowRight } from "react-icons/fa6";

const StrategicIntelligence = ({data}) => {
  return (
    <div className="bg-[#65656533] text-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <span className="inline-block bg-[#65656533] border py-2 px-4 rounded-xl text-sm font-semibold">{data.sec8button}</span>
      </div>
      <h2 className="text-4xl mb-24">{data.sec8title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.sec8card.map((item) => (
          <div className="bg-[#151515] p-6 w-80 h-80 rounded-lg shiny-edges">
            <div className="flex items-center mb-4">
         
                <img src={svg} alt="Icon" className="w-11 h-11" />
     
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.sec8title}</h3>
            <p className="mb-4">{item.sec8subtitle}</p>
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


