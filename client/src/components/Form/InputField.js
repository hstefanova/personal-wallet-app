import React, { memo } from "react";
import PropTypes from "prop-types";
import classes from "./RecordForm.module.css";

const InputField = ({ id, onChange, label, error, ...props }) => {
  return (
    <div className={classes.field}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        onChange={(event) => onChange(event.target.value)}
        {...props}
        className={error ? classes.inputError : null}
      />

      {error ? <div className={classes.error}>{error}</div> : null}
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
