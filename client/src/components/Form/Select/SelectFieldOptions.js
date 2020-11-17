import React from "react";
import SelectFieldItem from "./SelectFieldItem";
import classes from "./SelectField.module.css";

const SelectFieldOptions = ({ options, onChange }) => {
  return (
    <div className={classes.dropdown}>
      <ul>
        {options.map((option) => (
          <SelectFieldItem
            key={option.id}
            onChange={onChange}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectFieldOptions;
