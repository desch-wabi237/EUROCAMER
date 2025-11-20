// src/components/NewsletterForm.jsx
import React, { useState } from 'react';
import '../styles/NewsletterForm.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi - à remplacer par l'API plus tard
    console.log('Email inscrit:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Réinitialiser après 3 secondes
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (isSubscribed) {
    return (
      <div className="newsletter-success">
        <p>🎉 Merci ! Vous êtes maintenant inscrit à notre newsletter.</p>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="newsletter-input"
        />
        <button type="submit" className="btn btn-primary newsletter-btn">
          S'inscrire
        </button>
      </div>
      <p className="newsletter-disclaimer">
        En vous inscrivant, vous acceptez notre politique de confidentialité.
      </p>
    </form>
  );
};

export default NewsletterForm;