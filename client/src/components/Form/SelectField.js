import React, { useState } from "react";
import classes from "./RecordForm.module.css";
// import { categories } from "../../utils";

// You need to update the key values to be unique for each of the <li> elements</li>

const SelectField = ({ id, label, onChange, options = [], ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${classes.field} ${classes.category}`}>
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
              <li key={option.id} onClick={() => onChange(option.id)}>
                {option.type}

                <div className={classes.optionMenuDropdown}>
                  <ul>
                    {option.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

// const SelectField = ({ handleSelectedCategory }) => {
//   return (
//     <div className={classes.SelectField}>
//       <ul onClick={handleSelectedCategory}>
//         {categories.map((category) => (
//           <li key={category.id}>
//             {category.type}

//             <div className={classes.categoryMenuDropdown}>
//               <ul>
//                 {category.options.map((option, index) => (
//                   <li key={index}>{option}</li>
//                 ))}
//               </ul>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default SelectField;
