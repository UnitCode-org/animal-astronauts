import CollectionCard from "../ui/collectionCard";
import { Collection } from "@/types/Collection";

interface CollectionListProps {
  filteredCollection: Collection[];
}

const CollectionList: React.FC<CollectionListProps> = ({
  filteredCollection,
}) => {
  return (
    <div>
      {filteredCollection.length === 0 ? (
        <p className="text-center text-gray-400 mb-64 text-base lg:text-xl">
          Search result not found
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
          {filteredCollection.map((item) => (
            <CollectionCard
              key={item.number}
              image={item.image}
              name={item.name}
              city={item.city}
              number={item.number}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionList;
