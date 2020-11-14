import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./RecordForm.module.css";
import SelectField from "../Form/SelectField";
import InputField from "../Form/InputField";
import { categories, flattenArray } from "../../utils";

console.log(flattenArray(categories));

const RecordForm = ({ addRecord }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [recordDate, setRecordDate] = useState(new Date());
  const [record, setRecord] = useState({
    id: "",
    note: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleSelectedCategory = (e) => {
    e.preventDefault();

    let selectedCategory = e.target.childNodes[0].textContent.trim();
    setRecord({ ...record, category: selectedCategory });
    setIsMenuVisible(!isMenuVisible);
  };

  const handleChange = (name, value) => {
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecord({ ...record, id: uuid(), date: recordDate });
    setRecord({ id: "", amount: "", note: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        options={categories}
        value={record.category}
        onChange={(value) => handleChange("category", value)}
      />

      {/* <div className={`${classes.field} ${classes.category}`}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={record.category}
          onChange={handleChange}
          readOnly="readonly"
          onClick={(e) => setIsMenuVisible(!isMenuVisible)}
          onKeyUp={(e) => setIsMenuVisible(!isMenuVisible)}
        />
        {isMenuVisible ? (
          <SelectField handleSelectedCategory={handleSelectedCategory} />
        ) : null}
      </div> */}

      <DatePicker
        selected={recordDate}
        onChange={(date) => setRecordDate(date)}
        dateFormat="dd MMM yyyy"
        maxDate={new Date()}
      />

      <button type="Submit">Save</button>
    </form>
  );
};

export default RecordForm;
