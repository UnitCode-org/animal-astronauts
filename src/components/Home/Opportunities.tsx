"use client";

import useEmblaCarousel from "embla-carousel-react";
import OpportunitiesCard from "../ui/opportunitiesCard";
import Image from "next/image";

function Opportunities() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="z-20 relative max-w-screen-2xl w-full md:px-16 my-36">
      <Image
        src="/images/decoration/stars.svg"
        alt="stars"
        layout="responsive"
        width={100}
        height={30}
        objectFit="cover"
        className="w-full absolute z-20 -mt-36"
      />

      <h1 className="text-4xl lg:text-5xl font-bold mb-20 font-outfit text-center px-8 md:px-0 relative z-30">
        A World of Exclusive Opportunities
      </h1>
      <div
        className="embla 3xl:flex 3xl:justify-center relative z-30"
        ref={emblaRef}
      >
        <div className="flex">
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-1"
              title="Connect and Innovate"
              description="Exclusive Industry Events"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-2"
              title="Stay Ahead of the Curve"
              description="Cutting-edge Conferences"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-3"
              title="Global Networking"
              description="Expand Your Network Horizons"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-4"
              title="Be Where it Matters"
              description="Exclusive Access to Key Events"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
