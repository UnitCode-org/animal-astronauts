"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { animalsFilter } from "@/data/animalsFilter";
import { citiesFilter } from "@/data/citiesFilter";
import { allCollection } from "@/data/allCollection";
import Filters from "./Filters";
import CollectionList from "./CollectionList";
import "@/styles/scrollbar.css";

function Collection() {
  const [filteredCollection, setFilteredCollection] = useState(allCollection);

  const [searchText, setSearchText] = useState("");

  const [activeOption, setActiveOption] = useState("All Categories");

  const handleInputChange = (inputValue: string) => {
    setSearchText(inputValue);
  };

  useEffect(() => {
    let filtered = allCollection;

    if (activeOption !== "All Categories") {
      filtered = filtered.filter((item) => {
        if (animalsFilter.some((animal) => animal.type === activeOption)) {
          return item.type === activeOption;
        } else if (citiesFilter.some((city) => city.name === activeOption)) {
          return item.city === activeOption;
        }
        return false;
      });
    }

    if (searchText) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.city.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredCollection(filtered);
  }, [searchText, activeOption]);

  return (
    <section className="z-20 relative max-w-screen-2xl w-full px-4 xs:px-6 md:px-16 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-20">
      <Image
        src="/images/decoration/glow.svg"
        alt="glow"
        width={500}
        height={500}
        className="absolute z-20 -left-64 top-2 hidden md:block animate-pulse-slow"
      />
      <Image
        src="/images/decoration/glow.svg"
        alt="glow"
        width={800}
        height={800}
        className="absolute z-20 -right-96 top-72 hidden md:block animate-pulse-slow"
      />
      <div className="col-span-1 relative z-30 h-fit">
        <Filters
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="col-span-1 lg:col-span-2 relative z-30 lg:max-h-screen lg:overflow-y-scroll overflow-x-clip lg:pr-6 scrollbar-gradient">
        <CollectionList filteredCollection={filteredCollection} />
      </div>
    </section>
  );
}

export default Collection;
