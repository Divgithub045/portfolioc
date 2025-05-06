import React from "react";
import "../App.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import githubLogo from "../assets/github-logo.svg";

const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project.",
    image: project1,
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "A brief description of your second project.",
    image: project2,
    github: "https://github.com/yourusername/project-two",
  },
  // Add more projects as needed
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <img src={proj.image} alt={proj.title} className="project-image" />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            title="View on GitHub"
          >
            <img src={githubLogo} alt="GitHub" className="github-icon" />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
