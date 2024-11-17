"use client";
import { FC, useState, useEffect } from "react";

type Filters = {
  nameOrDescription: string;
  allTags: string[];
  anyTags: string[];
  noneTags: string[];
  sector: string;
  primarySector: string;
  targetCustomer: string;
  coreTechnology: string;
  fundingStage: string;
  founded: string;
  totalRaised: string;
  marketCap: string;
  businessModels: string;
  productStage: string;
  employees: string;
  location: string;
  status: string;
};

type Startup = {
  id: string;
  name: string;
  description: string;
};

const FilterMenu: FC = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>({
    nameOrDescription: "",
    allTags: [],
    anyTags: [],
    noneTags: [],
    sector: "",
    primarySector: "",
    targetCustomer: "",
    coreTechnology: "",
    fundingStage: "",
    founded: "",
    totalRaised: "",
    marketCap: "",
    businessModels: "",
    productStage: "",
    employees: "",
    location: "",
    status: "Active",
  });

  const [openFilter, setOpenFilter] = useState<{ [key: string]: boolean }>({
    nameOrDescription: false,
    searchByTag: false, // Main toggle for "Search by tag" section
    allTags: false,
    anyTags: false,
    noneTags: false,
    sector: false,
    primarySector: false,
    targetCustomer: false,
    coreTechnology: false,
    fundingStage: false,
    founded: false,
    totalRaised: false,
    marketCap: false,
    businessModels: false,
    productStage: false,
    employees: false,
    location: false,
    status: false,
  });

  const toggleFilter = (filterName: string) => {
    setOpenFilter((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  const handleTagFilterChange = (type: "allTags" | "anyTags" | "noneTags", value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value.split(",").map((tag) => tag.trim()),
    }));
  };

  const resetFilters = () => {
    setFilters({
      nameOrDescription: "",
      allTags: [],
      anyTags: [],
      noneTags: [],
      sector: "",
      primarySector: "",
      targetCustomer: "",
      coreTechnology: "",
      fundingStage: "",
      founded: "",
      totalRaised: "",
      marketCap: "",
      businessModels: "",
      productStage: "",
      employees: "",
      location: "",
      status: "Active",
    });
  };

  useEffect(() => {
    const fetchStartups = async () => {
      setLoading(true);
      // Replace with actual API call
      setLoading(false);
    };
    fetchStartups();
  }, [filters]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-blue-50 w-full p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filters</h2>
      <div className="flex justify-between text-blue-600 text-sm mb-4">
        <button className="hover:underline" onClick={() => alert("Filters saved!")}>
          Save
        </button>
        <button className="hover:underline" onClick={resetFilters}>
          Clear
        </button>
      </div>

      <input
        type="text"
        placeholder="Name or description"
        value={filters.nameOrDescription}
        onChange={(e) =>
          setFilters({
            ...filters,
            nameOrDescription: e.target.value,
          })
        }
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
      />

      {/* Search by Tag Section */}
      <div>
        <button
          className="flex justify-between w-full text-left text-gray-700 font-medium p-2 hover:bg-blue-100 rounded"
          onClick={() => {
            setOpenFilter((prevState) => ({
              ...prevState,
              searchByTag: !prevState.searchByTag,
            }));
          }}
        >
          Search by tag
          <span className="ml-2">{openFilter.searchByTag ? "▲" : "▼"}</span>
        </button>
        {openFilter.searchByTag && (
          <div className="pl-4 mt-2">
            {/* All of Tag Filter - Directly displayed */}
            <div className="mb-2">
              <label className="text-gray-700 font-medium">All of</label>
              <input
                type="text"
                placeholder="Enter tags"
                value={filters.allTags.join(", ")}
                onChange={(e) => handleTagFilterChange("allTags", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* Any of Tag Filter - Directly displayed */}
            <div className="mb-2">
              <label className="text-gray-700 font-medium">Any of</label>
              <input
                type="text"
                placeholder="Enter tags"
                value={filters.anyTags.join(", ")}
                onChange={(e) => handleTagFilterChange("anyTags", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {/* None of Tag Filter - Directly displayed */}
            <div className="mb-2">
              <label className="text-gray-700 font-medium">None of</label>
              <input
                type="text"
                placeholder="Enter tags"
                value={filters.noneTags.join(", ")}
                onChange={(e) => handleTagFilterChange("noneTags", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Other filters */}
      <div className="space-y-2 mt-4">
        {Object.keys(filters).map((filterName) => {
          if (
            filterName === "nameOrDescription" ||
            filterName === "allTags" ||
            filterName === "anyTags" ||
            filterName === "noneTags"
          )
            return null; // Skip 'nameOrDescription' and tag-related filters

          return (
            <div key={filterName}>
              <button
                className="flex justify-between w-full text-left text-gray-700 font-medium p-2 hover:bg-blue-100 rounded"
                onClick={() => toggleFilter(filterName)}
              >
                {filterName.replace(/([A-Z])/g, " $1")}
                <span>{openFilter[filterName] ? "▲" : "▼"}</span>
              </button>
              {openFilter[filterName] && (
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder={`Search ${filterName}`}
                    value={filters[filterName as keyof Filters]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        [filterName]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterMenu;
