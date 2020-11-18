import React from "react";
import SelectFieldItem from "./SelectFieldItem";
import classes from "./SelectField.module.css";

const SelectFieldOptions = ({ options, handleClick }) => {
  return (
    <div className={classes.dropdown}>
      <ul>
        {options.map((option) => (
          <SelectFieldItem
            key={option.id}
            handleClick={handleClick}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectFieldOptions;
