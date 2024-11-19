"use client";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

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

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
    } else {
      // Filter items based on query
      const results = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredResults(results);
    }
  }, [query, items]);

  // TODO
  // create exit search option
  // searching... with spinner

  return (
    <div className="relative  flex justify-center max-w-md">
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
      {filteredResults.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border text-gray-500 rounded-lg shadow-lg mt-11">
          {filteredResults.map((result, index) => (
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
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
