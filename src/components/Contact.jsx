import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
    