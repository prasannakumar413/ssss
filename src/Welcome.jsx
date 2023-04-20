import React from "react";
import { Link } from "react-router-dom";
import Signin from './Signin';
import Signup from './Signup';

import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="mac-book-air-43">
      <div className="image-83">
        <div className="rectangle-3">
          <span className="welcome">Welcome</span>
          <span className="to-keep-connected-wi">
            To keep connected with us login with your personal info{" "}
          </span>
          <button className="rectangle-4">
            <Link to="/Signin" className="sign-in">Sign in</Link>
          </button>
          <button className="rectangle-5">
            <Link to="/Signup" className="sign-up">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;