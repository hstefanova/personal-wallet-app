const express = require("express");
const app = express();

const recordRoutes = require("./api/routes/records");
const categoryRoutes = require("./api/routes/categories");

// middleware
app.use("/records", recordRoutes);
app.use("/categories", categoryRoutes);

module.exports = app;
