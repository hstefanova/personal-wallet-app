import React, { useState } from "react";
import classes from "./SelectField.module.css";

const SelectFieldItem = ({ option, handleClick }) => {
  return (
    <li
      className={classes.dropdownItem}
      onClick={(e) => handleClick(e, option.id)}
    >
      {option.type}

      {option.options && (
        <div className={`${classes.dropdownItemOptions}`}>
          <ul>
            {option.options.map((subOption) => (
              <li
                key={subOption.id}
                onClick={(e) => handleClick(e, subOption.id)}
              >
                {subOption.type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SelectFieldItem;
