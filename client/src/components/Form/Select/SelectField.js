import React, { useState, useRef } from "react";
import classes from "./SelectField.module.css";
import SelectFieldOptions from "./SelectFieldOptions";

const SelectField = ({ id, label, onChange, options = [], ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    onChange(e.target.childNodes[0].nodeValue);
    setIsOpen(!isOpen);

    console.log("event: ", e);
  };

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
        <SelectFieldOptions handleClick={handleClick} options={options} />
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
