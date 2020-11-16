import React, { useState } from "react";
import classes from "./SelectField.module.css";

const SelectFieldItem = ({ option }) => {
  const [isActive, setIsActive] = useState(false);

  const active = isActive ? classes.active : "";

  return (
    <li className={classes.dropdownItem} onClick={() => setIsActive(!isActive)}>
      {option.type}

      {option.options && isActive && (
        <div className={`${classes.dropdownItemOptions}`}>
          <ul>
            {option.options.map((subOption) => (
              <li key={subOption.id}>{subOption.type}</li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SelectFieldItem;
