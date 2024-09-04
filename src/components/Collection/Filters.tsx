"use client";

import { useState } from "react";
import { ArrowDown2 } from "iconsax-react";
import SearchInput from "../ui/searchInput";
import { animalsFilter } from "@/data/animalsFilter";
import { citiesFilter } from "@/data/citiesFilter";
import "@/styles/scrollbar.css";

interface FiltersProps {
  activeOption: string;
  setActiveOption: (option: string) => void;
  handleInputChange: (inputValue: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  activeOption,
  setActiveOption,
  handleInputChange,
}) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAnimals, setShowAnimals] = useState(false);
  const [showCities, setShowCities] = useState(false);

  return (
    <>
      <h1 className="font-outfit font-bold text-5xl xl:text-6xl mb-4 hidden lg:block">
        Animal
        <br />
        Astronauts
      </h1>
      <p className="mb-8 leading-relaxed hidden lg:block">
        365 Animal Astronauts for 365 days of the year. Each Animal Astronaut is
        individually designed, representing 12 unique animals and paired with 60
        iconic cities from around the world. No two designs are alike, explore
        this limited collection and find the one for you.
      </p>
      <div className="flex flex-col-reverse lg:flex-col gap-6 lg:gap-8">
        <SearchInput
          placeholder="Search Animal, City"
          onInputChange={handleInputChange}
        />
        <div className="lg:hidden px-5 py-3 bg-unit-gray-20 rounded-3xl max-h-[306px] overflow-y-auto hide-scrollbar">
          <div
            className={`flex justify-between items-center font-medium cursor-pointer font-outfit ${
              activeOption === "All Categories" ? "text-white" : "text-gray-400"
            }`}
          >
            <span onClick={() => setActiveOption("All Categories")}>
              All Categories
            </span>
            <ArrowDown2
              size="26"
              color={activeOption === "All Categories" ? "#ffffff" : "#6B7280"}
              className={`transition-transform duration-200 ${
                showAllCategories ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setShowAllCategories(!showAllCategories)}
            />
          </div>
          {showAllCategories && (
            <>
              <div className="my-4">
                <div
                  className="flex justify-between items-center text-gray-400 font-medium mb-2 cursor-pointer font-outfit"
                  onClick={() => setShowAnimals(!showAnimals)}
                >
                  <span>Animals</span>
                  <ArrowDown2
                    size="26"
                    color="#6B7280"
                    className={`transition-transform duration-200 ${
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
                      onClick={() => setActiveOption(animal.type)}
                    >
                      <span className="flex justify-between w-full text-sm mr-1">
                        {animal.type} ({animal.name})
                        <span className="ml-auto pl-2">{animal.total}</span>
                      </span>
                    </div>
                  ))}
              </div>
              <div className="mb-4">
                <div
                  className="flex justify-between items-center text-gray-400 font-medium mb-2 cursor-pointer font-outfit"
                  onClick={() => setShowCities(!showCities)}
                >
                  <span>Cities</span>
                  <ArrowDown2
                    size="26"
                    color="#6B7280"
                    className={`transition-transform duration-200 ${
                      showCities ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {showCities &&
                  citiesFilter.map((city) => (
                    <div
                      key={city.name}
                      className={`flex justify-between items-center py-2 cursor-pointer font-medium ${
                        activeOption === city.name
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                      onClick={() => setActiveOption(city.name)}
                    >
                      <span className="flex justify-between w-full text-sm mr-1">
                        {city.name}
                        <span className="ml-auto pl-2">{city.total}</span>
                      </span>
                    </div>
                  ))}
              </div>
              <div
                className={`flex justify-between items-center font-medium cursor-pointer font-outfit ${
                  activeOption === "Limited Edition"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                <span onClick={() => setActiveOption("Limited Edition")}>
                  Limited Edition
                </span>
                <span className="mr-1">5</span>
              </div>
            </>
          )}
        </div>

        <div className="hidden lg:block">
          <div
            className={`flex justify-between items-center font-medium mb-4 cursor-pointer text-xl font-outfit ${
              activeOption === "All Categories" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveOption("All Categories")}
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
                  onClick={() => setActiveOption(animal.type)}
                >
                  <span className="flex justify-between w-full">
                    {animal.type} ({animal.name})
                    <span className="ml-auto pl-2">{animal.total}</span>
                  </span>
                </div>
              ))}
          </div>
          <div className="mb-4">
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
                  onClick={() => setActiveOption(city.name)}
                >
                  <span className="flex justify-between w-full">
                    {city.name}
                    <span className="ml-auto pl-2">{city.total}</span>
                  </span>
                </div>
              ))}
          </div>
          <div
            className={`flex justify-between items-center font-medium mb-4 cursor-pointer text-xl font-outfit ${
              activeOption === "Limited Edition"
                ? "text-white"
                : "text-gray-400"
            }`}
            onClick={() => setActiveOption("Limited Edition")}
          >
            <span>Limited Edition</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
