"use client";

import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PortableText } from '@portabletext/react';

// Define the serializers for PortableText if needed
const serializers = {
  types: {
    // Define serializers for different types of blocks if needed
  },
  marks: {
    // Define serializers for different marks if needed
  }
};

export default function Details() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(groq`*[_type == 'diplomaticDiaries'][0]{...}`, {}, {
          next: { tags: ['diplomaticDiaries'] }
        });
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [params.id]);


  

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  const value = data.diaries[params.id];
//   console.log(value);
  

  return (
    <div className='py-24 max-w-screen-2xl px-4 mx-auto'>
      <div>
        <div className='flex flex-col w-fit'>
          <h1 className='text-end'>({value.heading})</h1>
          <p className='text-3xl font-semibold border-b-2 border-[#D2940A] pb-2 max-sm:text-2xl transition-all'>{value.Heading2}</p>
        </div>
        <div>
          <p  className='my-8'>{value.description}</p>
        </div>
      </div>
      <div className='bg-white text-black mt-4 p-4 rounded-md'>
        <PortableText value={value.description2} components={serializers} />
      </div>
    </div>
  );
}
