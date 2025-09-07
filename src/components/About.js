import React from "react";
import "./About.css";
import profilePic from "../assets/a1.jpeg";  // ✅ import the file

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profilePic} alt="Anirudh Krishnakumar" className="profile-pic" />
        <p>
          I am <b>Anirudh Krishnakumar</b>, a B.Tech Artificial Intelligence & Data Science
          student at Coimbatore Institute of Technology with a CGPA of 9.3.  
          I specialize in deploying LLMs, optimizing cloud costs, and building scalable 
          real-time solutions in robotics, e-commerce, and FinOps.
        </p>
      </div>
    </section>
  );
}

export default About;
