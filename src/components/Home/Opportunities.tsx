"use client";

import useEmblaCarousel from "embla-carousel-react";
import OpportunitiesCard from "../ui/opportunitiesCard";

function Opportunities() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="z-20 relative max-w-screen-2xl w-full md:px-16 mt-40 mb-56">
      <h1 className="text-4xl lg:text-5xl font-bold mb-16 lg:mb-20 font-outfit text-center px-8 md:px-0 relative z-30">
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
              additionalInfo="Participate in leading blockchain and tech events where industry pioneers gather to shape the future"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-2"
              title="Stay Ahead of the Curve"
              description="Cutting-edge Conferences"
              additionalInfo="Engage in high-level discussions and gain insights from the most influential voices in technology and innovation"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-3"
              title="Global Networking"
              description="Expand Your Network Horizons"
              additionalInfo="Network with visionaries and leaders from around the world, and be part of the conversations that drive industry change"
            />
          </div>
          <div className="flex-shrink-0 px-4 lg:px-6">
            <OpportunitiesCard
              image="opportunities-4"
              title="Be Where it Matters"
              description="Exclusive Access to Key Events"
              additionalInfo="Attend select, high-impact events that are crucial to the evolution of blockchain and technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
