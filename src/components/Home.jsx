import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation between pages
import '../styles/Home.css'; // Import custom CSS styles for the Home component
import logoImage from '../assets/logo for a currency converter app.png'; // Import logo image
import realTimeConversionImage from '../assets/Real-Time Conversion.png'; // Import Real-Time Conversion image
import historicalRatesImage from '../assets/Historical Rates.png'; // Import Historical Rates image
import multiCurrencyComparisonImage from '../assets/Multi-Currency Comparison.png'; // Import Multi-Currency Comparison image

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import social media icons

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section: Main intro with a title, description, and call-to-action button */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Currency Converter</h1> {/* Main title */}
          <p className="hero-description">
            Convert currencies, explore historical trends, and make informed decisions.
          </p> {/* Description of the app */}
          <Link to="/converter" className="cta-button">Start Converting</Link> {/* CTA button to navigate to the converter */}
        </div>
        <div className="hero-image">
          <img
            src={logoImage} // Set logo image as the source
            alt="Currency Converter"
            className="hero-img" // Apply custom styling for the image
          />
        </div>
      </header>

      {/* Features Section: Highlights key features of the Currency Converter app */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2> {/* Title of the section */}
        <div className="features-grid">
          {/* Feature Card 1: Real-Time Conversion */}
          <div className="feature-card">
            <img
              src={realTimeConversionImage} // Real-time conversion image
              alt="Real-Time Conversion"
              className="feature-icon" // Apply custom styles for the feature icon
            />
            <h3 className="feature-title">Real-Time Conversion</h3> {/* Title of the feature */}
            <p className="feature-description">
              Get up-to-the-minute exchange rates for any currency pair, globally.
            </p> {/* Description of the feature */}
            <Link to="/converter" className="learn-more-link">Learn More</Link> {/* Link to learn more */}
          </div>

          {/* Feature Card 2: Historical Rates */}
          <div className="feature-card">
            <img
              src={historicalRatesImage} // Historical rates image
              alt="Historical Rates"
              className="feature-icon" // Apply custom styles for the feature icon
            />
            <h3 className="feature-title">Historical Rates</h3> {/* Title of the feature */}
            <p className="feature-description">
              Access historical exchange rate data and analyze trends over time.
            </p> {/* Description of the feature */}
            <Link to="/historical-rates" className="learn-more-link">Learn More</Link> {/* Link to learn more */}
          </div>

          {/* Feature Card 3: Multi-Currency Comparison */}
          <div className="feature-card">
            <img
              src={multiCurrencyComparisonImage} // Multi-currency comparison image
              alt="Multi-Currency Comparison"
              className="feature-icon" // Apply custom styles for the feature icon
            />
            <h3 className="feature-title">Multi-Currency Comparison</h3> {/* Title of the feature */}
            <p className="feature-description">
              Compare multiple currencies at a glance and make quick decisions.
            </p> {/* Description of the feature */}
            <Link to="/multi-currency" className="learn-more-link">Learn More</Link> {/* Link to learn more */}
          </div>
        </div>
      </section>

      {/* About Section: Provides a brief overview of the project */}
      <section className="about-section">
        <h2 className="section-title">About This Project</h2> {/* Title of the section */}
        <p className="about-description">
          Built with precision and care, this platform empowers users with accurate currency conversions and trends, helping them make smarter financial decisions.
        </p> {/* Description of the project */}
      </section>

      {/* Acknowledgements Section: Acknowledges the people or organizations who supported the project */}
      <section className="acknowledgements-section">
        <h2 className="section-title">Acknowledgements</h2> {/* Title of the section */}
        <p className="acknowledgements-description">
          We extend our gratitude to ALX for their mentorship, guidance, and resources that helped bring this project to life.
        </p> {/* Description of acknowledgements */}
      </section>

      {/* Footer Section: Displays copyright information and social media links */}
      <footer className="footer-section">
        <div className="footer-content">
          <p className="footer-text">© 2024 Currency Converter. All rights reserved.</p> {/* Copyright text */}
          <div className="social-icons">
            {/* Twitter social icon */}
            <a href="https://twitter.com/qhojoblinks1" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            {/* GitHub social icon */}
            <a href="https://github.com/Qhojoblinks-7" className="social-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            {/* LinkedIn social icon */}
            <a href="https://www.linkedin.com/in/immanuel-eshun-767b07259" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
