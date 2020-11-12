import React, { useState } from "react";
import classes from "./CategoryMenu.module.css";
import { categories } from "../../utils";

const CategoryMenu = ({ handleSelectedCategory }) => {
  return (
    <div className={classes.categoryMenu}>
      <ul onClick={handleSelectedCategory}>
        {categories.map((category) => (
          <>
            <li>{category.type}</li>

            <div className={classes.categoryMenuDropdown}>
              <ul>
                {category.options.map((option) => (
                  <li>{option}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
