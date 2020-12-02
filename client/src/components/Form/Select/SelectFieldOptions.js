import React, { useState, useEffect } from "react";
import SelectFieldItem from "./SelectFieldItem";
import classes from "./SelectField.module.css";
import axios from "axios";

const SelectFieldOptions = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        let response = await axios("http://localhost:1337/categories");
        setCategories(response.data);
      } catch (err) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.dropdown}>
      <ul>
        {categories.map((category) => (
          <SelectFieldItem
            key={category.id}
            handleClick={handleClick}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectFieldOptions;
