const express = require("express");
const router = express.Router();

// Add routes here

// read all
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request records!",
  });
});

//create record
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST request records!",
  });
});

//get record by ID
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Handling GET record by ID ${id}`,
    id: id,
  });
});

//update record
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `The record with ID: ${id} is updated!`,
    id: id,
  });
});

//delete record
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `The record with ID: ${id} is updated!`,
    id: id,
  });
});

module.exports = router;
