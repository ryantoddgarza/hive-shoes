import React from 'react';
import Features from './Features';
import About from './About';
import Team from './Team';

const Home = () => (
  <>
    <section className="section spaced">
      <header className="header container desktop">
        <h2 className="title-h1">Our design</h2>
      </header>
      <div className="container tablet">
        <div className="card">
          <About />
        </div>
      </div>
    </section>
    <section className="section spaced">
      <header className="header container desktop">
        <h2 className="title-h1">Features</h2>
      </header>
      <div className="container desktop">
        <Features />
      </div>
    </section>
    <section className="section spaced">
      <header className="header container desktop">
        <h2 className="title-h1">Team</h2>
      </header>
      <div className="container phone-lg">
        <div className="card">
          <Team />
        </div>
      </div>
    </section>
  </>
);

export default Home;
