import React, { useState } from "react";

import logo from "./logo.svg";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

const App = () => {
  // why useState([]) returns type object ?
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    // https://stackoverflow.com/questions/57750301/usestate-array-of-objects
    setRecords([...records, record]);
  };

  console.log("records type: ", typeof records);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="20" alt="logo" />
      </header>

      <RecordForm addRecord={addRecord} />

      <h5>Records:</h5>

      <RecordList records={records} />
    </div>
  );
};

export default App;
