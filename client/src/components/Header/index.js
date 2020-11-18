import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Profile from "../Profile";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__inner}>
        <div className={classes.header__content}>
          <Logo />
          <Navigation />
        </div>
        <aside className={classes.header__aside}>
          <Profile />
        </aside>
      </div>
    </div>
  );
};

export default Header;
