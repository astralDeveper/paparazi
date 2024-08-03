'use client'
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/utils";
import { groq } from "next-sanity";
import fur1 from '../../_assets/home/card1.png';
import fur2 from '../../_assets/home/card2.png';
import fur3 from '../../_assets/home/card3.png';
import Image from "next/image";
import check from '../../_assets/home/CheckCircle.png';

export default function Services() {
  const [servicesData, setServicesData] = useState(null);
  const obj = [
    {
      head: "Floyd Miles",
      image: fur1,
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      startNum: 4
    },
    {
      head: "Ronald Richards",
      image: fur2,
      para: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      startNum: 4
    },
    {
      head: "Savannah Nguyen",
      image: fur3,
      para: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      startNum: 4
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await client.fetch(groq`*[_type == 'Services'][0]{...}`, {}, {
          next: { tags: ['Services'] }
        });
        setServicesData(services);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!servicesData) return null;

  return (
    <section className="p-24 max-w-screen-2xl mx-auto max-xl:p-10 max-sm:p-5">
      <div className="bg-black max-xl:p-12 p-20 max-sm:p-8 pb-4">
        <div className="max-w-screen-lg">
          <h2 className="text-3xl font-bold leading-[45px] max-sm:text-xl">
            {servicesData.title}
          </h2>
          <p className="mt-6 max-sm:text-sm">{servicesData.paragraph}</p>
          <h2 className="text-xl font-semibold mt-8 max-sm:text-lg">
            {servicesData.subHeading}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-20 max-sm:gap-14 mt-20 max-sm:mt-12 justify-items-center max-lg:grid-cols-1">
          {servicesData.card.map((item, index) => (
            <ServicesCard
              key={index}
              head={item.heading}
              para={item.description}
              fullPara={item.fullDescription}
              image={item}
            />
          ))}
        </div>
      </div>

      <div className="bg-black max-xl:p-12 pt-4 pb-4 p-20 px-32 max-sm:p-8">
        <h2 className="text-lg font-semibold max-sm:text-md">
          Step into the world of refined influence at Paparazzi House, where you unlock the secrets of making a lasting impression.
        </h2>
        <div className="bg-white w-full p-4 mt-4 mb-6 text-black">
          <h2 className="text-2xl font-bold">{servicesData.feedbackTitle}</h2>
          <h3 className="font-semibold text-lg">{servicesData.feedbackSubTitle}</h3>
          <div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {servicesData.feedback.map((item, index) => (
                <CustomerCard
                  key={index}
                  image={item.image}
                  para={item.feedbackDescription.slice(0, 200)}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8">
          {servicesData.custactUs}
        </p>
        <p className="italic mt-4">{servicesData.custactUs1}</p>
        <p className="mt-4">{servicesData.custactUs2}</p>
      </div>

      <div className="bg-black max-xl:p-12 pt-2 p-20 px-8 max-sm:p-8 text-white flex">
        <div className="bg-white text-black p-4 w-full flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-2xl mb-4">{servicesData.book[0].booktitle}</h2>
            <p>{servicesData.book[0].bookdescription}</p>
          </div>

          <div className="bg-[#363636] flex items-center text-white gap-4 p-4">
            {/* <Image src={"https://" + servicesData.feedback[0].asset._ref} alt="check" width={30} height={30}/> */}
            <p className="text-sm">{servicesData.book[0].booksubtitle}</p>
          </div>
        </div>

        <div className="bg-[#363636] text-white p-4 w-full">
          <h2 className="font-semibold text-2xl mb-4">{servicesData.book[1].booktitle}</h2>
          <p>
           {servicesData.book[1].bookdescription}
          </p>

          <div className="bg-white flex items-center text-black mt-6 gap-4 p-4">
            {/* <Image src={"https://" + servicesData.feedback[1].asset._ref} alt="check" width={30} height={30}/> */}
            <p className="text-sm">{servicesData.book[1].booksubtitle}</p>
          </div>
        </div>`
      </div>
    </section>
  );
}

function ServicesCard({ head, para, fullPara, image }) {
  const [showFullPara, setShowFullPara] = useState(false);

  const toggleFullPara = () => {
    setShowFullPara(!showFullPara);
  };

  return (
    <article className="flex gap-6 items-start w-full">
      <div className="img-div bg-white p-3 rounded-2xl mt-2">
        <img src={urlForImage(image).url()} className="w-10" alt="" />
      </div>
      <div className="w-full transition-all">
        <h4 className="text-xl font-semibold max-sm:text-sm">{head}</h4>
        <p className="max-sm:text-xs mt-1">
          {para}
          {showFullPara && (
            <div className="mt-2">
              {fullPara}
            </div>
          )}
          <button className="font-semibold ml-2" onClick={toggleFullPara}>
            {showFullPara ? "Show less" : "Read more"}
          </button>
        </p>
      </div>
    </article>
  );
}

function CustomerCard({ image, para }) {
  return (
    <article className="border p-4">
      <div className="flex justify-between items-start">
        <Image src={image} alt="card" width={60} height={60} />
        <div className="flex items-center">
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.616l-.863-5.03 3.656-3.564a1.524 1.524 0 0 0 .387-1.573Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.616l-.863-5.03 3.656-3.564a1.524 1.524 0 0 0 .387-1.573Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.616l-.863-5.03 3.656-3.564a1.524 1.524 0 0 0 .387-1.573Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.616l-.863-5.03 3.656-3.564a1.524 1.524 0 0 0 .387-1.573Z" />
          </svg>
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.616l-.863-5.03 3.656-3.564a1.524 1.524 0 0 0 .387-1.573Z" />
          </svg>
        </div>
      </div>
      <p className="mt-4 text-sm">{para}</p>

    </article>
  );
}
