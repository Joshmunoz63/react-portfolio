import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div id="__nav">
        <div>
          <a color="inherit" href="#__introSection" id="__navbtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home
          </a>
        </div>
        <div>
          <a color="inherit" href="#__about" id="__navbtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About
          </a>
        </div>
        <div>
          <a color="inherit" href="#__skills" id="__navbtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Skills
          </a>
        </div>
        <div>
          <a color="inherit" href="#__projects" id="__navbtn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Projects
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
