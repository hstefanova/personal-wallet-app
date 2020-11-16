import React, { useState, useRef } from "react";
import classes from "./RecordForm.module.css";
// import { categories } from "../../utils";

const SelectField = ({ id, label, onChange, options = [], ...props }) => {
  // show the dropdown of the category field
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [display, setDisplay] = useState("none");

  const innerDropdownHeight = useRef(null);

  const toggleDropdownOptions = () => {
    setIsActive(isActive === "" ? "active" : "");
    setDisplay(
      isActive === "active"
        ? (innerDropdownHeight.current.display = "none")
        : (innerDropdownHeight.current.display = "block")
    );

    console.log(innerDropdownHeight);
  };

  const active = isActive ? classes.active : "";

  return (
    <div className={`${classes.field} ${classes.select}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        {...props}
        type="text"
        readOnly
        onClick={(e) => setIsOpen(!isOpen)}
        onKeyUp={(e) => setIsOpen(!isOpen)}
      />
      {isOpen ? (
        <div className={classes.dropdown}>
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                className={`${classes.dropdownItem}`}
                onClick={toggleDropdownOptions}
              >
                {option.type}

                {option.options && (
                  <div
                    ref={innerDropdownHeight}
                    style={{ display: `${display}` }}
                    className={`${classes.dropdownItemOptions} ${active}`}
                  >
                    <ul>
                      {option.options.map((sub_option, index) => (
                        <li
                          key={sub_option.id}
                          onClick={() => onChange(sub_option.id)}
                        >
                          - {sub_option.type}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SelectField;

// export const flattenArray = (arr) => {
//   return arr.reduce((acc, curr) => {
//     if (curr.options) {
//       acc.push({
//         id: curr.id,
//         label: curr.type,
//         hasChildren: true,
//         options: [
//           {
//             // first choice same as parent
//             id: curr.id,
//             label: curr.type,
//           },
//           ...flattenArray(curr.options),
//         ],
//       });
//     } else {
//       acc.push({
//         id: curr.id,
//         label: curr.type,
//       });
//     }

//     return acc;
//   }, []);
// };
