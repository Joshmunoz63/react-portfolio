import React, { Component } from "react";
import { Modal, Button } from "@material-ui/core";
import "./NavBar.css";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

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
        <div>
          <a color="inherit" id="__navbtn" onClick={this.handleOpen}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
          </a>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
            autoComplete="off"
            id="__contactModal"
          >
            <div>
              <h1>hello</h1>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default NavBar;
