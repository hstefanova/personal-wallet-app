import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

import Header from "./components/Header";

import { Route, Link } from "react-router-dom";
import Content from "./components/Content";

// Header / Content / Footer
// Main page - Authentication or RecordLists
//

const App = () => {
  return (
    <div className="App">
      <Header />

      <Content />
    </div>
  );
};

export default App;
