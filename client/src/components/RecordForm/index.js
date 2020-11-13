import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./RecordForm.module.css";
import CategoryMenu from "../CategoryMenu";
import { useFormik } from "formik";
import {
  onSubmit,
  initialValues,
  validate,
  validationSchema,
} from "./validation";

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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="note">Note</label>
        <input
          type="text"
          name="note"
          placeholder="Leave a note"
          value={formik.values.note}
          // onChange={handleChange}
          onChange={formik.handleChange}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={formik.values.amount}
          // onChange={handleChange}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        {formik.touched.amount && formik.errors.amount ? (
          <div className={classes.error}>{formik.errors.amount}</div>
        ) : null}
      </div>

      <div className={`${classes.field} ${classes.category}`}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formik.values.category}
          // onChange={handleChange}
          // onChange={formik.handleChange}
          // readOnly="readonly"
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
