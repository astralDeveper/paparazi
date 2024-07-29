import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/utils';
import { groq } from 'next-sanity';

export default async function DiplomaticDiariesPage() {
  let data = null;

  try {
    data = await client.fetch(groq`*[_type == 'diplomaticDiaries'][0]{...}`, {}, {
      next: { tags: ['diplomaticDiaries'] }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!data) return null;

  return (
    <section className='max-w-screen-2xl mx-auto px-4 py-24'>
      <h1 className='text-4xl font-semibold text-center'>{data.pageHeading}</h1>

      <p className='text-center mt-4'>{data.paragraph}</p>

      <div className='mt-12 grid grid-cols-1 gap-10'>
        {data.diaries.map((item, index) => <Card key={index} image={item.image} subHeading={item.subHeading} heading={item.heading} description={item.description} />)}
      </div>
    </section>
  )
}

function Card(props) {
  return (
    <article className='bg-white p-6 rounded-xl flex gap-12 items-center max-xl:gap-8 max-lg:flex-wrap'>
      <div className='h-[300px] w-96 max-lg:w-full'>
        <img src={urlForImage(props.image).url()} className='rounded-xl grayscale min-w-72 max-sm:min-w-full w-full h-full object-cover' alt="image1" />
      </div>

      <div className='max-w-screen-lg'>
        <h3 className='p-1 px-6 border-2 font-semibold rounded-xl w-fit border-[#D2940A] text-[#D2940A]'>{props.subHeading}</h3>
        <h2 className='text-3xl mt-6 text-black font-semibold'>{props.heading}</h2>
        <p className='text-[#525151] mt-6'>{props.description}</p>
      </div>
    </article>
  );
}
