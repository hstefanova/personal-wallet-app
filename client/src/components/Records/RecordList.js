import React, { useEffect } from "react";
import Record from "./Record";
import { records, groupBy } from "../../utils";
import moment from "moment";

const RecordListAll = ({ records }) => {
  const recordsByDate = groupBy(records, "created_at");

  return (
    <div>
      {Object.keys(recordsByDate)
        .sort((a, b) => new Date(b) - new Date(a))
        .map((dateKey) => (
          <div>
            <h1>
              {moment(dateKey).format("DD MMMM")}
              <span>
                {recordsByDate[dateKey].reduce(
                  (accumulator, currentRecord) =>
                    accumulator + currentRecord.amount,
                  0
                )}
              </span>
            </h1>
            <ul>
              {recordsByDate[dateKey].map((record) => (
                <li>
                  <Record key={record.id} record={record} />
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default RecordListAll;
