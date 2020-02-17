import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <section id="__about">
          <Typography variant="h1" component="h2" gutterBottom>
            About
          </Typography>
        </section>
      </div>
    );
  }
}

export default About;
