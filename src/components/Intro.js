import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import MomoModel from "./ModelModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";
import {color} from "three/examples/jsm/libs/dat.gui.module";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        {/*<FractalTree></FractalTree>*/}
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"Momo"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I create stuff sometimes.</div>
          <div className="intro-desc">
            <p>
            I'm a software Developer based in Hamburg. I am interested in Web development, artificial intelligence,
            design and everything in between.<br></br>
            <b>website is in an Alpha-State</b>
            </p>
          </div>
          <a
            href="mailto:m.hoppe@stud.bhh.de"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
