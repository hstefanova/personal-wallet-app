import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./RecordForm.module.css";
import CategoryMenu from "../CategoryMenu";

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

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRecord({ ...record, id: uuid(), date: recordDate });
    setRecord({ id: "", amount: "", note: "", category: "", date: "" });
  };

  console.log(recordDate);
  console.log("value of isMenuVisible: ", isMenuVisible);

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="note">Note</label>
        <input
          type="text"
          name="note"
          placeholder="Leave a note"
          value={record.note}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={record.amount}
          onChange={handleChange}
        />
      </div>

      <div className={`${classes.field} ${classes.category}`}>
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
          <CategoryMenu handleSelectedCategory={handleSelectedCategory} />
        ) : null}
      </div>

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
