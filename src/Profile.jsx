import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import "./Success.css";
const Profile = () => {
  return (
    <div className="mac-book-air-48">
      <div className="image-27">
        <div className="rectangle-8">
          <span className="create-profile">Create Profile</span>
          <img className="image-86"/>
          <span className="user-name">User Name</span>
          <input className="rectangle-113" placeholder="xxx" type="text" />
          <span className="first-name">First Name</span>
          <input className="rectangle-114" placeholder="xxx" type="text" />
          <span className="last-name">Last Name</span>
          <input className="rectangle-115" placeholder="xxx" type="text" />
          <span className="date-of-birth">Date Of Birth</span>
          <input
            className="rectangle-116"
            placeholder="xx-xx-xxxx"
            type="text"
          />
          <Link to="/Success" className="rectangle-117">CREATE</Link>
          <a href="http://127.0.0.1:5500/src/click_me/index.html" className="val" target="_blank">HELP</a>

        </div>
      </div>
    </div>
  );
};
export default Profile;