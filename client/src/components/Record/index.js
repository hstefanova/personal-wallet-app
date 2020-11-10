import React from "react";

const Record = ({ record }) => {
  return (
    <div>
      <p>{record.note}</p>
      <p>{record.category}</p>
      <p>{record.amount}</p>
    </div>
  );
};

export default Record;
