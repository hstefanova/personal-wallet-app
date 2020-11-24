import React, { useState } from "react";
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

const RecordForm = ({ addRecord }) => {
  const [recordDate, setRecordDate] = useState(new Date());

  const [record, setRecord] = useState({
    id: "",
    note: "",
    amount: "",
    category: "",
    created_at: "",
  });

  const handleChange = (name, value) => {
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecord({
      ...record,
      id: uuid(),
      date: moment(recordDate).format("DD MMMM"),
      created_at: recordDate,
    });
    setRecord({ id: "", amount: "", note: "", category: "", date: "" });
    setRecordDate(new Date());
  };

  console.log("form rendering");

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
          name="amount"
          placeholder="Amount"
          value={record.amount}
          onChange={(value) => handleChange("amount", value)}
        />

        <SelectField
          options={OPTIONS}
          value={record.category}
          onChange={(value) => handleChange("category", value)}
        />

        <DatePicker
          selected={recordDate}
          onChange={(date) => setRecordDate(date)}
          dateFormat="dd MMM yyyy"
          maxDate={new Date()}
        />

        <button type="Submit">Save</button>
      </div>
    </form>
  );
};

export default RecordForm;
