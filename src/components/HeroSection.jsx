// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = ({ 
  title, 
  subtitle, 
  image, 
  showButton = true, 
  buttonText = "Découvrir nos offres",
  buttonLink = "/offers" 
}) => {
  return (
    <section className="hero">
      {/* Image de fond avec placeholder pour image réelle */}
      <div className="hero-background">
        <div className="hero-image-placeholder">
          {/* Placeholder - à remplacer par une image réelle */}
          <div className="placeholder-image">
            
          </div>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          {showButton && (
            <div className="hero-actions">
              <Link to={buttonLink} className="btn btn-primary hero-btn">
                {buttonText}
              </Link>
              <Link to="/contact" className="btn btn-outline hero-btn">
                Nous contacter
              </Link>
            </div>
          )}
          
          {/* Indicateur de scroll */}
          <div className="scroll-indicator">
            <span>Explorer</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;