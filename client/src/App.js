import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

const App = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  useEffect(() => {
    if (localStorage.getItem("records")) {
      setRecords(JSON.parse(localStorage.getItem("records")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

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
