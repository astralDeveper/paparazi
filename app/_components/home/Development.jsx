'use client'

import { urlForImage } from "@/sanity/lib/utils"
import { RiCloseLine, RiPlayCircleLine, RiPlayLargeFill } from "@remixicon/react";
import { useState } from "react";

export default function Development({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };


  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-24">
    <div className="flex items-center justify-between">
      <h2 className='font-medium text-6xl max-md:text-3xl'>{data.sec2}</h2>
    </div>

    <article className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-12 w-full mt-12">
      <div className="w-full rounded-lg overflow-hidden cursor-pointer relative group" onClick={() => openModal(data.sec3[0])}>
        <img alt="ecommerce" className="w-full object-cover aspect-video grayscale " src={urlForImage(data.sec3[0]).url()} />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/35 transition-all">
          <div className="absolute size-20 max-sm:size-14 top-6 right-6 group-hover:scale-110 transition-transform flex justify-center items-center bg-white rounded-full">
            <RiPlayLargeFill className=" text-black size-16 max-sm:size-10" />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <h3 className="text-sm tracking-widest">{data.sec3[0].sec3title} <span className='text-golden'>{new Intl.DateTimeFormat('en-US').format(new Date(data.sec3[0].sec3date))}</span></h3>
        <h2 className="font-medium text-4xl mt-3">{data.sec3[0].sec3heading}</h2>
        <p className="leading-relaxed mt-6 text-gray-300">{data.sec3[0].sec3paragraph}</p>
      </div>
    </article>

    <div className="grid grid-cols-3 max-md:grid-cols-1 justify-between mt-12 w-full gap-4">
      {data.sec3.slice(1, 4).map((item, i) => (
        <article key={i} className="p-4 w-full cursor-pointer" onClick={() => openModal(item)}>
          <div className="w-full rounded-lg overflow-hidden relative group">
            <img alt="content" className="w-full object-cover aspect-video grayscale" src={urlForImage(item).url()} />
            
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/35 transition-all">
              <div className="absolute size-16 max-sm:size-12 top-6 right-6 group-hover:scale-110 transition-transform flex justify-center items-center bg-white rounded-full">
                <RiPlayLargeFill className=" text-black size-12 max-sm:size-8" />
              </div>
            </div>
          </div>
          <h3 className="text-sm tracking-widest pt-4">{item.sec3title} <span className='text-golden'>{item.sec3date && new Intl.DateTimeFormat('en-US').format(new Date(item.sec3date))}</span></h3>
          <h2 className="mt-4 font-medium text-xl">{item.sec3heading}</h2>
          <p className="mt-2 leading-relaxed text-gray-300">{item.sec3paragraph}</p>
        </article>
      ))}
    </div>

    {isModalOpen && modalContent && (
      <div id="default-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 px-4 backdrop-blur-sm">
        <div className="relative w-full max-w-3xl bg-[#363636] rounded-lg shadow p-6">
          <div className="relative flex items-center justify-between">
            <h3 className="text-xl font-semibold">{modalContent.sec3heading}</h3>
            
            <button type="button" className="bg-transparent hover:bg-white/15 transition-colors rounded size-8 inline-flex justify-center items-center" onClick={closeModal}>
              <RiCloseLine />
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <video width="500" height="240" controls autoPlay className="mx-auto aspect-video mt-6">
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <h2 className="text-2xl font-semibold">{modalContent.sec3heading}</h2> */}
          <p className="mt-6 text-neutral-300 font-normal">{modalContent.sec3paragraph}</p>
        </div>
      </div>
    )}
  </section>
  )
}