import React from "react";
import classes from "./Navigation.module.css";
import { Link, Router } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Records</Link>
        </li>
        <li>
          <Link to="/monthly-report">Month Report</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
