import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import "./IntroSection.css";

class IntroSection extends Component {
  render() {
    return (
      <div>
        <section id="__introSection">
          <Typography variant="h1" component="h2" gutterBottom>
            Intro Section
          </Typography>
        </section>
      </div>
    );
  }
}

export default IntroSection;
