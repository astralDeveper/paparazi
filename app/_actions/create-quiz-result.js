"use server";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export async function createQuizResult(data) {
  try {
    await client.create({
      _type: "quizResult",
      ...data,
    }, { token: token });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function updateQuizResult(id, data) {
  try {
    await client.createOrReplace({
      _type: "quizResult",
      _id: id,
      ...data,
    }, { token: token });
  } catch (error) {
    console.error('Error updating document');
  }
}