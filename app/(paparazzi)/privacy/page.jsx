'use client';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';

const customComponents = {
  types: {},
  marks: {},
  block: {
    h1: ({ children }) => <h1 className="font-bold text-2xl mt-4 mb-2">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-xl mt-4 mb-2">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-lg mt-4 mb-2">{children}</h3>,
    normal: ({ children }) => <p className="mb-2">{children}</p>,
  },
  list: {},
  listItem: {},
};

export default function PrivacyPolicy() {
  const [termsData, setTermsData] = useState(null);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const terms = await client.fetch(groq`*[_type == 'privacy'][0]{...}`);
        setTermsData(terms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTermsData();
  }, []);

  if (!termsData) return null;

  return (
    <div className='w-[90%] mx-auto mt-10 pb-20'>
      <h1 className='text-3xl font-semibold'>{termsData.heading}</h1>
      <h5 className='mt-6 mb-6'>{termsData.headerline}</h5>
      <PortableText value={termsData.paragraph} components={customComponents} />
    </div>
  );
}
