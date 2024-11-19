"use client";
import React, { useState, useEffect, useRef } from "react";
import { BiSearch, BiX } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface SearchResult {
  name: string;
  link: string;
}

interface SearchBarProps {
  items: SearchResult[];
}

const SearchBar: React.FC<SearchBarProps> = ({ items }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Simulate async API query for now
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
      setIsDropdownVisible(false);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        const results = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredResults(results);
        setIsDropdownVisible(true);
        setIsLoading(false);
      }, 500); // Simulate API delay
      return () => clearTimeout(timeoutId); // Cleanup for debounce-like behavior
    }
  }, [query, items]);

  // Detect outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-1 flex justify-center max-w-md" ref={dropdownRef}>
      <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
        <BiSearch size={20} />
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="py-2 pl-10 pr-4 w-full rounded-full bg-white text-primary shadow-md placeholder-primary placeholder-opacity-70"
      />
      {isDropdownVisible && (
        <button
          onClick={() => setIsDropdownVisible(false)}
          className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
          aria-label="Close Dropdown"
        >
          <BiX size={20} />
        </button>
      )}

      {isDropdownVisible && (
        <ul className="absolute z-10 w-full bg-white border text-gray-500 rounded-lg shadow-lg mt-11">
          {isLoading ? (
            <li className="px-4 py-2 flex items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" size={18} />
              <span>Searching...</span>
            </li>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  window.location.href = result.link;
                  setQuery("");
                }}
              >
                {result.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-center text-gray-500">No results match your search</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
