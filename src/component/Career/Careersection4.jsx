import React from 'react';
import MapPinLine from "../../assets/MapPinLine.png";
import Briefcase from "../../assets/Briefcase.png";
import ClipboardText from "../../assets/ClipboardText.png";

const Careersection4 = ({ positions }) => {
  return (
    <div>
      <section className="max-w-7xl mx-auto body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-14">
            <h1 className="sm:text-5xl text-2xl font-medium title-font">
              Our all open positions ({positions.length})
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            {positions.map((position, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 w-full">
                <div style={{ background: '#363636' }}>
                  <div className="py-10 w-full">
                    <h1 className="px-8 title-font text-lg font-medium mb-3">
                      {position.title}
                    </h1>
                    <div className='px-8 flex gap-5 border-b-2 border-gray-300 py-5'>
                      <p className='flex items-center'>
                        <span className='mr-2'>
                          <img src={MapPinLine} alt="location" />
                        </span>
                        <p className='text-sm'>{position.location}</p>
                      </p>
                      <p className='flex items-center'>
                        <span className='mr-1'>
                          <img src={Briefcase} alt="type" />
                        </span>
                        {/* {position.type} */}
                        <p className='text-sm'>{position.type}</p>
                      </p>
                      <p className='flex items-center'>
                        <span className='mr-2'>
                          <img src={ClipboardText} alt="vacancy" />
                        </span>
                        {/* {position.vacancies}  */}
                        <p className='text-sm'>{position.vacancies}Vacancy</p>
                      </p>
                    </div>
                    <div className="px-8 flex justify-between items-center mt-6">
                      <span><span className='text-red-500 font-medium'>Deadline : </span>{position.deadline}</span>
                      <button className='bg-golden px-4 py-2 text-4xl'>
                        &#8594;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careersection4;
