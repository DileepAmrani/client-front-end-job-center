import React from "react";
import { createUseStyles } from "react-jss";
import DropDown from "./../DropDown";
import CheckBox from "./../CheckBox";
import MultiSelect from "./../MutliSelect"
const useStyles = createUseStyles({
  filterBar: {
    display: "flex",
    // height: "70px",
    borderRadius: "4px",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  filterItem: {
    marginRight: "10px",
    minWidth: '170px',
  },
  "@media (max-width: 800px)": {
    filterBar: {
      justifyContent: "flex-start",
    },
  },
});
const FilterBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.filterBar}>
      <div className={classes.filterItem}>
        <DropDown title="Recent searches" />
      </div>
      <div className={classes.filterItem}>
        <MultiSelect title="Job Type" />
      </div>
      <div className={classes.filterItem}>
        <MultiSelect title="Date Post" />
      </div>
      <div className={classes.filterItem}>
        <MultiSelect title="Salary" />
      </div>
      <div className={classes.filterItem}>
        <CheckBox label="Work from Home" />
      </div>
    </div>
  );
};
export default FilterBar;
