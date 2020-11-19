import React from "react";
import { Route } from "react-router-dom";
import MonthlyReport from "../../pages/MonthlyReport";
import ProfileCharts from "../../pages/ProfileCharts";
import Home from "../../pages/Home";
import ProfileSettings from "../../pages/ProfileSettings";
import SignOut from "../../pages/SignOut";

const Content = () => {
  return (
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/monthly-report" component={MonthlyReport} />
      <Route path="/charts" component={ProfileCharts} />
      <Route path="/profile-settings" component={ProfileSettings} />
      <Route path="/signout" component={SignOut} />
    </main>
  );
};

export default Content;
