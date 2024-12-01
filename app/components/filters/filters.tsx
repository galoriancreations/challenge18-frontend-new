"use client";
import { FC, useState } from "react";
import { useFilters } from "@/app/context/filterContext";

const FilterMenu: FC = () => {
  const { filters, setFilters } = useFilters();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>

      {/* Filter Menu */}
      <div className={`
        fixed md:sticky top-0 
        ${isOpen ? 'left-0' : '-left-full md:left-0'} 
        w-[280px] md:w-auto 
        h-screen 
        bg-white shadow-sm border-r border-gray-100 
        transition-all duration-300 ease-in-out
        z-40 md:z-30
      `}>
        <div className="p-6">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Title */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Search Courses</h2>
            <button 
              onClick={() => setFilters({ nameOrDescription: "", founded: "" })}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset
            </button>
          </div>

          <div className="space-y-5">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={filters.nameOrDescription}
                  onChange={(e) => setFilters({ ...filters, nameOrDescription: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founded Year
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter year..."
                  value={filters.founded}
                  onChange={(e) => setFilters({ ...filters, founded: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
                <svg className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
