import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./Skills.css";
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";

class Skills extends Component {
  render() {
    return (
      <div>
        <section id="__skills">
          <div className="__skillsContainer">
            <div className="__skillsCard">
              <div className="face face1">
                <div className="__skillsContent">
                  <img src={frontend} id="__frontendImg"></img>
                  <h3>Front-End</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__skillsTypography"
                >
                  My Front-end skills.
                </Typography>
              </div>
            </div>
          </div>
          <div className="__skillsContainer">
            <div className="__skillsCard">
              <div className="face face1">
                <div className="__skillsContent">
                  <img src={backend} id="__backendImg"></img>
                  <h3>Back-End</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__skillsTypography"
                >
                  My Back-end skills.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
