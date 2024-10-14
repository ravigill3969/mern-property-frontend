import { useState, createContext, useContext } from "react";

type SearchContextType = {
  destination: string;
  saveSearchValues: (destination: string) => void;
};

// Create the context, default value is undefined (handled in consumer with checks)
const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode; // Children that will be wrapped by the provider
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  // State for the search context values
  const [destination, setDestination] = useState<string>(""); // Initial value as "rent"

  // Function to save the search values
  const saveSearchValues = (destination: string) => {
    setDestination(destination);
  };

  sessionStorage.setItem("destination", destination || " ");

  return (
    <SearchContext.Provider
      value={{
        destination,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext in other components
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};
