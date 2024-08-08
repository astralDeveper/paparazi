"use client"
import { groq, PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/utils";
import { useEffect, useState } from "react";
// Define the serializers for PortableText if needed
const serializers = {
  types: {
    // Define serializers for different types of blocks if needed
  },
  marks: {
    // Define serializers for different marks if needed
  },
  list:{},
  listItem:{}
};
export default function SocialClubPage() {
  const [clubData, setClubData] = useState(null);
  useEffect(() => {
    const fetchClubData = async () => {
        const about = await client.fetch(groq`*[_type == 'socialClub'][0]{...}`, {}, {
          next: { tags: ['socialClub'] },
        });
        setClubData(about);
      
    };

    fetchClubData();
  }, [clubData]);
  // console.log(clubData);
  

  if (!clubData) return null;

  return (
    <section className="p-24 py-10 max-w-screen-2xl mx-auto max-xl:p-10 max-sm:p-4">
      <div className="bg-black max-xl:p-12 p-20 max-sm:p-6">
        <div className="max-w-screen-lg">
          <h1 className="text-3xl font-bold leading-[45px] max-sm:text-xl mb-4">
            {clubData.title}
          </h1>
          {/* <p className="mt-6 max-sm:text-sm">{clubData.paragraph}</p> */}
        </div>

        <div className="mb-4">
          <p className="leading-[1.7rem] max-md:w-[96%] max-2xl:w-[90%] w-full text-justify">
            {clubData.paragraph2}
          </p>

          
        </div>
        <div className="leading-[1.7rem] max-md:w-[96%] max-2xl:w-[90%] w-full  text-justify">
          <PortableText value={clubData.description} components={portabletextComponents}/>
        </div>
      </div>
    </section>
  );
}
const portabletextComponents = {
  block: { 
    h2: ({children}) => <h2 className="text-3xl font-semibold mb-6 [&:not(:first-of-type)]:mt-8">{children}</h2>,
    h4: ({children}) => <h2 className="text-xl font-semibold mb-6 inline text-[#D2940A] [&:not(:first-of-type)]:mt-8">{children}</h2>,
    normal: ({children}) => <p className="[&:not(:first-of-type)]:mt-4">{children}</p>
  } 
}
