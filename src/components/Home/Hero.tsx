"use client";

import { useScroll } from "@/context/ScrollContext";
import Image from "next/image";
import CountUp from "react-countup";

function Hero() {
  const { heroRef } = useScroll() ?? {
    heroRef: null,
    scrollToHero: () => {},
    scrollToAbout: () => {},
  };

  return (
    <section
      ref={heroRef}
      className="relative flex w-full items-center justify-center min-h-screen"
    >
      <Image
        src="/images/hero/main-glow.svg"
        alt="lightbeam"
        width={200}
        height={200}
        className="absolute z-20 w-screen h-full animate-pulse-slow left-1/2 transform -translate-x-1/2"
      />
      <Image
        src="/images/hero/lightbeam.svg"
        alt="lightbeam"
        fill
        className="absolute z-20 scale-[3] md:scale-[2] origin-center animate-pulse-slow object-contain"
        priority={true}
        quality={100}
      />
      <Image
        src="/images/hero/token-hero.svg"
        alt="token"
        width={350}
        height={350}
        className="absolute h-auto -right-16 md:right-4 xl:right-10 top-4 md:top-10 z-10 size-[175px] md:size-[250px] xl:size-[350px]"
      />
      <Image
        src="/images/hero/rocket.svg"
        alt="rocket"
        width={500}
        height={500}
        className="absolute h-auto -left-20 md:left-0 top-80 md:top-1/2 z-10 size-[200px] md:size-[300px] xl:size-[500px]"
      />

      <div className="mb-32 lg:mb-0 text-center px-4 z-30">
        <h5 className="mb-4 text-lg md:text-xl lg:text-2xl font-outfit">
          From Unit Network
        </h5>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-outfit">
          Enter the Orbit
          <br />
          of{" "}
          <span
            style={{
              background: "linear-gradient(to right, #A46CFF, #684DFD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Visionaries
          </span>
        </h1>
        <p className="text-sm md:text-base xl:text-lg max-w-[375px] md:max-w-[1000px]">
          Secure Your Animal Astronaut NFT built upon the Unit Network
          <br className="hidden md:block" />
          and Elevate Your Position in the Universe
        </p>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-3 w-fit gap-6 md:gap-12 mt-8 md:mt-16 ml-0 md:ml-4 font-outfit">
            <div className="flex-col items-center w-fit">
              <CountUp start={100} end={365} delay={0}>
                {({ countUpRef }) => (
                  <span
                    className="font-bold text-3xl md:text-4xl"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
              <p className="text-xs md:text-sm">Astronauts</p>
            </div>
            <div className="flex-col items-center w-fit ml-3 md:ml-2">
              <CountUp start={100} end={365} delay={0}>
                {({ countUpRef }) => (
                  <span
                    className="font-bold text-3xl md:text-4xl"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
              <p className="text-xs md:text-sm text-start ml-3 md:ml-[14px]">
                Days
              </p>
            </div>
            <div className="flex-col items-center w-fit">
              <CountUp start={100} end={360} delay={0}>
                {({ countUpRef }) => (
                  <span
                    className="font-bold text-3xl md:text-4xl"
                    ref={countUpRef}
                  />
                )}
              </CountUp>
              <p className="text-xs md:text-sm">Elite Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
