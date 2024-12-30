import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to the Currency Converter Project</h1>
        <p className="hero-description">
          Discover the power of accurate and up-to-date currency conversion. Our project offers seamless currency conversion, historical exchange rates, and multi-currency comparisons.
        </p>
        <Link to="/converter" className="hero-button">Get Started</Link>
      </header>
      
      <section className="features-section">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <Link to="/converter" className="feature-card">
            <h3 className="feature-title">Real-Time Conversion</h3>
            <p className="feature-description">Convert currencies in real-time with the latest exchange rates.</p>
          </Link>
          <Link to="/historical-rates" className="feature-card">
            <h3 className="feature-title">Historical Rates</h3>
            <p className="feature-description">Access historical exchange rates to see trends over time.</p>
          </Link>
          <Link to="/multi-currency" className="feature-card">
            <h3 className="feature-title">Multi-Currency Comparison</h3>
            <p className="feature-description">Compare multiple currencies and make informed decisions.</p>
          </Link>
        </div>
      </section>

      <section className="acknowledgements-section">
        <h2 className="section-title">Acknowledgements</h2>
        <p className="section-description">
          Special thanks to ALX for providing the platform and resources to build this project. This project wouldn't have been possible without the support and guidance from ALX's mentors and community.
        </p>
      </section>
      
      <section className="about-project-section">
        <h2 className="section-title">About the Project</h2>
        <p className="section-description">
          This project aims to provide users with a powerful and accurate currency conversion tool. It includes features like real-time conversion, historical exchange rates, and multi-currency comparisons, all designed to help users make informed financial decisions.
        </p>
      </section>
      
      <section className="thanks-section">
        <h2 className="section-title">Thanks Giving</h2>
        <p className="section-description">
          A heartfelt thank you to everyone who contributed to this project. Your support, encouragement, and feedback have been invaluable. We appreciate your trust and hope this tool serves you well.
        </p>
      </section>
      
      <footer className="footer-section">
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" className="social-link">Twitter</a>
          <a href="https://github.com/yourprofile" className="social-link">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" className="social-link">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
