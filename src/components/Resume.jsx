import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <h2>Resume</h2>
        <p>You can view or download my resume below.</p>
        <div className="resume-buttons">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View</a>
          <a href="/resume.pdf" download>Download</a>
        </div>
      </div>
    </section>
  );
}
