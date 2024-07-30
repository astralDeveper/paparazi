import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/utils";
import { client } from "@/sanity/lib/client";
import Section4 from "@/app/_components/career/job-cards";

export default async function Career() {
  let careerData = null;

  try {
    const career = await client.fetch(groq`*[_type == 'Careers'][0]{...}`, {}, {
      next: { tags: ["Careers"] },
    });
    careerData = career;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!careerData) return null;

  return (
    <div>
      <Section1 careersData={careerData} />
      <Section2 careersData={careerData} />
      <Section3 careersData={careerData} />
      <Section4 careersData={careerData} />
    </div>
  );
}

function Section1({ careersData }) {
  return (
    <section className="max-w-7xl mx-auto body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-60 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl mb-4 font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {careersData.title1}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-300 md:text-1xl lg:text-1xl xl:text-1xl">
            {careersData.paragraph1}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white rounded-3xl">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={urlForImage(careersData.image1).url()}
          />
        </div>
      </div>
    </section>
  );
}

function Section2({ careersData }) {
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

function Section3({ careersData }) {
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

