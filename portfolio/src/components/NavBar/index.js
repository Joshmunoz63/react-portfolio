import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div id="__nav">
        <div>
          <Button color="inherit" href="#__introSection">
            Home
          </Button>
        </div>
        <div>
          <Button color="inherit" href="#__skills">
            Skills
          </Button>
        </div>
        <div>
          <Button color="inherit" href="#__projects">
            Projects
          </Button>
        </div>
      </div>
    );
  }
}

export default NavBar;
