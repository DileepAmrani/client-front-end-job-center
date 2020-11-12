import React from "react";
import Select from "react-select";

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
    background: "transparent",
  }),
};
export const colourOptions = [
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const MultiSelect = (props) => {
  return (
    <Select
      defaultValue={"Select"}
      isMulti
      name="colors"
      options={colourOptions}
      placeholder={props.title}
      components={{
        IndicatorSeparator: () => null,
      }}
      styles={style}
    />
  );
};

export default MultiSelect;
