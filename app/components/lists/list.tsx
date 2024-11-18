"use client";
import { useState, useEffect } from "react";
import { useFilters } from "@/app/context/filterContext";

interface Startup {
  name: string;
  founded: number;
}

const StartupList = () => {
  const [startupData, setStartupData] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);
  const { filters } = useFilters();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/startups');
      const result = await response.json();
      setStartupData(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredStartups = startupData.filter(startup => {
    const nameMatch = startup.name.toLowerCase().includes(filters.nameOrDescription.toLowerCase());
    const foundedMatch = !filters.founded || startup.founded.toString().includes(filters.founded);
    return nameMatch && foundedMatch;
  });

  if (loading) return <div>Loading...</div>;
    return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="p-6 max-w-6xl mx-auto w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Startup Directory
          </h1>
          <p className="text-md text-gray-600">
            Discover innovative startups
          </p>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-3"></div>
        </div>

        <div className="space-y-5">
          {filteredStartups.length > 0 ? (
            filteredStartups.map((startup, index) => (
              <a 
                key={index}
                href="#"
                className="block transform hover:scale-[1.01] transition-all duration-200"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100">
                  <div className="flex items-center p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-5">
                      <span className="text-white font-semibold text-xl">
                        {startup.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-grow flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {startup.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-base text-gray-500">
                            Founded {startup.founded}
                          </span>
                        </div>
                      </div>
                      <div className="text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-gray-600">No startups found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );  };

export default StartupList;
