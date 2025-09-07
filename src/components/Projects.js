import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "LUNA - Emotion Aware Robot",
      desc: "92% CNN accuracy, Jetson Nano deployment, Spotify + LLM responses.",
    },
    {
      title: "Model Context Protocol",
      desc: "Improved Flipkart product comparison by 40% using structured context injection.",
    },
    {
      title: "GPS Based Toll System",
      desc: "Processed 10K GPS points/sec, optimized queries by 20%, handled 100+ API requests.",
    },
    {
      title: "Face Recognition App",
      desc: "95% accuracy, automated attendance via Firebase + Flask backend.",
    },
    {
      title: "Carbon Stock Estimation",
      desc: "Random Forest model (R²: 0.865) for forest ecosystem carbon stock prediction.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
