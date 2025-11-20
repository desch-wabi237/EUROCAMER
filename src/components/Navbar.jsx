// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <span className="logo-text">EuroCamer</span>
          </Link>

          {/* Navigation principale */}
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={isActiveLink('/')} onClick={() => setIsMenuOpen(false)}>
              Accueil
            </Link>
            <Link to="/offers" className={isActiveLink('/offers')} onClick={() => setIsMenuOpen(false)}>
              Offres
            </Link>
            <Link to="/blog" className={isActiveLink('/blog')} onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" className={isActiveLink('/contact')} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/account" className={isActiveLink('/account')} onClick={() => setIsMenuOpen(false)}>
              Mon Compte
            </Link>
          </div>

          {/* Sélecteur de langue */}
          <div className="nav-actions">
            <LanguageSelector />
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Composant sélecteur de langue
const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const languages = [
    { code: 'FR', name: 'Français' },
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'DE', name: 'Deutsch' }
  ];

  return (
    <div className="language-selector">
      <button 
        className="language-current"
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentLang}
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className="language-option"
              onClick={() => {
                setCurrentLang(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;