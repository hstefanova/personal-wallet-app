import React from "react";
import PropTypes from "prop-types";
import classes from "./RecordForm.module.css";

const InputField = ({ id, onChange, label, ...props }) => {
  return (
    <div className={classes.field}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

InputField.defaultProp = {
  type: "text",
  name: "",
  placeholder: "",
  value: "",
};

export default InputField;
