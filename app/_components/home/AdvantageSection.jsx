import React from "react";
import circle from "../../_assets/home/circle.png";
import circle1 from "../../_assets/home/circle2.png";
import Image from "next/image";

const AdvantageSection = (props) => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-6 py-14">
        <div className="bg-[#64646498] rounded-r-2xl rounded-b-2xl rounded-tl-[8rem] relative ">
          <Image
            src={circle}
            width={200}
            height={200}
            className="absolute top-0 right-0 z-0 opacity-20 max-md:w-44"
          />
          <div className="p-12 text-center max-sm:p-6">
            <h2 className="text-4xl font-semibold max-md:text-3xl max-sm:text-xl max-sm:px-8">
              {props.head}
            </h2>
            <p className="my-8 text-2xl max-md:text-xl max-sm:text-sm ">
              {props.para}
            </p>
            <p className="text-[#D2940A] text-2xl max-md:text-xl max-sm:text-sm">
              {props.smallPara}
            </p>
          </div>
          <Image
            src={circle1}
            width={400}
            height={400}
            className="absolute bottom-0 left-7 opacity-20 z-0 max-md:w-52"
          />
        </div>
      </section>
    </>
  );
};

export default AdvantageSection;
