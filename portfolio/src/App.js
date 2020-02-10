import React, { Component } from "react";
import "./App.css";
import IntroSection from "./components/IntroSection";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    return (
      <div>
        <IntroSection />
        <Skills />
      </div>
    );
  }
}

export default App;
