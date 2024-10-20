"use client";

import { useCallback } from "react";
import { Button } from "@repo/ui/button";
import { authenticate } from "../lib/actions";

export function Hero({
  onMoreInfoClick,
}: {
  onMoreInfoClick?: () => void;
}): JSX.Element {
  const loginIn = useCallback(async () => {
    await authenticate().catch(console.error);
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-center text-[#F5ECD2]"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      <div className="h-screen bg-neutral-700 bg-opacity-60 flex items-center justify-center p-4 box-border">
        <div className="text-center gap-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-normal lg:leading-loose font-black">
            Everything is ready for your characters.
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl leading-snug md:leading-normal lg:leading-loose font-extrabold">
            Create your characters and record your sessions for free, with no
            limits.
          </h2>
          <Button
            className="text-[#F5ECD2] font-bold"
            onClick={loginIn}
            size="lg"
            variant="default"
          >
            Create a character
          </Button>

          <button
            className="mt-20 animate-bounce cursor-pointer flex items-center justify-center flex-col gap-1"
            onClick={onMoreInfoClick}
            type="button"
          >
            <p className="uppercase font-bold">More informations</p>
            <div className="w-[48px] h-[20px] border-solid border-l-[1.5rem] border-transparent border-r-[1.5rem] border-r-transparent border-t-[1.5rem] border-t-[#F5ECD2]" />
          </button>
        </div>
      </div>
    </div>
  );
}
