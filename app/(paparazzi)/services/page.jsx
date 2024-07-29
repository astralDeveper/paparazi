import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/utils";

export const dynamic = "force-dynamic";

export default async function Services() {
  let servicesData = null;

  try {
    const services = await client.fetch(`*[_type == 'Services']{...}`);
    servicesData = services[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!servicesData) return null;

  return (
    <section className="p-24 max-w-screen-2xl mx-auto max-xl:p-10 max-sm:p-5">
      <div className="bg-black max-xl:p-12 p-20 max-sm:p-8">
        <div className="max-w-screen-lg">
          <h2 className="text-3xl font-bold leading-[45px] max-sm:text-xl">
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
        <img src={urlForImage(props.image).url()} className="w-10" alt="" />
      </div>
      <div className="w-80 max-lg:w-full transition-all ">
        <h4 className="text-xl font-semibold max-sm:text-sm">{props.head}</h4>
        <p className="max-sm:text-xs">{props.para}</p>
      </div>
    </article>
  );
}
