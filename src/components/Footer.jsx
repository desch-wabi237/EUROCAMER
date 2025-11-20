// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Section Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Restez informé</h3>
            <p>Recevez nos meilleures offres et actualités du tourisme éthique</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Liens principaux */}
        <div className="footer-main">
          <div className="footer-section">
            <h4>EuroCamer</h4>
            <p>
              Plateforme de tourisme éthique et culturel entre l'Europe et l'Afrique. 
              Des expériences authentiques, durables et responsables.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/offers">Nos Offres</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Destinations</h5>
            <ul>
              <li><a href="#">Cameroun</a></li>
              <li><a href="#">Sénégal</a></li>
              <li><a href="#">Maroc</a></li>
              <li><a href="#">Tanzanie</a></li>
              <li><a href="#">Afrique du Sud</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Légal</h5>
            <ul>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Conditions générales</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2025 EuroCamer. Tous droits réservés.</p>
          <p>Tourisme éthique et durable Europe-Afrique</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;