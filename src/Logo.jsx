import React from "react";
import { Link } from "react-router-dom";
import { Component } from 'react';
import './Logo.css';
import Welcome from './Welcome';


class Logo extends Component {
render() {
	return (
        <div className="hain">
            <img className="logo" />
            <br></br>
          <Link to="/Welcome" className="note1">Get Started!</Link>
          </div>
	);
}
}

export default Logo;