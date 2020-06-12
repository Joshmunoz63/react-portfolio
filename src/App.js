import React, { Component } from "react";
import "./App.css";
import IntroSection from "./components/IntroSection";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div id="__app">
        <NavBar />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
