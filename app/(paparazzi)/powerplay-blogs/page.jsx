'use client'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';
import { useEffect, useState } from 'react';

export default function PowerPlayBlogsPage() {
  const [data, setData] = useState(null);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsdata = await client.fetch(groq`*[_type == 'powerplayBlogs'][0]{...}`, {}, {
          next: { tags: ['powerplayBlogs']}
        });
        setData(blogsdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }

    }
    
    fetchData();
  }, []);
  
  if (!data) return null;


  return (
    <section className='max-w-screen-2xl mx-auto px-6 py-24'>
      <h1 className='text-4xl font-semibold text-center'>{data.pageHeading}</h1>

      <p className='text-center mt-4'>{data.paragraph}</p>

      <div className='mt-10 grid grid-cols-4 gap-10 justify-center max-xl:grid-cols-2 max-sm:grid-cols-1 justify-items-center max-md:gap-6'>
        {data ? data.blogs.map((item, index) => <a key={index} href={`/powerplay-blogs/${index}`}> <Card key={index} image={item.image} title={item.title} excerpt={item.excerpt} category={item.category} /></a>) : <div></div>}
      </div>
    </section>
  )
}

function Card(props) {
  return (
    <article className='bg-white  w-full rounded'>
      <div className='h-[250px] w-full'>
        <img src={urlForImage(props.image).url()} alt="card" className='w-full h-full object-cover grayscale rounded-t' />
      </div>

      <div className='p-4 pb-8'>
        <h5 className='text-[#D2940A] bg-[#d2930a35] text-sm w-fit p-1 px-2'>{props.category}</h5>
        <h3 className='text-black font-semibold text-lg mt-4'>{props.title.slice(0,25)}...</h3>
        <p className='text-[#696969] text-xs mt-2'>{props.excerpt.slice(0, 120)}... <span className='font-bold'> Read more</span></p>
      </div>
    </article>
  );
}
