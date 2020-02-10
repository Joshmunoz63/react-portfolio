import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class IntroSection extends Component {
  render() {
    return (
      <div>
        <section id="one">
          <Typography variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Typography>
        </section>
      </div>
    );
  }
}

export default IntroSection;
