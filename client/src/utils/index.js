export const categories = [
  {
    id: "food",
    type: "Food and drinks",
    options: [
      {
        id: "restaurant",
        type: "restaurant",
        parent_id: "food",
      },

      {
        id: "fast-food",
        type: "Fast Food",
        parent_id: "food",
      },

      {
        id: "groceries",
        type: "Groceries",
        parent_id: "food",
      },

      {
        id: "bar",
        type: "Bar",
        parent_id: "food",
      },

      {
        id: "coffee",
        type: "Coffee",
        parent_id: "food",
      },
    ],
  },
  {
    id: "shopping",
    type: "Shopping",
    options: [
      {
        id: "clothes",
        type: "Clothes",
        parent_id: "shopping",
      },
      {
        id: "footwear",
        type: "Footwear",
        parent_id: "shopping",
      },
      {
        id: "drugstore",
        type: "drugstore",
        parent_id: "shopping",
      },
    ],
  },
  {
    id: "housing",
    type: "housing",
  },
];

export const groupBy = (arr, key) => {
  return arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
