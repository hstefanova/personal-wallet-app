import React, { useState } from "react";
import classes from "./RecordCategoryMenu.module.css";

const RecordCategoryMenu = ({ handleSelectedCategory }) => {
  <div>
    <ul onClick={handleSelectedCategory}>
      <li>
        Food
        <div>
          <ul>
            <li>pasta</li>

            <li>chicken</li>

            <li>pizza</li>
          </ul>
        </div>
      </li>

      <li>
        Shopping
        <div>
          <ul>
            <li>Accessories</li>

            <li>Home</li>

            <li>Health</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>;
};

export default RecordCategoryMenu;
