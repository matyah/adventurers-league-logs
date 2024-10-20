"use client";

import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/accordion";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import { Hero } from "./hero";

// TODO: Add a footer
// TODO: Add an animation each time a section is in view
// TODO: Make the page responsive

export function Landing(): JSX.Element {
  const moreInfoRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Hero
        onMoreInfoClick={() =>
          moreInfoRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      />
      <section
        className="mx-auto mt-16 p-10 flex gap-10 items-center justify-evenly box-border"
        id="what-is-adventurers-league-logs"
        ref={moreInfoRef}
      >
        <div className="w-1/2">
          <h2 className="text-2xl leading-normal uppercase text-primary-foreground font-bold">
            What is Adventurers league logs ?
          </h2>
          <h1 className="text-6xl leading-relaxed text-primary-foreground font-black">
            Play the character you want and effortlessly record your sessions in
            no time.
          </h1>
          <div className="border-2 border-primary-foreground my-8 rounded" />
          <p className="text-xl leading-relaxed">
            &quot;Adventure league logs&quot; lets you play however you like,
            whether virtually, in person, or both. Create and manage characters
            compatible with the Adventure League. Easily log your sessions
            without hassle, so you can focus on the fun and adventure.
          </p>
        </div>
        <div className="relative">
          <Image
            alt="forgotten realms"
            className="rounded w-[800px] h-[450px]"
            height={450}
            src="/forgotten-realms.jpg"
            width={800}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black" />
        </div>
      </section>
      <section
        className="mx-auto p-4 box-border flex gap-10 items-center justify-evenly mt-40"
        id="functionnalities and advantages"
      >
        <div className="relative">
          <Image
            alt="forgotten realms"
            className="rounded w-[800px] h-[450px]"
            height={450}
            src="/bard-writing.webp"
            width={800}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black" />
        </div>

        <div className="w-1/2">
          <h2 className="text-2xl leading-normal uppercase text-primary-foreground font-bold">
            Features and benefits
          </h2>
          <h1 className="text-6xl leading-relaxed text-primary-foreground font-black">
            A simple way to record your character&apos;s sessions.
          </h1>
          <Accordion className="mt-5" collapsible type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-5xl">
                Free and unlimited characters
              </AccordionTrigger>
              <AccordionContent className="text-3xl">
                characters are free, and you can create as many as you want.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-5xl">
                Record your sessions
              </AccordionTrigger>
              <AccordionContent className="text-3xl">
                Record your sessions in no time. With no limits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-5xl">
                Service Awards
              </AccordionTrigger>
              <AccordionContent className="text-3xl">
                Supports service awards out of the box.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section
        className="mx-auto p-4 box-border flex items-center justify-around gap-10 text-center mt-40"
        id="start-now"
      >
        <div className="gap-10 w-1/2">
          <h2 className="text-2xl leading-normal uppercase text-primary-foreground font-bold">
            Your character&apos;s adventure awaits to be recorded.
          </h2>
          <h1 className="text-6xl leading-relaxed text-primary-foreground font-black">
            Start now for free.
          </h1>
          <p>
            Create the hero you always dreamed of and record his achievements.
          </p>
          <Button className="mt-8">Create a character</Button>
        </div>
      </section>
      {/* Footer */}
    </>
  );
}
