import React, { useState, useRef } from "react";
import classes from "./SelectField.module.css";
import SelectFieldOptions from "./SelectFieldOptions";
// import { categories } from "../../utils";

const SelectField = ({ id, label, onChange, options = [], ...props }) => {
  // show the dropdown of the category field
  const [isOpen, setIsOpen] = useState(false);

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
        <SelectFieldOptions onChange={onChange} options={options} />
      ) : // <div className={classes.dropdown}>
      //   <ul>
      //     {options.map((option) => (
      //       <li
      //         key={option.id}
      //         className={`${classes.dropdownItem}`}
      //         onClick={toggleDropdownOptions}
      //       >
      //         {option.type}

      //         {option.options && (
      //           <div
      //             ref={innerDropdownHeight}
      //             style={{ display: `${display}` }}
      //             className={`${classes.dropdownItemOptions} ${active}`}
      //           >
      //             <ul>
      //               {option.options.map((sub_option, index) => (
      //                 <li
      //                   key={sub_option.id}
      //                   onClick={() => onChange(sub_option.id)}
      //                 >
      //                   - {sub_option.type}
      //                 </li>
      //               ))}
      //             </ul>
      //           </div>
      //         )}
      //       </li>
      //     ))}
      //   </ul>
      // </div>
      null}
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
