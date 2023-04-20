import React from "react";
import { Link } from "react-router-dom";
import "./Tpage.css";
import "./Success.css";
const Success = () => {
  return (
    <div className="mac-book-air-49">
      <div className="image-26">
        <span className="profile-created-succ">
          Profile Created Successfully
        </span>
        <img className="preview-2"/>
        <Link to="/Tpage" className="rectangle-120">PROCEED</Link>
        <a href="http://127.0.0.1:5500/src/click_me/index.html" className="den" target="_blank">HELP</a>
      </div>
    </div>
  );
};
export default Success;