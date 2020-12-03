import React, { useState } from "react";
import classes from "./SelectField.module.css";

const SelectFieldItem = ({ category, handleClick }) => {
  return (
    <li
      className={classes.dropdownItem}
      onClick={(e) => handleClick(e, category.id)}
    >
      {category.name}

      {category.subcategories && (
        <div className={`${classes.dropdownItemOptions}`}>
          <ul>
            {category.subcategories.map((subcategory) => (
              <li
                key={subcategory.id}
                onClick={(e) => handleClick(e, subcategory.id)}
              >
                {subcategory.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SelectFieldItem;
