import React, { useEffect } from "react";
import Record from "../Record";

const RecordList = ({ records }) => {
  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          <Record key={record.id} record={record} />
        </li>
      ))}
    </ul>
  );
};

export default RecordList;
