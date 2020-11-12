import React, { useState } from "react";
import Select from "react-select";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  dropDown: {
    minWidth: "150px",
    background: "transparent"
  },
});

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
    background: "transparent"
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
      }}
      styles={props.border ? "" : style}
    />
  );
};

export default DropDown;
