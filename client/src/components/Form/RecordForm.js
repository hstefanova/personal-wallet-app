import React, { useState, useEffect } from "react";
import { v4 as uuid, v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./RecordForm.module.css";
import SelectField from "./Select/SelectField";
import InputField from "../Form/InputField";
import { categories } from "../../utils";
import { flattenArray } from "./Select/SelectField";
import moment from "moment";

const OPTIONS = categories;

const RecordForm = ({ addRecord, recordFields }) => {
  let initialValues = {
    id: "",
    note: "",
    amount: "",
    category: "",
    date: "",
    created_at: "",
  };

  if (recordFields) {
    initialValues = {
      id: recordFields.id,
      note: recordFields.note,
      amount: recordFields.amount,
      category: recordFields.category,
      date: recordFields.date,
      created_at: recordFields.created_at,
    };
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [record, setRecord] = useState(initialValues);

  const handleChange = (name, value) => {
    setRecord({ ...record, [name]: value });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.amount) {
      errors.amount = "Field is required!";
    } else if (values.amount == 0) {
      errors.amount = "The amount can't be 0!";
    }

    if (!values.category) {
      errors.category = "Field is required!";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(record));
    setIsSubmitting(true);
  };

  const submitForm = () => {
    addRecord({
      ...record,
      id: uuid(),
      date: moment(record.created_at).format("DD MMMM"),
    });
    setRecord(initialValues);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [errors]);

  return (
    <form className={classes.recordForm} onSubmit={handleSubmit}>
      <div className={classes.recordFormInner}>
        <InputField
          name="note"
          placeholder="Leave a note"
          value={record.note}
          onChange={(value) => handleChange("note", value)}
        />

        <InputField
          type="number"
          min="0"
          step="0.01"
          name="amount"
          placeholder="0.00"
          value={record.amount}
          onChange={(value) => handleChange("amount", value)}
          error={errors.amount}
        />

        <SelectField
          options={OPTIONS}
          value={record.category}
          placeholder="Select category"
          onChange={(value) => handleChange("category", value)}
          error={errors.category}
        />

        <DatePicker
          selected={record.created_at}
          onChange={(value) => handleChange("created_at", value)}
          dateFormat="dd MMM yyyy"
          maxDate={new Date()}
        />

        <button type="Submit">Save</button>
      </div>
    </form>
  );
};

export default RecordForm;
