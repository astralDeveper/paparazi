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
    <div className='w-[90%] mx-auto mt-10'>
      <h1 className='text-3xl font-semibold'>{termsData.heading}</h1>
      <h5 className='mt-6 mb-6'>{termsData.headerline}</h5>
      <PortableText value={termsData.paragraph} />
    </div>
  );
}
