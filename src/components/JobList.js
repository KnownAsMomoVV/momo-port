import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    ITECH: {
      jobTitle: "high-school diploma @",
      duration: "AUG 2019 - AUG 2021",
      desc: [
        "Worked on mutiple different Projects in the field of IT, Electronics and Mechanics.",
        "Build a alarm system including its on webapp and a mobile app as my final project.",
        "Learned how to work in a team and how to apply the agile methodology."
      ]
    },
    "BHH | Berufliche Hochschule Hamburg": {
      jobTitle: "B.Sc. Computer Science @",
      duration: "AUG 2021 - AUG 2025 (Currently)",
      desc: [
        "Studying Computer Science with a focus on Software Engineering, while continuing to work on my own projects and adapting new technologies ive learned.",
        "I'm steadily improving my understanding of coding and algorithms, always curious to learn about the latest technologies.",
          "Having written two academic term papers on REST APIs and HATEOAS, I am furthering my understanding of web services and their architectural styles, reflecting a keen interest in the principles of modern web development."
      ]
    },
    // Centivizer: {
    //   jobTitle: "Research Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    "MCUT | Ming Chi University of Technology": {
      jobTitle: "Cultural Study Exchange @",
      duration: "MARCH 2023 - APRIL 2023",
      desc: [
        "During a three-week study exchange at Ming Chi University of Technology in Taiwan, I had the opportunity to partake in a Design Thinking Workshop, further enhancing my problem-solving and collaborative skills.",
        "In this endeavor, our team successfully bolstered a struggling non-profit, creating a responsive website and an impactful marketing strategy, along with developing an efficient backend system for managing current and prospective customers.",
        "we utilized a range of technologies and methodologies, such as React, SWOT Analysis, and the MoSCoW prioritization method, reinforcing my versatility in various technical and strategic approaches."
      ]
    },
    "Hanseatic Bank": {
      jobTitle: "Software Developer @",
      duration: "AUG 2021 - (Currently)",
      desc: [
        "As a Full Stack Developer in the Onboarding Department, I facilitate the smooth integration of numerous new customers daily, ensuring meticulous validation, logical checks, and a seamless onboarding experience for all.",
        "Part of my practical experience includes assisting with the setup of a LEANIX-based workflow and contributing to the mapping of multiple web applications, demonstrating my ongoing learning and adaptation in a real-world setting.",
        "Recently I have been working in the Mobile Services department, where I have been working on the Front & Backend of the Mobile Banking App, as well as the Cloud Infrastructure."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
