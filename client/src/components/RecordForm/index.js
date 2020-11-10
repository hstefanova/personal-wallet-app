import React, { useState } from "react";
import { v4 as uuid, v4 } from "uuid";

const RecordForm = ({ addRecord }) => {
  const [record, setRecord] = useState({
    id: "",
    note: "",
    amount: "",
    category: "",
  });

  const handleChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.value });
  };

  const timeValues = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord({ ...record, id: uuid() });
    setRecord({ id: "", amount: "", note: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="note"
        placeholder="Note"
        value={record.note}
        onChange={handleChange}
      />

      <input
        type="text"
        name="amount"
        placeholder="Amount"
        value={record.amount}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={record.category}
        onChange={handleChange}
      />

      <button type="Submit">Save</button>
    </form>
  );
};

export default RecordForm;
