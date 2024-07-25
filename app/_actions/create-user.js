"use server";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

export default async function createUser(id, username, email) {
  try {
    await client.create(
      {
        _type: "users",
        _id: id,
        username,
        email,
      },
      { token: token }
    );
  } catch (error) {
    console.error("Error creating data:", error);
  }
}
