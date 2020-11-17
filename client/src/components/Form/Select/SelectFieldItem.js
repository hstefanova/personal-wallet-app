import React, { useState } from "react";
import classes from "./SelectField.module.css";

const SelectFieldItem = ({ option, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const active = isActive ? classes.active : "";

  const handleSelectValue = (e) => {
    setIsActive(!isActive);
    onChange(e.target.childNodes[0].textContent);
  };

  return (
    <li className={classes.dropdownItem} onClick={handleSelectValue}>
      {option.type}

      {option.options && isActive && (
        <div className={`${classes.dropdownItemOptions}`}>
          <ul>
            {option.options.map((subOption) => (
              <li key={subOption.id} onClick={handleSelectValue}>
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
