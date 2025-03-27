import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Fullstack Software Developer</b> at <br />
        <a href="https://www.hanseaticbank.de/"> Hanseatic Bank</a>, working in App Development. <br />At the same time, I am undertaking a
         <b> Bachelors's degree</b>  <br />in <b>Computer Science </b>at<br></br>
        <a href="https://bhh.de">Berufliche Hochschule Hamburg</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the newest tech.<br /> I also play video games. And i love to Travel.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:momo@momoh.de">
          mhoppe.stud.bhh.de
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Typescript",
      "Python",
      "React",
      "React Native",
      "Next.js",
      "PHP",
      "Docker",
      "Terraform",
      "Node.js",
      "SQL",
      "AWS",
      "Playwright",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {<p>Here are some technologies I have been working with: <br />
              (some more than others)
              </p> }
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/momo2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
