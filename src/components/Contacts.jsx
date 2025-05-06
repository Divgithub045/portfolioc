import React from "react";
import "../App.css"; // or create a Contact.css if you want to keep styles separate

const Contact = () => (
  <section className="contact-section" id="contact">
    <h2>Contact</h2>
    <p>
      Interested in working together or have a question? <br />
      Reach out to me!
    </p>
    <div className="contact-details">
      <a href="mailto:divyanshsinghnrj@gmail.com" className="contact-link">
        📧 divyanshsinghnrj@gmail.com
      </a>
      <div className="contact-socials">
        <a href="https://github.com/Divgithub045" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/divyansh-singh-61aa02284/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
    {/* Optional: Simple contact form */}
    {/* 
    <form className="contact-form" onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
    */}
  </section>
);

export default Contact;
