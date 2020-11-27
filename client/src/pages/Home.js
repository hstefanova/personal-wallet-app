import React, { useState } from "react";
import RecordForm from "../components/Form/RecordForm";
// import RecordFormValidation from "../components/Form/RecordFormValidation";

import RecordList from "../components/Records/RecordList";

const Home = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  // https://www.robinwieruch.de/react-remove-item-from-list
  const removeRecord = (e, id) => {
    e.stopPropagation();
    const result = records.filter((record) => record.id !== id);
    setRecords(result);
  };

  return (
    <div>
      <h1>HOME PAGE</h1>

      <RecordForm addRecord={addRecord} />

      <h5>Records List:</h5>

      <RecordList records={records} removeRecord={removeRecord} />
    </div>
  );
};

export default Home;
