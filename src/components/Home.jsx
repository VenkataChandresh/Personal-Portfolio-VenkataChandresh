import React from "react";
import Memoji from "../assets/Memoji.png";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hey, I’m <span className="highlight">Chandresh Adapa</span></h1>
        <p>A passionate developer, turning ideas into reality through code.</p>
        <a href="#projects" className="hero-btn">See My Work</a>
      </div>
      <div className="home-img">
        <img src={Memoji} alt="Memoji" />
      </div>
    </section>
  );
}
