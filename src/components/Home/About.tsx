"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Card from "../ui/card";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

function About() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  return (
    <div className="z-20 relative max-w-screen-2xl w-full -mt-32 lg:mt-0">
      <Image
        src="/images/decoration/stars.svg"
        alt="stars"
        layout="fill"
        objectFit="cover"
        className="w-full absolute z-20"
      />
      <div className="flex justify-center z-30 px-6 md:px-0">
        <div className="bg-unit-gray-30 p-8 md:p-12 rounded-2xl text-center w-full max-w-[850px] relative z-30 mx-6 md:mx-16 lg:mx-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-outfit mb-4">
            Join the Odyssey
          </h1>
          <p className="text-sm lg:text-base max-w-[500px] mb-12 md:mb-20 mx-auto">
            With only 360 unique Animal Astronaut NFTs, each representing a day
            of the year, securing yours today grants you exclusive access to the
            Astronaut Alliance Club.
          </p>
          <div className="embla md:hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-shrink-0 px-4">
                <Card
                  image="moe-new-york-3"
                  name="Moe in New York"
                  number="1"
                  variant="large"
                  className="relative z-30"
                />
              </div>
              <div className="flex-shrink-0 px-4">
                <Card
                  image="moe-new-york"
                  name="Moe in New York"
                  number="2"
                  variant="large"
                  className="relative z-30"
                />
              </div>
              <div className="flex-shrink-0 px-4">
                <Card
                  image="moe-new-york-2"
                  name="Moe in New York"
                  number="3"
                  variant="large"
                  className="relative z-30"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-x-6 lg:gap-x-8 justify-center relative -mx-20">
            <Card
              image="moe-new-york-3"
              name="Moe in New York"
              number="1"
              variant="large"
              className="relative z-30 -ml-12"
            />
            <Card
              image="moe-new-york"
              name="Moe in New York"
              number="2"
              variant="large"
              className="relative z-30 md:-translate-y-8"
            />
            <Card
              image="moe-new-york-2"
              name="Moe in New York"
              number="3"
              variant="large"
              className="relative z-30 -mr-12"
            />
          </div>
          <Link href="/collection">
            <Button
              variant="gradient"
              size="large"
              className="text-base lg:text-lg mt-12 font-outfit"
            >
              Find Your Astronauts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
