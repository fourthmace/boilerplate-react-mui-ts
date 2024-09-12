// Libraries
import { createContext, ReactNode, useContext, useState } from "react";

// -- Context --
interface SearchContextType {
  keyword: string;
  updateKeyword: (newKeyword: string) => void;
}
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// -- Hook --
export const useContextSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "useContextSearch must be used within a UserContext.Provider"
    );
  }
  return context;
};

// -- Provider --
export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [keyword, setKeyword] = useState("");
  const updateKeyword = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  return (
    <SearchContext.Provider
      value={{
        keyword,
        updateKeyword,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
