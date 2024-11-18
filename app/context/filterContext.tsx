"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type FilterContextType = {
  filters: {
    nameOrDescription: string;
    founded: string;
  };
  setFilters: (filters: { nameOrDescription: string; founded: string }) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState({
    nameOrDescription: "",
    founded: "",
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilters must be used within FilterProvider');
  return context;
};
