'use client'
import { client } from "@/sanity/lib/client";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

export default function ContactUs() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      const contact = await client.fetch(groq`*[_type == 'Contact'][0]{...}`, {}, {
        next: { tags: ['Contact'] },
      });
      setContactData(contact);
    };

    fetchContactData();
  }, []); // Empty dependency array to fetch data only once

  if (!contactData) return null;

  return (
    <>
      <section className="pb-20">
        <div className="max-w-screen-2xl mx-auto py-24 px-6">
          <h1 className="text-3xl max-md:text-2xl font-semibold">{contactData.heading1}</h1>
          <p className="mt-4 italic">{contactData.line1}</p>
          <p className="mt-4 text-2xl max-md:text-xl">{contactData.paragraph1}</p>

          <h2 className="text-2xl max-md:text-xl font-semibold mt-6">{contactData.line2}</h2>
        </div>

        <div className="bg-white text-black w-full">
          <p className="max-w-screen-2xl mx-auto text-2xl max-md:text-xl p-4 font-semibold">{contactData.callus}</p>
        </div>

        <div className="max-w-screen-2xl mx-auto py-18 px-6">
          <p className="text-3xl font-semibold mt-8 max-md:text-2xl">{contactData.Details}</p>

          <div className="grid grid-cols-1 justify-items-center mt-16">
            <div className="flex flex-col gap-6">
              {contactData.icons.map((icon, index) => (
                <p key={icon._key} className="flex items-center gap-4 justify-start">
                  {icon.iconname === 'MapPin' && <RiMapPinLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full" />}
                  {icon.iconname === 'Phone' && <RiPhoneLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full" />}
                  {icon.iconname === 'Mail' && <RiMailLine className="bg-[#D2940A] p-2 text-black size-10 rounded-full" />}
                  {icon.iconline}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}