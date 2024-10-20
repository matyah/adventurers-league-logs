import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import { authConfig } from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [Discord],
});
