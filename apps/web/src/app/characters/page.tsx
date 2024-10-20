"use client";
import { signOut } from "next-auth/react";

export default function Characters(): JSX.Element {
  const logout = async () => {
    await signOut({
      redirectTo: "/",
    });
  };
  return (
    <main>
      <button
        onClick={() => {
          logout().catch(console.error);
        }}
        type="button"
      >
        logout
      </button>
    </main>
  );
}
