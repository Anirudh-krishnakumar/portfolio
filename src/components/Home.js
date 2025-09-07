import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <h1>Welcome to My Portfolio 🚀</h1>
        <p>AI Professional | Cloud FinOps | Data Science Enthusiast</p>
        <a
          href="https://github.com/Anirudh-krishnakumar"
          target="_blank"
          rel="noreferrer"
        >
          <button>View My GitHub</button>
        </a>
      </div>
    </section>
  );
}

export default Home;
