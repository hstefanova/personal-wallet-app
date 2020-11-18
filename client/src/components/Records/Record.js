import React from "react";
import classes from "./Record.module.css";

const Record = ({ record }) => {
  console.log("record date: ", record.date);
  return (
    <div className={classes.record}>
      <div className={classes.checkbox}>
        <input type="checkbox" />
      </div>

      <div className={classes.recordCategory}>{record.category}</div>

      <div className={classes.recordNote}>{record.note}</div>

      <div className={classes.recordAmount}>{record.amount}</div>

      <div> {record.date.toString()}</div>
    </div>
  );
};

export default Record;
