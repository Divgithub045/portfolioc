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
      <b>B.Tech CSE 2027 Jaypee Institute Of Information Technology, Noida</b>
      <br /> <br />
      <b>Core Team Google Developer Groups, JIIT Noida</b>
    </div>
  </section>
);

export default Bio;
