import React from "react";
import "../App.css";
import reactLogo from "../assets/react-logo.svg";
import nodeLogo from "../assets/node-logo.svg";
import mongodbLogo from "../assets/mongodb-logo.svg";
// import cplusplusLogo from "assets/cplusplus-logo.svg";
import pythonLogo from "../assets/python-logo.svg";
import figmaLogo from "../assets/figma-logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import jsLogo from  '../assets/javascript-logo.svg'
import gitLogo from '../assets/git-logo.svg'
import sqlLogo from '../assets/mysql-logo.svg'
import nextlogo from '../assets/nextjs-logo.svg'
import postlogo from '../assets/postman-logo.svg'
import phplogo from '../assets/php-logo.svg'


const skills = [
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongodbLogo },
  // { name: "C++", logo: cplusplusLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Git", logo: gitLogo },
  { name: "MySQL", logo: sqlLogo },
  { name: "Next JS", logo: nextlogo },
  { name: "PHP", logo: phplogo },
  { name: "Postman", logo: postlogo },
  


];

const Skills = () => (
  <section className="skills-section" id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
