import React, { useState } from "react";

import logo from "./logo.svg";
import RecordForm from "./components/RecordForm";

const App = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([record, ...records]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="20" alt="logo" />
      </header>

      <RecordForm addRecord={addRecord} />

      <h5>Records:</h5>
      {records.map((record) => (
        <>
          <p>Note: {record.note}</p>
          <p>Amount: {record.amount}</p>
          <p>Category: {record.category}</p>
        </>
      ))}
    </div>
  );
};

export default App;
