import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="app-title">EthioTunes</h1>
        <p className="tagline">Discover the soul of Ethiopian music</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </div>
      
      <section className="featured-section">
        <h2>Featured Artists</h2>
        {/* Display featured artists */}
      </section>
      
      <section className="genres-section">
        <h2>Explore Genres</h2>
        {/* Display music genres with icons */}
      </section>
      
      <section className="latest-section">
        <h2>Latest Releases</h2>
        {/* Display latest Ethiopian music releases */}
      </section>
      
      <section className="playlists-section">
        <h2>Curated Playlists</h2>
        {/* Display curated playlists or collections */}
      </section>
      
      <section className="recommendations-section">
        <h2>Personalized Recommendations</h2>
        {/* Display personalized music recommendations */}
      </section>
      
      <section className="testimonials-section">
        <h2>What People Are Saying</h2>
        {/* Display testimonials or reviews */}
      </section>
      
      <footer className="footer">
        <p>&copy; 2023 EthioTunes. All rights reserved.</p>
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
