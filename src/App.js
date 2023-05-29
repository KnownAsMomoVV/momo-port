import React from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

// create style for 5rem
const style = {
    marginTop: "10rem"
};

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
          <div style={style}>
          <Experience></Experience>
          </div>
          {/*
        <Projects></Projects>
        */}
          <Credits></Credits>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
