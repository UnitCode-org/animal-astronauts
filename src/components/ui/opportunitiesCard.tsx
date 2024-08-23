"use client";

import Image from "next/image";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

type OpportunitiesCardProps = {
  image: string;
  title: string;
  description: string;
  additionalInfo: string;
};

const OpportunitiesCard: React.FC<OpportunitiesCardProps> = ({
  image,
  title,
  description,
  additionalInfo,
}) => {
  const [flip, setFlip] = useState(false);

  return (
    <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <Image
          src={`/images/opportunities/${image}.webp`}
          alt={title}
          width={200}
          height={200}
          className="rounded-3xl w-64 lg:w-[21.5rem] mx-auto"
        />
        <div className="rounded-3xl bg-gradient-to-r from-[#A46CFF] via-[#A46CFF] via-15% to-[#5649FF] mx-auto w-64 lg:w-[21.5rem] aspect-[82/75] p-8 flex items-center justify-center text-base lg:text-lg">
          {additionalInfo}
        </div>
      </ReactCardFlip>

      <div className="bg-unit-gray-20 rounded-3xl pt-14 pb-8 px-6 -mt-16 w-72 lg:w-96">
        <p className="text-unit-gray-10 text-left mt-8 mb-1 text-sm md:text-base">
          {description}
        </p>
        <h3 className="text-left text-lg md:text-xl lg:text-2xl font-medium font-outfit">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
