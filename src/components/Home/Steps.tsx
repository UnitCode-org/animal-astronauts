import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function Steps() {
  return (
    <section className="z-20 relative max-w-screen-2xl w-full px-8 md:px-16 mt-44">
      <Image
        src="/images/decoration/glow.svg"
        alt="glow"
        width={500}
        height={500}
        className="absolute z-30 -left-56 hidden md:block animate-pulse-slow"
      />
      <Image
        src="/images/decoration/glow.svg"
        alt="glow"
        width={800}
        height={800}
        className="absolute z-30 -right-96 -bottom-56 hidden md:block animate-pulse-slow"
      />

      <div className="relative z-30">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-outfit text-center">
          Step into the Inner Circle <br className="hidden lg:block" />
          of the{" "}
          <span
            style={{
              background: "linear-gradient(to right, #A46CFF, #684DFD)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            $AA Club
          </span>
        </h1>
        <p className="text-center max-w-[600px] mx-auto mb-12 lg:mb-24 text-unit-gray-10 text-sm lg:text-base">
          Limited to 360 Visionaries. Join a community of forward-thinkers
          shaping the future. Gain exclusive access to high-level discussions,
          networking events, conferences, and growth opportunities
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-2 mb-20 lg:mr-[240px]">
          <Image
            src="/images/steps/step-1.webp"
            alt="step1"
            width={250}
            height={250}
          />
          <div className="flex-col items-start max-w-[500px]">
            <h4 className="mb-4 text-4xl font-medium font-outfit text-center lg:text-start">
              Exclusive Membership
            </h4>
            <p className="text-unit-gray-10 text-center lg:text-start text-sm lg:text-base">
              <span className="font-semibold">
                You&apos;re not just joining a club—
              </span>
              you&apos;re becoming part of a close-knit group of 360 individuals
              who are redefining what&apos;s possible. This is your chance to
              connect with like-minded pioneers, engage in high-level
              conversations, and unlock doors to opportunities that can propel
              you to new heights.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-x-2 mb-20 lg:ml-[240px]">
          <div className="flex flex-col items-center lg:items-end max-w-[500px]">
            <h4 className="mb-4 text-4xl font-medium font-outfit text-center lg:text-end">
              Membership Requirements
            </h4>
            <p className="text-center lg:text-end text-sm lg:text-base text-unit-gray-10">
              To embark on this journey, you&apos;ll need to hold $1,000 worth
              of UNIT Tokens on the Unit Network App. These tokens are more than
              just an asset—they are your entry pass into a world where
              innovation meets exclusivity.
            </p>
            <Link href="https://unit.network/" target="_blank">
              <Button variant="gradient" className="mt-4">
                Unit Network
              </Button>
            </Link>
          </div>
          <Image
            src="/images/steps/step-2.webp"
            alt="step1"
            width={250}
            height={250}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-2 lg:mr-[240px]">
          <Image
            src="/images/steps/step-3.webp"
            alt="step1"
            width={250}
            height={250}
          />
          <div className="flex-col items-start max-w-[500px] mt-6 lg:mt-0">
            <h4 className="mb-4 text-4xl font-medium font-outfit text-center lg:text-start">
              Application Process
            </h4>
            <p className="text-center lg:text-start max-w-[600px] mx-auto mb-12xs lg:mb-24 text-unit-gray-10 text-sm lg:text-base">
              We believe in curating a community that aligns with our vision.
              After securing your tokens, you are invited to complete a brief,
              10-question application. This is our way of getting to know you,
              ensuring that our values align, and setting the stage for a
              fruitful partnership within the Astronaut Alliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
