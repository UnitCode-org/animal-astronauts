import Image from "next/image";
import clsx from "clsx";

type CollectionCardProps = {
  image: string;
  name: string;
  number: string;
  variant?: "default" | "large";
  className?: string;
};

function cn(...classes: (string | undefined)[]) {
  return clsx(classes);
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  image,
  name,
  number,
  variant = "default",
  className,
}) => {
  const baseClasses = "bg-unit-gray-20 rounded-3xl h-fit";
  const sizeClasses =
    variant === "large" ? "w-56 sm:w-80 md:w-56 lg:w-72" : "w-56";

  return (
    <div className={cn(baseClasses, sizeClasses, className)}>
      <Image
        src={`/images/collection/${image}.svg`}
        alt={name}
        width={200}
        height={200}
        className="rounded-3xl w-full"
      />
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-left py-2 pl-4 text-sm md:text-base">{name}</h3>
        <div className="rounded-full px-4 py-1.5 bg-unit-purple-30 m-4 text-xs">
          #{number}
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
