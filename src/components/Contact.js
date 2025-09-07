import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>
            <a href="mailto:71762208007@cit.edu.in">71762208007@cit.edu.in</a>
          </p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <p>+91 93455 56835</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <p>
            <a
              href="https://linkedin.com/in/anirudh-krishnakumar-680011301"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p>
            <a
              href="https://github.com/Anirudh-krishnakumar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repositories
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
