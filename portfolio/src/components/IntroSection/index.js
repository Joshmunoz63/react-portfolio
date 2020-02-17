import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./IntroSection.css";
import Dude from "../../images/dude.png";

class IntroSection extends Component {
  render() {
    return (
      <div id="__introContainer">
        <section id="__introSection">
          <div>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              id="__introText"
            >
              Hi, my name is Josh Munoz.
            </Typography>
            <Typography variant="h2" id="__introTexth2">
              I am a Full-Stack Web Developer
            </Typography>
          </div>
          <div id="__dudeContainer">
            <img src={Dude} id="__dude"></img>
          </div>
        </section>
      </div>
    );
  }
}

export default IntroSection;
