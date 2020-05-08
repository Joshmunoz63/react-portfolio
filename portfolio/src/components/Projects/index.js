import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./Projects.css";
import qwiki from "../../images/qwiki.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <section id="__projects">
          <div className="__projectsContainer">
            <div className="__projectsCard">
              <div className="face face1">
                <div className="__projectsContent">
                  <img src={qwiki} id="__qwikiImg"></img>
                  <h3>qWiki</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__projectsTypography"
                >
                  qWiki is a platform that provides a quick and easy way to host
                  your own scalable Wiki. With the Builder Tool, you can easily
                  generate dynamic informative Wikis and publish them for others
                  to read or contribute.
                  <h4>Tools I Write With</h4>
                  Bootstrap, React, Materialize, Material-ui, HandleBars
                </Typography>
              </div>
            </div>
          </div>
          <div className="__projectsContainer">
            <div className="__projectsCard">
              <div className="face face1">
                <div className="__projectsContent">
                  <img id="__backendImg"></img>
                  <h3>Back-End</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__projectsTypography"
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

export default Projects;
