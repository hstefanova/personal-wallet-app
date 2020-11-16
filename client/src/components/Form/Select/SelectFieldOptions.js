import React from "react";
import SelectFieldItem from "./SelectFieldItem";
import classes from "./SelectField.module.css";

const SelectFieldOptions = ({ options }) => {
  return (
    <div className={classes.dropdown}>
      <ul>
        {options.map((option) => (
          <SelectFieldItem key={option.id} option={option} />
        ))}
      </ul>
    </div>
  );
};

export default SelectFieldOptions;
