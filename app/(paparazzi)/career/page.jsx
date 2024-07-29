import { urlForImage } from '@/sanity/lib/utils'
import { client } from '@/sanity/lib/client';

export const dynamic = "force-dynamic";

export default async function Career() {
    let careerData = null;

    try {
      const career = await client.fetch(`*[_type == 'Careers'][0]{...}`);
      careerData = career
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    if (!careerData) return null;

  return (
    <div>
      <Section1 careersData={careerData}/>
      <Section2 careersData={careerData}/>
      <Section3 careersData={careerData}/>
      <Section4 careersData={careerData} />
    </div>
  )
}

 function Section1({careersData}) {
  return (
    <div>
      <div>
      <section className="max-w-7xl mx-auto body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-60 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl mb-4 font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl" >
              {careersData.title1}
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300 md:text-1xl lg:text-1xl xl:text-1xl">
              {careersData.paragraph1}
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-golden border-0 py-2 px-6 focus:outline-none rounded-lg text-sm md:text-1xl lg:text-1xl xl:text-1xl">
                Listen the podcast
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white rounded-3xl">
            <img className="object-cover object-center rounded" alt="hero" src={urlForImage(careersData.image1).url()} />
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}



function Section2({careersData}) {
  return (
    <section className="bg-[#363636]">
      <div className="max-w-7xl container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={urlForImage(careersData.image2).url()}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:ml-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="title-font mb-4 font-medium text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
            {careersData.title2}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-200  md:text-1xl lg:text-1xl xl:text-1xl">
            {careersData.paragraph2}
          </p>
          <div className="flex relative py-7 px-3 bg-white text-left">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 inline-flex items-center justify-center text-white relative z-10">
              &#x2713;
            </div>

            <div className="flex-grow pl-4">
              <h3 className="font-medium title-font text-2lg text-gray-900 mb-1">
              {careersData.heading1}
              </h3>
              <p className="leading-relaxed text-gray-700 ">
              {careersData.cardPara1}
              </p>
            </div>
          </div>
          <div className="flex relative py-7 px-3 bg-white mt-4 text-left">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-600 inline-flex items-center justify-center text-white relative z-10">
              &#x2713;
            </div>

            <div className="flex-grow pl-4">
              <h3 className="font-medium title-font text-2lg text-gray-900 mb-1">
              {careersData.heading2}
              </h3>
              <p className="leading-relaxed text-gray-700">
              {careersData.cardPara2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3({careersData}) {
  return (
    <section className=" bg-white body-font">
      <div className="max-w-7xl container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="text-gray-800 lg:flex-grow md:w-1/2 lg:pr-40 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="tracking-widest text-xs title-font font-medium text-golden mb-1">
            {careersData.miniTitle3}
          </h3>
          <h2 className="title-font text-xl md:text-2xl lg:text-3xl xl:text-4xl my-4 font-bold ">
            {careersData.title3}
          </h2>
          <p className="sm:mb-8 leading-relaxed text-sm md:text-sm lg:text-base xl:text-lg">
          {careersData.paragraph3}
          </p>
        </div>
        <div className="lg:w-1/2 w-full sm:mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={urlForImage(careersData.image3).url()}
          />
        </div>
      </div>
    </section>
  );
}

import { RiArrowRightLine, RiArticleLine, RiBriefcaseLine, RiMapPin2Line } from '@remixicon/react';

function Section4({ careersData }) {
  return (
    <section className="max-w-screen-xl mx-auto py-24 overflow-hidden">
      <div className="">
        <div className="flex flex-col text-center w-full mb-14">
          <h2 className="sm:text-5xl text-2xl font-medium title-font">
            Our all open positions ({careersData.positionCard.length})
          </h2>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-4 px-4 justify-items-center">
          {careersData.positionCard.map((position, index) => (
            <article key={index} className="w-full max-w-md bg-[#363636] py-10 rounded-md">
              <h3 className="px-6 text-lg font-medium mb-3">
                {position.name}
              </h3>
              <div className="px-6 flex gap-2 flex-wrap justify-between border-b-2 border-gray-300 py-5 w-full">
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiMapPin2Line className='text-blue-600'/>
                  </span>
                  <p className="text-sm">{position.location}</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiBriefcaseLine className='text-green-600'/>
                  </span>
                  {/* {position.type} */}
                  <p className="text-sm">{position.time}</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-1">
                    <RiArticleLine className='text-orange-600'/>
                  </span>
                  {/* {position.vacancies}  */}
                  <p className="text-sm">{position.vacancy} Vacancy</p>
                </div>
              </div>
              <div className="px-6 flex justify-between items-center mt-6">
                <span>
                  <span className="text-red-500">Deadline: </span>
                  {position.deadline}
                </span>

                {/* <button className="bg-golden px-3 py-2 text-4xl">
                  <RiArrowRightLine/>
                </button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


