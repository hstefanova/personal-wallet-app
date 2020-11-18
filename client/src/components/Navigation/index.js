import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>Records</li>
        <li>Month Report</li>
        <li>Charts</li>
      </ul>
    </nav>
  );
};

export default Navigation;
