import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./IntroSection.css";
import Dude from "../../../public/dude.png";

class IntroSection extends Component {
  render() {
    return (
      <div>
        <section id="__introSection">
          <Typography variant="h1" component="h2" gutterBottom>
            Intro Section
          </Typography>
          <img src={Dude}></img>
        </section>
      </div>
    );
  }
}

export default IntroSection;
