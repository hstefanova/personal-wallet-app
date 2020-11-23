import React, { useState } from "react";
import RecordForm from "../components/Form/RecordForm";
import RecordListAll from "../components/Records/RecordListAll";

const Home = () => {
  const [records, setRecords] = useState([]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  return (
    <div>
      <h1>HOME PAGE</h1>

      <RecordForm addRecord={addRecord} />

      <h5>Records List:</h5>

      <RecordListAll records={records} />
    </div>
  );
};

export default Home;
