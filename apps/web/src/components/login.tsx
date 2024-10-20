"use client";

import { authenticate } from "../lib/actions";

export function Login(): JSX.Element {
  return (
    <button
      onClick={() => {
        const handler = async (): Promise<void> => {
          await authenticate();
        };

        handler().catch(console.error);
      }}
      type="button"
    >
      Login
    </button>
  );
}
