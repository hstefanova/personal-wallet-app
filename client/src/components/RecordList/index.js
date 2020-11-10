import React from "react";
import Record from "../Record";

// const RecordList = ({ records }) => (
//   <ul>
//     {records.map((record) => {
//       //   <Record key={record.id} record={record} />;
//       <li>{record.note}</li>;
//     })}
//   </ul>
// );

// export default RecordList;

const RecordList = ({ records }) => {
  return (
    <ul>
      {records.map((record) => (
        <li key={record.id}>
          <Record key={record.id} record={record} />
        </li>
      ))}
    </ul>
    // <div>
    //   {records.map((record) => (
    //     // <p key={record.id}>{record.note}</p>
    //     <Record key={record.id} record={record} />
    //   ))}
    // </div>
  );
};

export default RecordList;
