"use server";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export default async function createQuizResult(userId, score, username, email) {
  console.log(email);
  try {
    const doc = await client.fetch(`*[_type == 'quizResult' && userId == '${userId}'][0]{...}`);

    if (doc) {
      await client.createOrReplace({
        _type: "quizResult",
        _id: doc._id,
        username,
        email,
        userId,
        score,
      }, { token: token });
    } else {
      await client.create({
        _type: "quizResult",
        username,
        email,
        userId,
        score,
      }, { token: token });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
