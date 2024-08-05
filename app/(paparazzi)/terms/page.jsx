"use client"
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react'

export default function TermsAndConditions() {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const terms = await client.fetch(groq`*[_type == 'terms'][0]{...}`, {}, {
          next: { tags: ['Terms'] },
        });
        setTermsData(terms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTermsData();
  }, []);
console.log(termsData);

  if (!termsData) return null;

  return (
    <div className='w-[90%] mx-auto mt-10 pb-20'>
      <h1 className='text-3xl font-semibold'>{termsData.heading}</h1>
      <h5 className='mt-6 mb-6'>{termsData.headerline}</h5>
      <PortableText value={termsData.paragraph} components={portabletextComponents}/>
      
    </div>
  );
}




const portabletextComponents = {
  block: { 
    h3: ({children}) => <h3 style={{ whiteSpace: 'pre-wrap', margin: '20px 0' }} className="text-2xl font-semibold">{children}</h3>,
    h4: ({children}) => <h4 style={{ whiteSpace: 'pre-wrap', margin: '20px 0' }} className="text-xl font-semibold">{children}</h4>,
    h5: ({children}) => <h5 style={{ whiteSpace: 'pre-wrap', margin: '20px 0' }} className="text-lg font-semibold">{children}</h5>,
    // normal: ({children}) => <p style={{ whiteSpace: 'pre-wrap', margin: '20px 20px', }} className='min-[600px]:ml-[50rem]'>{children}</p>,
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,


  } 
}