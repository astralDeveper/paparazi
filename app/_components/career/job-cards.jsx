'use client';

import { useState } from "react";
import { RiArticleLine, RiBriefcaseLine, RiCalendarLine, RiCloseLine, RiMapPin2Line } from "@remixicon/react";
import { PortableText } from '@portabletext/react'

export default function JobCards({ careersData }) {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openModal = (position) => {
    setSelectedPosition(position);
  };

  const closeModal = () => {
    setSelectedPosition(null);
  };

  return (
    <section className="max-w-screen-xl mx-auto py-24 overflow-hidden">
      <div>
        <div className="flex flex-col text-center w-full mb-14">
          <h2 className="sm:text-5xl text-2xl font-medium title-font">
            {careersData.jobs.length ?
              <span>Our all open positions ({careersData.jobs.length})</span>
              :
              <span>No jobs currently available!</span>
            }
          </h2>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4 px-4 justify-items-center">
          {careersData.jobs.map((job, index) => (
            <article
              key={index}
              className="w-full max-w-md bg-[#363636] cursor-pointer py-10 rounded-md"
              onClick={() => openModal(job)}
            >
              <h3 className="px-6 text-lg font-medium mb-3">{job.title}</h3>
              <div className="px-6 flex gap-2 flex-wrap justify-between border-b-2 border-neutral-600 py-5 w-full">
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiMapPin2Line className="text-blue-600" />
                  </span>
                  <p className="text-sm">{job.location}</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiBriefcaseLine className="text-green-600" />
                  </span>
                  <p className="text-sm capitalize">{job.type}</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiArticleLine className="text-orange-600" />
                  </span>
                  <p className="text-sm">{job.vacancy} Vacancy</p>
                </div>
              </div>
              <div className="px-6 flex justify-between items-center mt-6">
                <span>
                  <span className="text-red-500">Deadline: </span>
                  {new Intl.DateTimeFormat('en-US').format(new Date(job.deadline))}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPosition && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto flex bg-black/25 backdrop-blur-sm"
        >
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            <div className="relative bg-[#363636] rounded-lg shadow">
              <div className="flex items-start justify-between p-4 border-b border-neutral-600 rounded-t">
                <h3 className="text-xl font-semibold text-white">
                  {selectedPosition.title}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-white bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center size-8"
                >
                  <RiCloseLine />
                </button>
              </div>
              <div className="p-6 space-y-6 text-white">
                <p className="flex gap-4 items-center justify-start">
                  <RiMapPin2Line className="text-blue-600 size-6" />
                  <span>Location:</span>
                  <span className="font-light">{selectedPosition.location}</span>
                </p>
                <p className="flex gap-4 items-center justify-start">
                  <RiBriefcaseLine className="text-green-600 size-6" />
                  <span>Type:</span>
                  <span className="font-light capitalize">{selectedPosition.type}</span>
                </p>
                <p className="flex gap-4 items-center justify-start">
                  <RiArticleLine className="text-orange-600 size-6" />
                  <span>Vacancies:</span>
                  <span className="font-light">{selectedPosition.vacancy}</span>
                </p>
                <p className="flex gap-4 items-center justify-start">
                  <RiCalendarLine className="text-red-600 size-6" />
                  <span>Deadline:</span>
                  <span className="font-light">{new Intl.DateTimeFormat('en-US').format(new Date(selectedPosition.deadline))}</span>
                </p>
                
                <div className="mt-20">
                  <PortableText value={selectedPosition.description} components={portabletextComponents} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const portabletextComponents = {
  block: { 
    h2: ({children}) => <h2 className="text-3xl font-semibold mb-6 [&:not(:first-of-type)]:mt-8">{children}</h2>,
    h3: ({children}) => <h2 className="text-2xl font-semibold mb-6 [&:not(:first-of-type)]:mt-8">{children}</h2>,
    h4: ({children}) => <h2 className="text-xl font-semibold mb-6 [&:not(:first-of-type)]:mt-8">{children}</h2>,
    normal: ({children}) => <p className="[&:not(:first-of-type)]:mt-4">{children}</p>,
  }, 
  list: {
    bullet: ({children}) => <ul className="list-disc list-inside mt-4">{children}</ul>
  }
}