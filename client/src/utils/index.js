export const categories = [
  {
    id: "food",
    type: "Food and drinks",

    options: [
      {
        id: "restorant",
        type: "restorant",
        options: [
          {
            id: "happy",
            type: "Happy",
          },
        ],
      },

      {
        id: "fast-food",
        type: "Fast Food",
      },

      {
        id: "groceries",
        type: "Groceries",
      },

      {
        id: "bar",
        type: "Bar",
      },

      {
        id: "coffee",
        type: "Coffee",
      },
    ],
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

export const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr.options) {
      acc.push(
        {
          value: curr.id,
          label: curr.type,
        },
        ...flattenArray(curr.options)
      );
    } else {
      acc.push({
        value: curr.id,
        label: curr.type,
      });
    }

    return acc;
  }, []);
};
