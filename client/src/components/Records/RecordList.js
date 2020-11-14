import React, { useEffect } from "react";
import Record from "./Record";
import { records } from "../../utils";

const RecordList = () => {
  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          <Record record={record} />
        </li>
      ))}
    </ul>
  );
};

export default RecordList;
