import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div id="__aboutContainer">
        <section id="__about">
          <Typography variant="h1" component="h2" gutterBottom id="__aboutText">
            Nice to meet you. I am a developer currently living in Houston. I
            love working with talented teams to make memorable user experiences.
            Want to work together to make cool stuff? My contact info is down
            below.
          </Typography>
        </section>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    );
  }
}

export default About;
