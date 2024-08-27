"use client";

import { useState } from "react";
import SearchInput from "../ui/searchInput";
import Image from "next/image";
import { ArrowDown2 } from "iconsax-react";
import { animalsFilter } from "@/data/animalsFilter";
import { citiesFilter } from "@/data/citiesFilter";
import { allCollection } from "@/data/allCollection";
import CollectionCard from "../ui/collectionCard";

function Collection() {
  const [filteredCollection, setFilteredCollection] = useState(allCollection);

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (inputValue: string) => {
    setSearchText(inputValue);
  };

  const [activeOption, setActiveOption] = useState("All Categories");
  const [showAnimals, setShowAnimals] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const handleOptionClick = (optionName: string) => {
    setActiveOption(optionName);
  };

  return (
    <section className="z-20 relative max-w-screen-2xl min-h-screen w-full md:px-16 py-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
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
      <div className="col-span-1 relative z-30">
        <h1 className="font-outfit font-bold text-6xl mb-4">
          Animal
          <br />
          Astronauts
        </h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur. Lectus vel nisl justo non
          risus sit sit. Turpis eu congue dui sed orci.
        </p>
        <SearchInput
          placeholder="Search Animal, City"
          onInputChange={handleInputChange}
        />

        <div className="w-full mt-8">
          <div
            className={`flex justify-between items-center font-medium mb-4 cursor-pointer text-xl font-outfit ${
              activeOption === "All Categories" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleOptionClick("All Categories")}
          >
            <span>All Categories</span>
            <span>365</span>
          </div>
          <div className="mb-4">
            <div
              className="flex justify-between items-center text-gray-400 font-medium mb-2 cursor-pointer text-xl font-outfit"
              onClick={() => setShowAnimals(!showAnimals)}
            >
              <span>Animals</span>
              <ArrowDown2
                size="26"
                color="#6B7280"
                className={`mb-1 transition-transform duration-200 ${
                  showAnimals ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {showAnimals &&
              animalsFilter.map((animal) => (
                <div
                  key={animal.name}
                  className={`flex justify-between items-center py-2 cursor-pointer font-medium ${
                    activeOption === animal.type
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleOptionClick(animal.type)}
                >
                  <span className="flex justify-between w-full">
                    {animal.type} ({animal.name})
                    <span className="ml-auto pl-2">{animal.total}</span>
                  </span>
                </div>
              ))}
          </div>

          <div>
            <div
              className="flex justify-between items-center text-gray-400 font-medium mb-2 cursor-pointer text-xl font-outfit"
              onClick={() => setShowCities(!showCities)}
            >
              <span>Cities</span>
              <ArrowDown2
                size="26"
                color="#6B7280"
                className={`mb-1 transition-transform duration-200 ${
                  showCities ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {showCities &&
              citiesFilter.map((city) => (
                <div
                  key={city.name}
                  className={`flex justify-between items-center py-2 cursor-pointer font-medium ${
                    activeOption === city.name ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => handleOptionClick(city.name)}
                >
                  <span className="flex justify-between w-full">
                    {city.name}{" "}
                    <span className="ml-auto pl-2">{city.total}</span>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 relative z-30">
        {/* <CollectionCard
          image={allCollection[0].image}
          name={allCollection[0].name}
          city={allCollection[0].city}
          number={allCollection[0].number}
        /> */}
      </div>
    </section>
  );
}

export default Collection;
