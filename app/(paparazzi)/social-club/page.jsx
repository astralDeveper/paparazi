import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/utils";

export default async function SocialClubPage() {
  let clubData = null;

  try {
    const club = await client.fetch(groq`*[_type == 'socialClub']{...}`, {}, {
      next: { tags: ['socialClub']}
    });
    console.log(club);
    clubData = club[0];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (!clubData) return null;

  return (
    <section className="p-24 max-w-screen-2xl mx-auto max-xl:p-10 max-sm:p-5">
      <div className="bg-black max-xl:p-12 p-20 max-sm:p-8">
        <div className="max-w-screen-lg">
          <h1 className="text-3xl font-bold leading-[45px] max-sm:text-xl">
            {clubData.title}
          </h1>
          <p className="mt-6 max-sm:text-sm">{clubData.paragraph}</p>
        </div>

        <div className="grid grid-cols-2 gap-20 max-sm:gap-14 mt-20 max-sm:mt-12 justify-items-center max-lg:grid-cols-1">
          <p>
            {clubData.paragraph2}
          </p>

          <div>
            <img width={500} height={400} className="object-cover w-full grayscale" src={urlForImage(clubData.image).url()} />
          </div>
        </div>
      </div>
    </section>
  );
}
