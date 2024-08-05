"use client"
import {
  RiHistoryLine,
  RiHome5Line,
  RiMentalHealthLine,
  RiRocket2Line,
  RiShieldStarLine,
} from "@remixicon/react";
import * as Tabs from "@radix-ui/react-tabs";
import { PortableText } from '@portabletext/react'
import { urlForImage } from "@/sanity/lib/utils";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";

export default  function About() {
  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    const fetchAboutData = async () => {
        const about = await client.fetch(groq`*[_type == 'About'][0]{...}`, {}, {
          next: { tags: ['About'] },
        });
        setAboutData(about);
      
    };

    fetchAboutData();
  }, [aboutData]);

  if (!aboutData) return null;

  return (
    <>
      <section className="max-w-screen-2xl mx-auto min-h-screen px-4 py-24">
        <Tabs.Root
          className="grid grid-cols-[25%_auto] grid-rows-[auto_1fr] gap-16 items-start max-xl:grid-cols-1"
          defaultValue="about-paparazzi"
        >
          <div className="">
            <Tabs.List className="flex flex-col items-start">
              <Tabs.Trigger
                className="p-4 w-full font-semibold text-2xl bg-[#ffffff] transition-all text-[#12151a] text-start rounded-t-xl data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb]"
                value="about-paparazzi"
              >
                {aboutData.tabs[0]}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-[#ebebeb] border p-4 w-full bg-[#ffffff] transition-all text-[#12151a] text-start flex items-center gap-2 data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb]"
                value="our-institutional-framework"
              >
                <RiHome5Line className="text-sm" />
                {aboutData.tabs[1]}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-[#ebebeb] border p-4 w-full bg-[#ffffff] transition-all text-[#12151a] text-start flex items-center gap-2 data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb]"
                value="history"
              >
                <RiHistoryLine className="text-sm" />
                {aboutData.tabs[2]}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-[#ebebeb] border p-4 w-full bg-[#ffffff] transition-all text-[#12151a] text-start flex items-center gap-2 data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb]"
                value="leadership-and-governance"
              >
                <RiMentalHealthLine className="text-sm" />
                {aboutData.tabs[3]}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="border-[#ebebeb] border p-4 w-full bg-[#ffffff] transition-all text-[#12151a] text-start flex items-center gap-2 data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb] rounded-b-xl"
                value="our-mission"
              >
                <RiRocket2Line className="text-sm" />
                {aboutData.tabs[4]}
              </Tabs.Trigger>
              {/* <Tabs.Trigger
                className="border-[#ebebeb] border p-4 w-full bg-[#ffffff] transition-all text-[#12151a] text-start flex items-center gap-2 data-[state=active]:bg-[#363636] data-[state=active]:text-[#ebebeb] rounded-b-xl"
                value="policies-terms-and-codes"
              >
                <RiShieldStarLine className="text-sm" />
                {aboutData.tabs[5]}
              </Tabs.Trigger> */}
            </Tabs.List>
          </div>
          <div className="row-span-full col-start-2 xl:mr-24 max-xl:row-span-1 max-xl:col-start-1">
            <Tabs.Content value="about-paparazzi">
              <div>
                <h2 className="text-3xl font-semibold">
                  {aboutData?.title}
                </h2>
                <h3 className="font-semibold text-2xl text-[#CECECE] mt-4">
                  {aboutData?.subheading}
                </h3>
                <div className="grid grid-cols-[40%_auto] max-xl:grid-cols-1 justify-start items-start mt-6 gap-6 ">
                  <img className="max-xl:w-full" src={urlForImage(aboutData?.image).url()} alt="old" />
                  <div>
                    <p>{aboutData?.Paragraph}</p>
                    <button className="bg-[#D2940A] hover:bg-[#b98d2d] transition-all p-4 rounded-lg text-sm font-semibold px-10 mt-6">
                      View All
                    </button>
                  </div>
                </div>

                <PortableText value={aboutData.tab1} components={portabletextComponents} />
              </div>
            </Tabs.Content>
            
            {/* Our institutional framework Tab */}
            <Tabs.Content value="our-institutional-framework">
              <PortableText value={aboutData.tab2} components={portabletextComponents} />
            </Tabs.Content>
            
            {/* History Tab */}
            <Tabs.Content value="history">
              <PortableText value={aboutData.tab3} components={portabletextComponents} />
            </Tabs.Content>
            
            {/* Leadership And Governance Tab */}
            <Tabs.Content value="leadership-and-governance">
              <PortableText value={aboutData.tab4} components={portabletextComponents} />
            </Tabs.Content>
            
            {/* Our Mission Tab */}
            <Tabs.Content value="our-mission">
              <PortableText value={aboutData.tab5} components={portabletextComponents} />
            </Tabs.Content>

            {/* Policies and Code Tab */}
            {/* <Tabs.Content value="policies-terms-and-codes">
              <PortableText value={aboutData.tab6} components={portabletextComponents} />
            </Tabs.Content> */}
          </div>

          {/* <div className="bg-[#363636]  rounded-xl p-8">
            <h6 className="font-semibold text-center ">Subscribe Newsletter</h6>
            <p className="text-center mt-6 mb-6 text-sm ">
              Get all the latest information on Events, Sales and Offers.
            </p>
            <div className="p-4 rounded-lg bg-white border border-[#ebebeb] text-[#717184] flex items-center gap-2">
              <RiMailLine className="text-sm" />
              <input
                type="email"
                placeholder="Email Address"
                className="outline-none w-full"
              />
            </div>
            <button className="bg-[#D2940A] hover:bg-[#b98d2d] transition-all p-4 rounded-lg text-xl font-semibold w-full mt-6">
              Subscribe
            </button>
          </div> */}
          <div></div>
        </Tabs.Root>
      </section>
    </>
  );
};

const AboutCards = (props) => {
  return (
    <div className='flex items-center gap-4'>
      <img src={urlForImage(props.Image).url()} alt="about-cards" className='w-28' />
      <div>
        <h2 className='text-2xl font-semibold mb-2'>{props.Name}</h2>
        <p>{props.Designation}</p>
      </div>
    </div>
  )
}


const portabletextComponents = {
  block: { 
    h2: ({children}) => <h2 className="text-3xl font-semibold mb-6 [&:not(:first-of-type)]:mt-8">{children}</h2>,
    normal: ({children}) => <p className="[&:not(:first-of-type)]:mt-4">{children}</p>
  } 
}