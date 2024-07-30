import { urlForImage } from "@/sanity/lib/utils";

const SingersSection = ({ data }) => {
  return (
    <div className="min-h-full bg-white my-20">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 justify-items-center">
        <div className="flex flex-col justify-center md:pl-20 md:gap-10 gap-4 p-10">
          <h3 className="text-[#000000] md:text-5xl text-3xl font-bold capitalize max-w-lg">
            {data.sec6}
          </h3>
          <p className="text-[#343434] md:text-base text-sm max-w-md">
            {data.sec6paragraph}
          </p>
          <button className="text-white px-4 py-4 rounded-xl bg-[#D2940A] text-sm w-52">
            {data.sec6button}
          </button>
        </div>
        <div className="bg-red-200 w-full">
          <img className="h-full w-full object-cover grayscale" src={urlForImage(data.sec6image).url()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SingersSection;
