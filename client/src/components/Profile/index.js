import React from "react";
import classes from "../Profile";

const Profile = () => {
  return (
    <div className={classes.profile}>
      User's Profile
      <nav className={classes.profile__dropdown}>
        <ul>
          <li>Settings</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
