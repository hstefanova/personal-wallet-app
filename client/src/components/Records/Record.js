import React from "react";
import classes from "./Record.module.css";
import moment from "moment";

const Record = ({ record }) => {
  return (
    <div className={classes.record}>
      <div className={classes.checkbox}>
        <input type="checkbox" />
      </div>

      <div className={classes.recordCategory}>{record.category}</div>

      <div className={classes.recordNote}>{record.note}</div>

      <div className={classes.recordAmount}>{record.amount}</div>

      <div> {record.date}</div>
    </div>
  );
};

export default Record;
