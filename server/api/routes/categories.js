const express = require("express");
const router = express.Router();

// Add routes here

// read all
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request all categories!",
  });
});

//create category
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST request category!",
  });
});

//get category by ID
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Handling GET record by ID ${id}`,
    id: id,
  });
});

//update category
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `The category with ID: ${id} is updated!`,
    id: id,
  });
});

//delete category
// * we need to hide it instead
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({
    message: `The category with ID: ${id} is updated!`,
    id: id,
  });
});

module.exports = router;
