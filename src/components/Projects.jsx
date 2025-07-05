import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Study Space</h3>
          <p>Web app with Pomodoro timer & To-Do list to boost productivity.</p>
        </div>
        <div className="project-card">
          <h3>Portfolio Site</h3>
          <p>Responsive site built in React with clean UI and scroll animation.</p>
        </div>
        <div className="project-card">
          <h3>Lottery App</h3>
          <p>Java program to simulate ticket purchase and matching logic.</p>
        </div>
      </div>
    </section>
  );
}
