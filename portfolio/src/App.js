import React, { Component } from "react";
import "./App.css";
import IntroSection from "./components/IntroSection";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <IntroSection />
        <Skills />
      </div>
    );
  }
}

export default App;
