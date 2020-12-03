import React, { useState, useEffect } from "react";
import RecordForm from "../components/Form/RecordForm";
import axios from "axios";

// import RecordFormValidation from "../components/Form/RecordFormValidation";

import RecordList from "../components/Records/RecordList";

const Home = () => {
  const [records, setRecords] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const response = await axios("http://localhost:1337/records");
        setRecords(response.data);

        console.log("response: ", response.data);
      } catch (err) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  // const addRecord = (record) => {
  //   setRecords([...records, record]);
  // };

  // https://www.robinwieruch.de/react-remove-item-from-list
  // const removeRecord = (e, id) => {
  //   e.stopPropagation();
  //   const result = records.filter((record) => record.id !== id);
  //   setRecords(result);
  // };

  return (
    <div>
      <h1>HOME PAGE</h1>

      <RecordForm />

      <h5>Records List:</h5>

      <p></p>

      {!isError ? (
        <RecordList records={records} />
      ) : (
        "Error with loading the records ..."
      )}
    </div>
  );
};

export default Home;
