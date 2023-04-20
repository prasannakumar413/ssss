import React from "react";
import { Link } from "react-router-dom";
import "./Verification.css";
import Profile from './Profile';
const Verification = () => {
  return (
    <div className="mac-book-air-47">
      <div className="image-30">
        <div className="rectangle">
          <span className="otp-verification">OTP Verification</span>
          <img className="image-88" />
          <span className="otp-sent-to-91">OTP sent to 91**</span>
          <div className="flex-container">
            <input className="rectangle-106" placeholder="*" type="num" />
            <input className="rectangle-107" placeholder="*" type="num" />
            <input className="rectangle-108" placeholder="*" type="num" />
            <input className="rectangle-109" placeholder="*" type="num" />
          </div>
          <span className="didnt-receive-otp-re">
            Didn’t receive OTP? Resend OTP
          </span>
          <button className="rectangle-104">
            <Link to="/Profile" className="confirm">CONFIRM</Link>
          </button>
          <a href="http://127.0.0.1:5500/src/click_me/index.html" className="dkd" target="_blank">HELP</a>

        </div>
      </div>
    </div>
  );
};
export default Verification