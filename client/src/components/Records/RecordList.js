import React, { useEffect } from "react";
import Record from "./Record";
import { records, groupBy } from "../../utils";
import moment from "moment";
import classes from "./Record.module.css";

const RecordList = ({ records, removeRecord }) => {
  const recordsByDate = groupBy(records, "date");

  return (
    <div>
      {Object.keys(recordsByDate)
        .sort((a, b) => new Date(b) - new Date(a))
        .map((dateKey) => (
          <div className={classes.row}>
            <h1>
              {moment(dateKey).format("DD MMMM")}
              <span>
                {recordsByDate[dateKey]
                  .reduce(
                    (accumulator, currentRecord) =>
                      accumulator + parseFloat(currentRecord.amount),
                    0
                  )
                  .toFixed(2)}
              </span>
            </h1>
            <ul>
              {recordsByDate[dateKey].map((record) => (
                <li key={record.id}>
                  <Record record={record} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default RecordList;
