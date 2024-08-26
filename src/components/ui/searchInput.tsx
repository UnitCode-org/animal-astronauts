"use client";

import { useState } from "react";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  return (
    <div className="relative flex items-center border-b pb-2 border-white">
      <SearchNormal1 size="24" color="#ffffff" className="mr-4" />
      <div className="relative w-full">
        <input
          type="text"
          className={`w-full bg-transparent text-white outline-none border-none placeholder-transparent transition-all duration-300 h-8 ${
            isFocused ? "pt-2" : "pt-0"
          }`}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
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
