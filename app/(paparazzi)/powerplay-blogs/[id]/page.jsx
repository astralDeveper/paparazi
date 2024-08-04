"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Courseimg from "../../../_assets/home/Course.png";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
  }, []);

  return (
    <>
      <div className="w-[60%] max-md:w-[80%] mx-auto mt-10">
        <h1 className="text-center text-3xl max-sm:text-2xl font-semibold">
          How Body Language Can Give You the Upper Hand in Corporate Meetings
        </h1>
        <p className="text-center mt-16">
          Not many people know it, but body language is the secret weapon of
          many great leaders. The subtle nuances of body language can strongly
          influence how other people perceive you, and how they react to you. In
          business negotiations, these subtle nuances can turn the tide in your
          favor and give you the upper hand. In this article, we'll teach you
          everything you need to know to master your body language and use it to
          your advantage in your professional life.
        </p>
      </div>

      <div className="w-[80%] max-md:w-[90%]  mx-auto mt-10 ">
        <h2 className="text-2xl font-semibold max-sm:text-2xl">
          The Art of Assertiveness
        </h2>
        <div className="flex max-md:flex-col items-start mt-10 gap-4">
          <p className="leading-6">
            In 2007, Professor Daniel Ames (PhD, Columbia Business School) and
            Professor Francis Flynn (PhD, Stanford Graduate School of Business)
            conducted a study on the behavior of successful leaders. Their
            findings suggested that even the most successful corporate leaders
            struggle with assertiveness, either being over or under-assertive at
            the wrong moments. So, how can you find that sweet spot of confident
            assertiveness? Body language is key. Here are some tips for
            cultivating assertive body language in corporate meetings: Maintain
            good posture. Sit up straight with your shoulders back, but avoid
            stiffness. This projects confidence and makes you appear engaged.
            Slouching or hunching communicates disinterest or nervousness. Make
            eye contact, but strike a balance. Look directly at the speaker to
            show you're paying attention, but don't stare at them for too long.
            Shift your gaze periodically to different participants to
            acknowledge everyone in the room. Keep your arms uncrossed, and
            avoid fidgeting. Open gestures, like palms facing up, showcase
            openness to ideas and encourage collaboration. The Nod of
            Acknowledgement: Use nodding to show you're actively listening and
            following the conversation. However, avoid excessive nodding that
            might seem disingenuous.
          </p>
          <Image
            className="w-[600px] max-md:w-[500px] max-md:self-center max-md:mt-4 max-md:mb-4"
            src={Courseimg}
            alt="Course Image"
          />
        </div>
      </div>

      <div className="w-[80%] max-md:w-[90%] mx-auto mt-2">
        <p className="leading-6">
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
    </>
  );
};

export default Page;