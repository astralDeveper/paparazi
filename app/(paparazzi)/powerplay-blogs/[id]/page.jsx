"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Courseimg from "../../../_assets/home/Course.png";
import { client } from "@/sanity/lib/client";
import { groq, PortableText } from "next-sanity";
import { useParams } from "next/navigation";
const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await client.fetch(
          groq`*[_type == 'powerplayBlogs']{...}`,
          {},
          {
            next: { tags: ["powerplayBlogs"] },
          }
        );
        setData(blogsData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };
    fetchData();
  }, [params.id]);



  if (error) return <div>Error fetching data</div>;
  if (!data) return <div class="text-center flex justify-center items-center h-screen">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                    </div>



  const value = data.blogs[params.id]



  console.log(value);
  

  return (
    <>
    <section className="pb-20">
      <div className="w-[60%] max-md:w-[80%] mx-auto mt-10">
        <h1 className="text-center text-3xl max-sm:text-2xl font-semibold">
          {value.DetailsTopHeading}
        </h1>
        <p className="text-center mt-16">
          {value.DetailsTopPara}
        </p>
      </div>

      <div className="w-full max-w-screen-2xl px-6  mx-auto mt-10 ">
        <h2 className="text-2xl font-semibold max-sm:text-2xl w-full">
          {value.DetailsMainHeading}
        </h2>
        <div className="flex mt-10 gap-4 ">
          <PortableText className=" max-sm:text-sm w-full" value={value.DetailsMainPara1}/>
           
          
          <Image
            className="w-[600px] h-fit"
            src={Courseimg}
            alt="Course Image"
          />
        </div>
      </div>

      <div className="w-full max-w-screen-2xl px-6 mx-auto mt-2">
        <p className="leading-6 max-sm:text-sm">
          Mirroring and Matching: Subtly mirror the body language of others to
          build rapport and establish trust. This doesn't mean mimicking
          everything they do, but rather aligning your posture and gestures
          occasionally to create a sense of connection. By mastering these
          nonverbal cues, you can convey assertiveness without appearing
          aggressive. You'll come across as a confident and capable leader,
          ready to navigate any business discussion. Are You Smiling Too Much?
          Nothing grabs the attention of others better than a charming smile.
          However, it might surprise you to learn that you could be smiling too
          much. While a genuine smile can work wonders for approachability and
          building rapport, excessive smiling can diminish your authority and
          assertiveness. Here's why: Power Dynamics: A smile can sometimes be
          interpreted as a sign of submissiveness, particularly during
          negotiations. In a hierarchical dynamic, those with higher power tend
          to smile less frequently. Confidence and Control: Smiling too much can
          be perceived as a lack of confidence or uncertainty. This can be
          especially true for women in leadership roles, where assertive
          behavior is sometimes misconstrued as aggression. So How Much Should
          You Smile? The key is to find a balance. Here are some tips: The
          Genuine Grin: A warm, genuine smile can light up a room and make you
          seem approachable. Use this to your advantage during introductions and
          greetings. The Confident Smirk: A subtle smile or smirk can
          communicate confidence and control, particularly during discussions
          where you're presenting ideas or making proposals. Take a Breath and
          Slow Down The easiest way to tell when someone is nervous is that they
          talk too fast and their body language becomes erratic, with fast hand
          motions, blinking, stuttering, and other such tells. Before important
          corporate meetings or negotiations, take a breath and consciously slow
          down your mind and your body. Practice talking in the mirror if you
          have to. By talking slower, those around you will understand you
          better, and you'll give yourself a few seconds to think about what
          you're saying and choose your words better. Those extra fractions of
          seconds between words can make all the difference, and they even
          stress the gravity of your words, encouraging others to hang on to
          every word you say so you can hold their attention for a little
          longer. Practice Makes Perfect Mastering the art of effective body
          language isn't easy. It's a skill that will take time and deliberate
          effort to perfect. But if you work at it consciously, you'll be able
          to dominate any negotiation you find yourself in.
        </p>
      </div>
      </section>
    </>
  );
};

export default Page;