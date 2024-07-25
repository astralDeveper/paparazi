import { urlForImage } from "@/sanity/lib/utils";

export default function Blogs({ data }) {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-24">
      <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center">
        {data.sec1.map((item, i) => (
          <article key={i} className="p-4 w-full max-w-md">
            <div className="rounded-lg overflow-hidden bg-white px-10 pt-10">
              <img alt="content" className="object-cover w-full" src={urlForImage(item).url()} />
            </div>
            <div className='px-10'>
              <h2 className="text-xl max-sm:text-lg font-medium mt-6">{item.cardheader}</h2>
              <p className="leading-relaxed mt-2 max-sm:text-sm">{item.cardparagraph}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto max-w-max mt-12">
        <button className="bg-[#D2940A] px-6 py-2 rounded text-white">{data.sec1button}</button>
      </div>
    </section>
  );
}