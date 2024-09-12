// Libraries
import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
// Hooks - local
import { useContextSearch } from "../provider/SearchProvider";

// Main
const Search = () => {
  // State
  const [search, setSearch] = useState<string>("");
  // Hooks
  const { updateKeyword } = useContextSearch();

  return (
    <TextField
      fullWidth
      value={search}
      size="medium"
      label="Cari user"
      onChange={(e) => {
        setSearch(e.target.value);
        e.target.value === "" && updateKeyword("");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          updateKeyword(search);
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
