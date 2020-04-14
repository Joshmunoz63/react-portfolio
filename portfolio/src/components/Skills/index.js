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
                  I enjoy writing code from the bottom up keeping it clean and
                  organized. While still giving cool user experiences.
                  <br></br>
                  <h4>What I write In</h4>
                  HTML, Javascript, JQuery, CSS
                  <br></br>
                  <h4>Tools I Write With</h4>
                  Bootstrap, React, Materialize, Material-ui, HandleBars
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
                  I like to write code that is effient and understandable that
                  way it can easily be built on.
                  <br></br>
                  <h4>What I Write In</h4>
                  Node, MongoDB, MySQL
                  <br></br>
                  <h4>What I Write With</h4>
                  Express, Mongoose, Sequelize, Firebase, Git
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
