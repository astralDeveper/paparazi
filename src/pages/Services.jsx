import { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity/client";

export default function Services() {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await sanityClient.fetch(
          `*[_type == 'Services']{...}`
        );
        setServicesData(services[0]);
        console.log(services);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!servicesData) return null;
  console.log(servicesData);

  const obj = [
    {
      head: "Public-Private Cooperation",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
    {
      head: "App desGlobal Future Councilsign",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
    {
      head: "Centre for Cybersecurity",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
    {
      head: "Centre for Health and Healthcare",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
    {
      head: "Strategic Intelligence",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
    {
      head: "C4 Industrial Revolution",
      para: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="p-24 max-w-screen-2xl mx-auto max-xl:p-10 max-sm:p-5">
      <div className="bg-black max-xl:p-12 p-20 max-sm:p-8">
        <div className="max-w-screen-lg">
          <h2 className="text-3xl font-bold  leading-[45px] max-sm:text-xl">
            {servicesData.title}
          </h2>
          <p className="mt-6 max-sm:text-sm">{servicesData.paragraph}</p>
        </div>

        <div className="grid grid-cols-2 gap-20 max-sm:gap-14 mt-20 max-sm:mt-12 justify-items-center max-lg:grid-cols-1">
          {servicesData.card.map((item, index) => (
            <ServicesCard
              key={index}
              head={item.heading}
              para={item.description}
              image={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCard(props) {
  return (
    <article className="flex gap-6 items-center w-fit">
      <div className="img-div bg-white p-3 rounded-2xl">
        <img src={urlFor(props.image).url()} className="w-10" alt="" />
      </div>
      <div className="w-80 max-lg:w-full transition-all ">
        <h4 className="text-xl font-semibold">{props.head}</h4>
        <p>{props.para}</p>
      </div>
    </article>
  );
}
