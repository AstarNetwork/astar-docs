import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext({ isOpen: false, setIsOpen: (boolean) => {} });

export function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return <SearchContext.Provider value={{ isOpen, setIsOpen }}>{children}</SearchContext.Provider>;
}

export function useSearch() {
  return useContext(SearchContext);
}

// Default implementation, that you can customize
export default function Root({ children }) {
  console.log("Root", children);
  return <SearchProvider>{children}</SearchProvider>;
}
