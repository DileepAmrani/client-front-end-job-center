import React from "react";
import { SearchOutlined } from "@material-ui/icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  searchInput: {
    display: "flex",
    height: "48px",
    background: "transparent",
    borderRadius: "4px",
  },
  iconSide: {
    margin: "8px",
  },
  inputSide: {
    flex: 1,
  },
  input: {
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
    height: "48px",
    fontSize: "18px",
    outline: "none"
  },
});

const SearchInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.searchInput} style={props.styles}>
      <div className={classes.iconSide}>
        <SearchOutlined fontSize="large" />
      </div>
      <div className={classes.inputSide}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search Jobs"
        />
      </div>
    </div>
  );
};

export default SearchInput;
