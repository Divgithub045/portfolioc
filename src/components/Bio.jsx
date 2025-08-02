import React from "react";
import "../App.css";
import yourPhoto from "../assets/your-photo.jpg";

const Bio = () => (
  <section className="bio-section" id="bio">
    <img src={yourPhoto} alt="Your Name" className="profile-photo" />
    <div className="bio-text">
      <h2>Hello, I'm Divyansh</h2>
      <p>
        I'm a passionate developer skilled in full-stack web development and UI/UX design. 
        I love building futuristic, user-friendly applications with a classic touch. 
        Let's create something amazing together!
      </p>
      <div className="section">
      <div className="entry">
        <h3 className="title">B.Tech in Computer Science and Engineering</h3>
        <p className="subtitle">Jaypee Institute of Information Technology, Noida</p>
        <p className="date">2023 – 2027</p>
      </div>
        <div className="entry">
        <h3 className="title">Team Lead</h3>
        <p className="subtitle">Google Developer Groups, JIIT Noida</p>
        <p className="date">2025 – Present</p>
      </div>
      <div className="entry">
        <h3 className="title">Core Team Member</h3>
        <p className="subtitle">Google Developer Groups, JIIT Noida</p>
        <p className="date"> 2024 - 2025 </p>
      </div>
    </div>

    </div>
  </section>
);

export default Bio;
