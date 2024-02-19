import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "Tunis, Tunisia": {
        desc:
          "Explored Tunis and the surrounding areas of Carthage, Sidi Bou Said, and Hammamet.",
        techStack: "October 2023",
        link: "https://observatoirevivreensemble.org/sites/default/files/styles/obs-screen-lg-16-9/public/av_bourguiba.jpg?itok=g-wRGuZQ",
        open: "",
        countryCode: "tun"
      },
      "Taiwan, Taipeh": {
        desc:
            "Participated in a Design Thinking Workshop in Taipeh and also visited The Matsu Islands.",
        techStack: "May 2023",
        link: "https://trpstr.de/wp-content/uploads/2021/03/001Taiwan-Taipeh-Skyline-Skyscraper-101-Tower-Urban-city-frank-heuer-2591-1920x1280.jpg",
        open: "",
        countryCode: "tw"
      },
      "Korea, Seoul": {
        desc:
            "Explored Seoul and the surrounding areas of Incheon, Suwon, Gangnam, and more!",
        techStack: "January 2024",
        link: "https://www.merkur.de/bilder/2022/08/31/92158639/29730176-seoul-hauptstadt-von-suedkorea-1ife.jpg",
        open: "",
        countryCode: "kr"
      },
      "Finland, Turku": {
        desc:
            "Participated in a Design Thinking Workshop in Turku and also visited Rovaniemi & Helsinki!",
        techStack: "February 2024",
        link: "https://media.arto.se/app/uploads/sites/2/2017/12/22152803/river-aurajenni-virta-iloinen-liftari-oy.jpg?auto=format&crop=faces&facepad=10&fit=crop&q=50&w=750&h=600",
        open: "",
        countryCode: "fi"
      },
      "America, New York": {
        desc:
            "Explored New York & New Jersey and the surrounding areas of Queens, Brooklyn and Long Island.",
        techStack: "December 2023",
        link: "https://res.klook.com/image/upload/Mobile/City/szhx3ytpgfnhpbmsngk0.jpg",
        open: "",
        countryCode: "us"
      },
      "Denmark, Sønderborg": {
        desc:
            "just a short trip to Denmark to explore the city of Sønderborg.\n"+"\n",
        techStack: "September 2022",
        link: "https://sejlerens.com/assets/Uploads/Haefen/Kleiner-Belt-und-Fuenen/Soenderborg-Kommune/21d9f3645e/Sonderborg-38-v3.jpg",
        open: "",
        countryCode: "dk"
      },
      "Belgium, Brüssel": {
        desc:
            "Explored Brüssel and the surrounding areas also visited the Atomium, European Parliament, and more!",
        techStack: "April 2023",
        link: "https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/Belgium_Brussels_3840x2160.jpg?mw=1920&hash=C11E6B90BFCA8A8B13D1ABFB82A270847441013A",
        open: "",
        countryCode: "be"
      },
      "Italy, Milano": {
        desc:
            "Visited the city of Milano and explored the city while meeting some family members.",
        techStack: "December 2017",
        link: "https://i.natgeofe.com/n/485b2f58-8e2b-4633-a1c5-658bf513e53e/alps-milan-italy_16x9.jpg",
        open: "",
        countryCode: "it"
      },
      "Czech Republic, Prague": {
        desc:
            "Visited the city of Prague and the konzentration camp Theresienstadt. while also exploring the city.",
        techStack: "September 2018",
        link: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/20/09/prague-overview.jpg?width=1200",
        open: "",
        countryCode: "cz"
      },
      "Netherlands, Amsterdam": {
        desc:
            "Went to Hoofdorp & Haarlem and explored the city of Amsterdam.",
        techStack: "November 2021",
        link: "https://static01.nyt.com/images/2023/09/24/multimedia/24-36Hrs-Amsterdam-01-01-cwqt/24-36Hrs-Amsterdam-01-01-cwqt-superJumbo.jpg",
        open: "",
        countryCode: "nl"
      },
      "Turkey, Antalya": {
        desc:
            "Went to Alanya while exploring the city of Antalya.",
        techStack: "July 2016",
        link: "https://www.antalya-urlaub.com/wp-content/uploads/2012/12/hafen-antalya-1.jpg",
        open: "",
        countryCode: "tr"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ travel</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li className="projects-card">
                    <div className="card-header">
                      <div className="folder-icon">
                        <FolderOpenRoundedIcon
                            style={{ fontSize: 35 }}
                        ></FolderOpenRoundedIcon>
                      </div>
                      <ExternalLinks
                          drivelink={projects[key]["link"]}
                          openLink={projects[key]["open"]}
                          countryCode={projects[key]["countryCode"]}
                      ></ExternalLinks>
                    </div>

                    {/* Image link */}
                    <div className="card-image-link">
                      <a href={projects[key]["open"]} target="_blank" rel="noopener noreferrer">
                        <img
                            src={projects[key]["link"]}
                            alt={`${key} project`}
                            style={{
                              width: '670px',
                              height: '200px',
                              display: 'block',
                              objectFit: 'contain',
                              borderRadius: '8px'
                            }}
                        />
                      </a>
                    </div>

                    <div className="card-title">{key}</div>
                    <div className="card-desc">{projects[key]["desc"]}</div>
                    <div className="card-tech">{projects[key]["techStack"]}</div>
                  </li>
                </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
