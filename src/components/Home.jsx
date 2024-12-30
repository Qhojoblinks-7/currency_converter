import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Currency Converter</h1>
          <p className="hero-description">
            Seamlessly convert currencies, explore trends, and make informed decisions.
          </p>
          <Link to="/converter" className="cta-button">Get Started</Link>
        </div>
        <div className="hero-image">
          <img 
            src="/assets/currency-converter-hero.svg" 
            alt="Currency Converter" 
          />
        </div>
      </header>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img 
              src="/assets/realtime-conversion.svg" 
              alt="Real-Time Conversion" 
              className="feature-icon" 
            />
            <h3 className="feature-title">Real-Time Conversion</h3>
            <p className="feature-description">
              Get the latest rates instantly for any currency pair.
            </p>
            <Link to="/converter" className="learn-more-link">Learn More</Link>
          </div>
          <div className="feature-card">
            <img 
              src="/assets/historical-rates.svg" 
              alt="Historical Rates" 
              className="feature-icon" 
            />
            <h3 className="feature-title">Historical Rates</h3>
            <p className="feature-description">
              Dive into past exchange rates and spot trends.
            </p>
            <Link to="/historical-rates" className="learn-more-link">Learn More</Link>
          </div>
          <div className="feature-card">
            <img 
              src="/assets/multi-currency.svg" 
              alt="Multi-Currency Comparison" 
              className="feature-icon" 
            />
            <h3 className="feature-title">Multi-Currency Comparison</h3>
            <p className="feature-description">
              Compare multiple currencies at a glance.
            </p>
            <Link to="/multi-currency" className="learn-more-link">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About This Project</h2>
        <p className="about-description">
          Built with precision and care, this platform empowers users to make confident financial decisions through accurate conversions and insights.
        </p>
      </section>

      <section className="acknowledgements-section">
        <h2 className="section-title">Acknowledgements</h2>
        <p className="acknowledgements-description">
          We extend our gratitude to ALX for their invaluable mentorship and resources, which made this project possible.
        </p>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          <p className="footer-text">© 2024 Currency Converter Project. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://twitter.com/yourprofile" className="social-icon">
              <img src="/assets/twitter-icon.svg" alt="Twitter" />
            </a>
            <a href="https://github.com/yourprofile" className="social-icon">
              <img src="/assets/github-icon.svg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="social-icon">
              <img src="/assets/linkedin-icon.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
