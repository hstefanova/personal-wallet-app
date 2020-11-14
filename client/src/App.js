import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import RecordForm from "./components/Form/RecordForm";
import RecordList from "./components/Records/RecordList";

// Header / Content / Footer
// Main page - Authentication or RecordLists
//

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" width="20" alt="logo" />
      </header>

      <RecordForm />

      <h5>Records List:</h5>

      <RecordList />
    </div>
  );
};

export default App;
