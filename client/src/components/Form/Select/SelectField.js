import React, { useState, useRef, memo } from "react";
import classes from "./SelectField.module.css";
import SelectFieldOptions from "./SelectFieldOptions";

// const arePropsEqual = (prevProps, nextProps) =>
//   prevProps.value === nextProps.value &&
//   Object.is(prevProps.options, nextProps.options);

const SelectField = ({
  id,
  label,
  onChange,
  options = [],
  error,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, id) => {
    e.stopPropagation();
    onChange(id);
    setIsOpen(!isOpen);

    console.log("id: ", id);
  };

  console.log("category field rendering");

  return (
    <div className={`${classes.field} ${classes.select}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        {...props}
        type="text"
        readOnly
        onClick={(e) => setIsOpen(!isOpen)}
        onKeyUp={(e) => setIsOpen(!isOpen)}
        className={error ? classes.inputError : null}
      />
      {isOpen ? (
        <SelectFieldOptions handleClick={handleClick} options={options} />
      ) : null}

      {error ? <div className={classes.error}> {error}</div> : null}
    </div>
  );
};

// export default memo(SelectField, arePropsEqual);
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
