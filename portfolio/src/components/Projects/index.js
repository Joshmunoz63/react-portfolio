import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./Projects.css";
import qwiki from "../../images/qwiki.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import bamazon from "../../images/bamazon.png";
import portfolio from "../../images/portfolio.png";

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
                  <h4>Technologies Used</h4>
                  Axios, Bcrypt, Express, Heroku, Javascript, Material UI,
                  Mongo, Mongoose, React, Validator, css
                  <div id="__projectlinks">
                    <div id="__projectlink">
                      <a
                        href="https://github.com/ragobash/qwiki"
                        target="_blank"
                        id="__link"
                      >
                        <GitHubIcon style={{ fontSize: 25 }} />
                      </a>
                    </div>
                    <div id="__projectlink">
                      <a
                        href="https://protected-forest-42016.herokuapp.com/"
                        target="_blank"
                        id="__link"
                      >
                        <WebIcon style={{ fontSize: 25 }} />
                      </a>
                    </div>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
          <div className="__projectsContainer">
            <div className="__projectsCard">
              <div className="face face1">
                <div className="__projectsContent">
                  <img src={bamazon} id="__bamazonImg"></img>
                  <h3>Bamazon</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__projectsTypography"
                >
                  Bamazon is the back-end of a amazon type website. You can
                  access manager account and view inventory as well as remove
                  and add items. The customer account can purchase items.
                  <h4>Technologies Used</h4>
                  Node, SQL, Sequelize, Javascript
                  <div id="__projectlinks">
                    <div id="__projectlink">
                      <a
                        href="https://github.com/Joshmunoz63/Bamazon"
                        target="_blank"
                        id="__link"
                      >
                        <GitHubIcon style={{ fontSize: 25 }} />
                      </a>
                    </div>
                    <div id="__projectlink">
                      <a
                        href="https://www.youtube.com/watch?v=AMl97U7tEBY&feature=youtu.be"
                        target="_blank"
                        id="__link"
                      >
                        <WebIcon style={{ fontSize: 25 }} />
                      </a>
                    </div>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
          <div className="__projectsContainer">
            <div className="__projectsCard">
              <div className="face face1">
                <div className="__projectsContent">
                  <img src={portfolio} id="__portfolioImg"></img>
                  <h3>Portfolio</h3>
                </div>
              </div>
              <div className="face face2">
                <Typography
                  variant="body1"
                  gutterBottom
                  className="__projectsTypography"
                >
                  This is what you are looking at.
                  <h4>Technologies Used</h4>
                  React, Material UI, css
                  <div id="__projectlinks">
                    <div id="__projectlink">
                      <a
                        href="https://github.com/Joshmunoz63/react-portfolio"
                        target="_blank"
                        id="__link"
                      >
                        <GitHubIcon style={{ fontSize: 25 }} />
                      </a>
                    </div>
                  </div>
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
