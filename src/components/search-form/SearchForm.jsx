import * as React from "react";
import TextField from "@mui/material/TextField";

export const SearchForm = ({handleOnchange,str}) => {
  return (
    <div>
  <TextField
          id="filled-search"
          onChange={handleOnchange}
          value={str}
          label="Search"
          type="search"
          variant="filled"
        />
  </div>
  );
}
