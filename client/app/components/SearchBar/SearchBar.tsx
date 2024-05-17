import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ICreateLaw, IGetAllLaws } from "@/app/models/lawModel";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

interface ISearchBarProps {
  laws: IGetAllLaws[] | any;
  set: any;
}
interface IName {
  name: string;
  value?: any
}

const SearchBar: React.FC<ISearchBarProps> = ({ laws, set }) => {
  const [name, setName] = useState<IName>({ name: "" });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const result = laws.filter((law: ICreateLaw) => {
      return (law.law_description.toLowerCase().includes(value.toLowerCase()) || law.law_name.toLowerCase().includes(value.toLowerCase()));
    });
    set(result);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={name.value}
        onChange={handleSearch}
      />
    </Search>
  );
};
export default SearchBar;
