"use client";
import { Button } from "@repo/ui/button";
import { useCallback } from "react";
import { authenticate } from "../lib/actions";

export function CreateCharacterButton(): JSX.Element {
  const loginIn = useCallback(async () => {
    await authenticate().catch(console.error);
  }, []);

  return (
    <Button
      className="text-[#F5ECD2] font-bold mt-10"
      onClick={loginIn}
      size="lg"
      variant="default"
    >
      Create a character
    </Button>
  );
}
