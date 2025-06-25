import React from "react";
import "../App.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png"
import inprogress from "../assets/inprogress.png"
import githubLogo from "../assets/github-logo.svg";

const projects = [
  {
    title: "Store Sales Predictor (Random Forest Regressor)",
    description: "Built an end-to-end machine learning solution to forecast retail store sales using time-series data. The project integrated data from multiple sources and applied robust preprocessing, feature engineering, and model training techniques to achieve high prediction accuracy \n\n MAE: 70.49883467605048  RMSE: 338.9014931811827   R² Score: 0.911497806648827 ",
    image : project3,
    github: "https://github.com/Divgithub045/mlProject-salesPredictor",
    status: "completed",
  },
  {
    title: "BlinkMart - Ecommerce",
    description: "BlinkMart is a dynamic e-commerce platform designed for smooth online shopping and efficient admin control. Users can register, log in, browse products with images and details, manage their cart, and place or track orders. Admins can manage products, users, and update order statuses through a dedicated dashboard. The frontend is built using HTML, CSS, JavaScript, Bootstrap, and FontAwesome for a responsive and appealing UI. PHP handles backend logic, while AJAX enables real-time updates without reloading pages. MySQL is used for storing data, with key tables like Users, Products, Orders, and OrderItems. Relationships include one-to-many (users to orders) and many-to-many (orders to products). The project runs locally using XAMPP with Apache and MySQL services. To install, clone the repo, import the SQL file, configure DB credentials, and run on",
    image: project1,
    github: "https://github.com/Divgithub045/Blinkmart-",
    status: "completed",
  },
  {
    title: "HomeValuator",
    description: "House Price Predictor is a machine learning web application that estimates house prices based on user-input features. It uses historical housing data to train a regression model for accurate prediction",
    image: project2,
    github: "https://github.com/Divgithub045",
    status: "completed",
    
  },
  {
    title: "SVM-Based Sports Personality Image Classifier",
    description: "",
    image: inprogress,
    github: "https://github.com/Divgithub045",
    status: "in-progress",
  },

  // Add more projects as needed
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div
          className={`project-card ${proj.status === "in-progress" ? "in-progress-card" : ""}`}
          key={idx}
        >
          <img src={proj.image} alt={proj.title} className="project-image" />

          {/* Only the title stays fully visible */}
          <h3 className="project-title">{proj.title}</h3>

          <p className="project-description">{proj.description}</p>
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
