import React from "react";

const Record = ({ record }) => {
  console.log("record: ", record);
  return (
    <div>
      <p>{record.note}</p>
      <p>{record.category}</p>
      <p>{record.amount}</p>
      <p>{record.date.toDateString()}</p>
    </div>
  );
};

export default Record;
