"use client";
import { useState, useEffect } from "react";
import { useFilters } from "@/src/app/context/filterContext";
import { useRouter } from "next/navigation";

interface Platform {
  id: string;
  name: string;
  overview: string;
  keyFeatures: string[];
}

const PlatformList = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { filters } = useFilters();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/platforms");
      const result = await response.json();
      setPlatforms(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleExpand = (platformId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (expandedId === platformId) {
      setExpandedId(null);
      window.history.pushState({}, "", "/");
    } else {
      setExpandedId(platformId);
      window.history.pushState({}, "", `/${platformId}`);
    }
  };

  const filteredPlatforms = platforms.filter((platform) => {
    const nameMatch = platform.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    return nameMatch;
  });

  if (loading) return <div>Loading...</div>;
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="p-4 sm:p-6 max-w-6xl mx-auto w-full">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Course Directory</h1>
          <p className="text-sm sm:text-md text-gray-600">Discover innovative courses</p>
          <div className="w-12 sm:w-16 h-0.5 bg-blue-600 mx-auto mt-2 sm:mt-3"></div>
        </div>

        {filteredPlatforms.length === 0 && (
          <div className="w-full text-center py-8">
            <p className="text-gray-600 text-lg">No courses found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria</p>
          </div>
        )}

        <div className="space-y-4 sm:space-y-5">
          {filteredPlatforms.map((platform, index) => (
            <div key={index} className="block transform hover:scale-[1.01] transition-all duration-200">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-5">
                    <span className="text-white font-semibold text-lg sm:text-xl">{platform.name.charAt(0)}</span>
                  </div>
                  <div className="flex-grow">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{platform.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-base text-gray-500"></span>
                      </div>
                      <button
                        onClick={(e) => handleExpand(platform.id, e)}
                        className="text-blue-500 hover:text-blue-600 mt-2 flex items-center gap-2 text-sm sm:text-base"
                      >
                        More Information
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 transform transition-transform ${
                            expandedId === platform.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                {expandedId === platform.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 mt-3 sm:mt-4 pt-3 sm:pt-4">
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{platform.overview}</p>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Features:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {platform.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformList;
