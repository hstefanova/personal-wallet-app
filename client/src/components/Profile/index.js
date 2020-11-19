import React from "react";
import classes from "../Profile";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className={classes.profile}>
      User's Profile
      <nav className={classes.profile__dropdown}>
        <ul>
          <li>
            <Link to="/profile-settings">Settings</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
