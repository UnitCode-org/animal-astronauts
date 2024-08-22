import Image from "next/image";

type OpportunitiesCardProps = {
  image: string;
  title: string;
  description: string;
};

const OpportunitiesCard: React.FC<OpportunitiesCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div>
      <Image
        src={`/images/opportunities/${image}.webp`}
        alt={title}
        width={200}
        height={200}
        className="rounded-3xl w-64 lg:w-11/12 mx-auto"
      />
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
