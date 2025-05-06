import React from "react";
import "../App.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import githubLogo from "../assets/github-logo.svg";

const projects = [
  {
    title: "BlinkMart - Ecommerce",
    description: "BlinkMart is a dynamic e-commerce platform designed for smooth online shopping and efficient admin control. Users can register, log in, browse products with images and details, manage their cart, and place or track orders. Admins can manage products, users, and update order statuses through a dedicated dashboard. The frontend is built using HTML, CSS, JavaScript, Bootstrap, and FontAwesome for a responsive and appealing UI. PHP handles backend logic, while AJAX enables real-time updates without reloading pages. MySQL is used for storing data, with key tables like Users, Products, Orders, and OrderItems. Relationships include one-to-many (users to orders) and many-to-many (orders to products). The project runs locally using XAMPP with Apache and MySQL services. To install, clone the repo, import the SQL file, configure DB credentials, and run on",
    image: project1,
    github: "https://github.com/Divgithub045/Blinkmart-",
  },
  {
    title: "HomeValuator",
    description: "House Price Predictor is a machine learning web application that estimates house prices based on user-input features. It uses historical housing data to train a regression model for accurate prediction",
    image: project2,
    github: "https://github.com/Divgithub045",
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
