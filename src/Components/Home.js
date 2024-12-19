import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="hero" id='home'>
      <div className="content">
        <h2 className="greeting">Hello,</h2>
        <h1 className="title1">
          I'm <span className="highlight">Manjunath Gangal</span>
        </h1>
        <h2 className="subtitle">WebSite Developer</h2>
        <p className="description">
          I am a skilled and passionate web developer with experience in
          creating visually <br/> appealing and user-friendly websites
        </p>
        <button className="hireButton">Hire me</button>
      </div>
      <div className="imageContainer">
        <img
          src="/manjuim1.jpg"
          alt="Professional portrait"
          className="image"
        />
      </div>
    </section>
  );
}

export default Home;

