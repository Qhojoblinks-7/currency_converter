import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Currency Converter</h1>
          <p className="hero-description">
            Convert currencies, explore historical trends, and make informed decisions.
          </p>
          <Link to="/converter" className="cta-button">Start Converting</Link>
        </div>
        <div className="hero-image">
          <img
            src="src/assets/logo for a currency converter app.png"
            alt="Currency Converter"
            className="hero-img"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src="src/assets/Real-Time Conversion.png"
              alt="Real-Time Conversion"
              className="feature-icon"
            />
            <h3 className="feature-title">Real-Time Conversion</h3>
            <p className="feature-description">
              Get up-to-the-minute exchange rates for any currency pair, globally.
            </p>
            <Link to="/converter" className="learn-more-link">Learn More</Link>
          </div>
          <div className="feature-card">
            <img
              src="src/assets/Historical Rates.png"
              alt="Historical Rates"
              className="feature-icon"
            />
            <h3 className="feature-title">Historical Rates</h3>
            <p className="feature-description">
              Access historical exchange rate data and analyze trends over time.
            </p>
            <Link to="/historical-rates" className="learn-more-link">Learn More</Link>
          </div>
          <div className="feature-card">
            <img
              src="src/assets/Multi-Currency Comparison.png"
              alt="Multi-Currency Comparison"
              className="feature-icon"
            />
            <h3 className="feature-title">Multi-Currency Comparison</h3>
            <p className="feature-description">
              Compare multiple currencies at a glance and make quick decisions.
            </p>
            <Link to="/multi-currency" className="learn-more-link">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About This Project</h2>
        <p className="about-description">
          Built with precision and care, this platform empowers users with accurate currency conversions and trends, helping them make smarter financial decisions.
        </p>
      </section>

      {/* Acknowledgements Section */}
      <section className="acknowledgements-section">
        <h2 className="section-title">Acknowledgements</h2>
        <p className="acknowledgements-description">
          We extend our gratitude to ALX for their mentorship, guidance, and resources that helped bring this project to life.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <p className="footer-text">© 2024 Currency Converter. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://twitter.com/yourprofile" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/yourprofile" className="social-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
