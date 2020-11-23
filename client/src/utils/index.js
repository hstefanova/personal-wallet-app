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

  // {
  //   id: "shopping",
  //   type: "Shopping",
  //   options: [
  //     "Clothing and footwear",
  //     "Drugstore, pharmacy",
  //     "Health and beauty",
  //     "House, garden",
  //     "Gifts, pleasures",
  //   ],
  // },
  // {
  //   id: "housing",
  //   type: "Housing",
  //   options: [
  //     "Energy, utilities",
  //     "Property Insurance",
  //     "Rent",
  //     "Services",
  //     "Maintenance, Repair",
  //   ],
  // },
  // {
  //   id: "transport",
  //   type: "Transport",
  //   options: ["Business travel", "Long distances", "Public transport", "Taxi"],
  // },
];

export const records = [
  {
    id: 1,
    note: "Billa",
    amount: 50.0,
    category: "Food",
    date: "14 nov 2020",
  },
];
