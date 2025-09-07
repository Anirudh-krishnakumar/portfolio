import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "C Programming", icon: "💻" },
    { name: "Flask", icon: "🌐" },
    { name: "Flutter", icon: "📱" },
    { name: "Power BI", icon: "📊" },
    { name: "Data Structures", icon: "🗂️" },
    { name: "Database Management", icon: "🗄️" },
    { name: "AWS (S3, Lambda, CloudTrail)", icon: "☁️" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Cloud Computing", icon: "🌍" },
    { name: "IoT", icon: "📡" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
