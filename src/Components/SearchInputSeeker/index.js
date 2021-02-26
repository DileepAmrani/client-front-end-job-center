import React, { useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import Select from "react-select";
import { makeStyles } from "@material-ui/core";
import cx from "clsx";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    display: "flex",
    borderRadius: "4px",
    alignItems: "center",
    border: "1px solid transparent",
    padding: "8px",
  },
  searchInputFocus: {
    border: "1px solid #1D8A8B",
  },
  iconSide: {
    margin: "0px",
  },
  inputSide: {
    flex: 1,
  },
  inputSideAddress: {
    flex: 1,
  },
  dropDown: {
    fontSize: "16px",
    color: "#1D8A8B",
  },
}));

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: "none",
    background: "transparent",
  }),
};

const SearchInput = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const classes = useStyles();

  const options = [
    { value: "Product", label: "Product" },
    { value: "Production", label: "Production" },
    { value: "Product Manger", label: "Product Manger" },
    { value: "Product Analyst", label: "Product Analyst" },
    { value: "Product Marketing", label: "Product Marketing" },
    { value: "Product Designer", label: "Product Designer" },
  ];

  const Address = [
    { value: "London, KY", label: "London, KY" },
    { value: "London, OH", label: "London, OH" },
    { value: "London, NH", label: "London, NH" },
    { value: "London, WV", label: "London, WV" },
    { value: "London, AR", label: "London, AR" },
  ];

  const handleChangeAddress = (selectedOption) => {
    setSelectedAddress({ selectedAddress });
  };

  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption });
  };

  return (
    <div
      className={cx(
        classes.searchInput,
        inputFocus ? classes.searchInputFocus : ""
      )}
    >
      <div className={classes.iconSide}>
        <SearchOutlined fontSize="large" style={{ color: "#9B9E9C" }} />
      </div>
      <div className={classes.inputSide}>
        <Select
          onChange={handleChange}
          options={options}
          isClearable={true}
          className={classes.dropDown}
          placeholder="Search Talent"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          components={{
            DropdownIndicator: () => null,
          }}
          styles={props.border ? "" : style}
        />
      </div>
      <div className={classes.inputSideAddress}>
        <Select
          onChange={handleChangeAddress}
          options={Address}
          isClearable={true}
          className={classes.dropDown}
          placeholder="City, State, Zip"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
          styles={props.border ? "" : style}
        />
      </div>
    </div>
  );
};

export default SearchInput;
