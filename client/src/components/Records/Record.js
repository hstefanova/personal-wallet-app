import React, { useState } from "react";
import classes from "./Record.module.css";
import moment from "moment";
import Modal from "../UI/Modal";
import RecordForm from "../Form/RecordForm";

const Record = ({ record }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <RecordForm />
      </Modal>

      <div className={classes.record} onClick={() => setIsOpen(true)}>
        <div className={classes.checkbox}>
          <input type="checkbox" />
        </div>

        <div className={classes.recordCategory}>{record.category}</div>

        <div className={classes.recordNote}>{record.note}</div>

        <div className={classes.recordAmount}>{record.amount}</div>

        <div> {record.date}</div>
      </div>
    </>
  );
};

export default Record;
