import React, { useState } from "react";
import Select from "react-select"
import { ArrowDropDown } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropDown: {
    minWidth: "130px",
    maxWidth: 180,
    background: "transparent",
    fontSize: '15px'
  },
}));

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
    background: "transparent",
  }),
};
const DropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const classes = useStyles();

  const handleChange = (selectedOption) => {
    setSelectedOption({ selectedOption });
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={props.options}
      className={classes.dropDown}
      placeholder={props.title}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <ArrowDropDown />
      }}
      styles={props.border ? "" : style}
    />
  );
};

export default DropDown;
