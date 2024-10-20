import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    authorized: ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = Boolean(auth?.user);
      const isOnCharacters = nextUrl.pathname.startsWith("/characters");
      if (isOnCharacters) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthanticated users to home page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/characters", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
