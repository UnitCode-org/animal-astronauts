"use client";

import { useState, useEffect } from "react";
import { SearchNormal1 } from "iconsax-react";

interface SearchInputProps {
  placeholder: string;
  onInputChange: (inputValue: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onInputChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onInputChange(value);
  };

  useEffect(() => {
    if (inputValue) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  }, [inputValue]);

  return (
    <div className="relative flex items-center border-b pb-2 border-white">
      <SearchNormal1 size="24" color="#ffffff" className="mr-4" />
      <div className="relative w-full">
        <input
          id="search"
          name="search"
          type="text"
          className={`w-full bg-transparent text-white outline-none border-none placeholder-transparent transition-all duration-300 h-8 ${
            isFocused ? "pt-2" : "pt-0"
          }`}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (!inputValue) {
              setIsFocused(false);
            }
          }}
          onChange={handleChange}
          value={inputValue}
        />
        <label
          className={`absolute left-0 text-white transition-all duration-300 pointer-events-none ease-in-out ${
            isFocused
              ? "text-xs -top-2.5"
              : "text-base top-1/2 transform -translate-y-1/2"
          }`}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
};

export default SearchInput;
