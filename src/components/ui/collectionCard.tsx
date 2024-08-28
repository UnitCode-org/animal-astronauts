import Image from "next/image";
import clsx from "clsx";

type CollectionCardProps = {
  image: string;
  name: string;
  city: string;
  number: Number;
  variant?: "default" | "large";
  className?: string;
};

function cn(...classes: (string | undefined)[]) {
  return clsx(classes);
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  name,
  city,
  number,
  variant = "default",
  className,
}) => {
  const baseClasses = "bg-unit-gray-20 rounded-2xl md:rounded-3xl";
  const sizeClasses =
    variant === "large" ? "w-56 sm:w-80 md:w-56 lg:w-72" : "w-full";

  return (
    <div className={cn(baseClasses, sizeClasses, className)}>
      <Image
        src={`/images/collection/${image}.webp`}
        alt={name}
        width={200}
        height={200}
        className="rounded-2xl sm:rounded-3xl w-full"
      />
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        <h3
          className={`text-left py-2 sm:pl-4 ${
            variant === "large" ? "text-sm pl-4" : "text-xs pl-2"
          } sm:text-base`}
        >
          {name} in {city}
        </h3>
        <div
          className={`rounded-full ${
            variant === "large"
              ? "px-4 mr-4 py-1.5 text-xs"
              : "px-2 mr-2 py-1 text-2xs"
          }
          sm:px-4 py-1 sm:py-1.5 bg-unit-purple-30 my-4 sm:mr-4 sm:text-xs`}
        >
          #{number.toString()}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
