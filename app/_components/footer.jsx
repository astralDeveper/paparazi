import { client } from "@/sanity/lib/client";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTiktokFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";
import Link from "next/link";

export default async function Footer() {
  let footerData;

  try {
    footerData = await client.fetch(`*[_type == 'Footer'][0]{...}`);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div>
      <div className="bg-[#252525] w-full h-auto p-10 max-sm:p-4 ">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 justify-between items-center max-sm:grid-cols-1 flex-wrap gap-4">
            <div className="flex items-center gap-4 max-lg:flex-col">
              <div>
                <img src="/paprazzi-logo.png" alt="" />
              </div>
              <div>
                <h1 className="text-[32px] text-white font-[700]">Papparazi</h1>
              </div>
            </div>
            <ul className="flex items-center gap-4 h-[23px] justify-end max-sm:justify-center">

              <li className="text-white">
                  <a href={footerData ? footerData.socialMedia[0].instagramLink : '/'} target="_blank"><RiInstagramLine /></a>
              </li>

              <li className="text-white">
                  <a href={footerData ? footerData.socialMedia[0].linkedinLink : '/'} target="_blank"><RiLinkedinFill/></a>
              </li>

              <li className="text-white">
                  <a href={footerData ? footerData.socialMedia[0].tiktokLink : '/'} target="_blank"><RiTiktokFill /></a>
              </li>
            </ul>
          </div>

          <div className="bg-[#364067] mt-6">
            <hr className="w-full border-[#364067]" />
          </div>

          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] max-lg:grid-cols-2 *:max-w-96 gap-10 max-sm:gap-6 mt-16 mb-6">
            <div>
              <h2 className="text-white text-xl font-[700]">
                Company Info
              </h2>
              <ul className="flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%] ">
                {footerData.comapanyInfo.map((item) =>  <a key={item._key} href={item.route}><li className="cursor-pointer">{item.label}</li></a>)}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[22px] font-[700] ">Legal</h2>
              <ul className="flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]">
                {footerData.legal.map((item)=> <a key={item._key} href={item.url}><li className="cursor-pointer">{item.label}</li></a>)}
              </ul>
            </div>

            <div>
              <h2 className="text-white text-[22px] font-[700]">Features</h2>
              <ul className="flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]">
                {footerData.features.map((item)=> <a key={item._key} href={item.url}><li className="cursor-pointer">{item.label}</li></a>)}
              </ul>
            </div>

            <div className="">
              <h2 className="text-white text-[22px] font-[700]">Resources</h2>
              <ul className="flex flex-col gap-4 text-[#BDBDBD] text-[19px] font-[600] mt-[15%]">
                {footerData.resources.map((item)=> <a key={item._key} href={item.url}><li className="cursor-pointer">{item.label}</li></a>)}
              </ul>
            </div>

            <div className="max-lg:col-span-2">
              <div>
                <h2 className="text-white text-[22px] font-bold">
                  Company Info
                </h2>
              </div>
              <div className="flex items-center mt-[8%]">
                <div className="basis-3/5 max-w-96 flex-1">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="p-2 h-[50px] w-full outline-none px-3 text-black"
                  />
                </div>
                <div>
                  <button className="bg-[#FFA62B] h-[50px] p-2 text-white border-white">
                    subscribe
                  </button>
                </div>
              </div>
              <p className="text-[#E9E9E9] mt-3">{footerData.btnLine}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center p-4 text-white">
        <p>
          {footerData.copyRight}
        </p>
      </div>
    </div>
  );
}
