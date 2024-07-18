import { urlFor } from "../../sanity/client";

export default function CareerSection3({careersData}) {
  return (
    <section className=" bg-white body-font">
      <div className="max-w-7xl container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="text-gray-800 lg:flex-grow md:w-1/2 lg:pr-40 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="tracking-widest text-xs title-font font-medium text-golden mb-1">
            {careersData.miniTitle3}
          </h2>
          <h1 className="title-font text-xl md:text-2xl lg:text-3xl xl:text-4xl my-4 font-bold ">
            {careersData.title3}
          </h1>
          <p className="sm:mb-8 leading-relaxed text-sm md:text-sm lg:text-base xl:text-lg">
          {careersData.paragraph3}
          </p>
        </div>
        <div className="lg:w-1/2 w-full sm:mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={urlFor(careersData.image3).url()}
          />
        </div>
      </div>
    </section>
  );
}
