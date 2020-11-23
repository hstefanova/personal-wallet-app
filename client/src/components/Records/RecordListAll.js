import React, { useEffect } from "react";
import Record from "./Record";
import { records } from "../../utils";
import moment from "moment";

const groupBy = (arr, key) => {
  return arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const RecordListAll = ({ records }) => {
  const sortRecordsByDate = records.sort((a, b) => a.date - b.date);
  const groupRecords = groupBy(sortRecordsByDate, "date");

  console.log("groupRecords: ", groupRecords);
  // return array of object keys
  console.log("Object keys: ", Object.keys(groupRecords).sort());

  // return values
  console.log("values for 23 Nov: ", groupRecords["23 November"]);

  return (
    <div>
      <ul>
        {Object.keys(groupRecords)
          .sort()
          .map((date) => (
            <div>
              <h1>{date}</h1>
              {groupRecords[date].map((record) => (
                <li>
                  <Record key={record.id} record={record} />
                </li>
              ))}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RecordListAll;
