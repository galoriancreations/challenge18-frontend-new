"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface Filters {
  searchTerm: string;
}

type FilterContextType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({ searchTerm: "" });
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
