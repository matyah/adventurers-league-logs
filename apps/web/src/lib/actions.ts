"use server";

import { AuthError } from "next-auth";
import { signIn } from "../auth";

export async function authenticate(): Promise<
  "Invalid credentials." | "Something went wrong." | undefined
> {
  try {
    await signIn("discord");
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw e;
  }
}
