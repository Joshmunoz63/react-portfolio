import React, { Component } from "react";
import { Modal } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
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
            <div className="modal">
              <div>
                <h1>
                  Looks like you are interested in working together, great!
                </h1>
                <h3>
                  You can email me or send me a message on Linkedin below.
                </h3>
              </div>
              <div id="__modalInfo">
                <a
                  href="mailto:joshmunoz63@gmail.com"
                  target="blank"
                  id="emailIcon"
                >
                  <EmailIcon style={{ fontSize: 60 }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshua-munoz63"
                  target="_blank"
                  id="linkedinIcon"
                >
                  <LinkedInIcon style={{ fontSize: 60 }} />
                </a>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default NavBar;
