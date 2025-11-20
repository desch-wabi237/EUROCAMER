// src/pages/Account.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/Account.css';

const Account = () => {
  return (
    <div className="account-page">
      <HeroSection 
        title="Mon Compte"
        subtitle="Gérez vos réservations, favoris et informations personnelles"
        showButton={false}
      />

      <section className="account-content">
        <div className="container">
          <div className="account-grid">
            <div className="login-section">
              <h3>Connexion</h3>
              <form className="login-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="votre@email.com" />
                </div>
                <div className="form-group">
                  <label>Mot de passe</label>
                  <input type="password" placeholder="Votre mot de passe" />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
              </form>
              <p className="register-link">
                Pas encore de compte ? <a href="#register">Créer un compte</a>
              </p>
            </div>

            <div className="account-features">
              <h3>Avantages du compte</h3>
              <div className="features-list">
                <div className="feature">
                  <span>📋</span>
                  <div>
                    <strong>Gestion des réservations</strong>
                    <p>Suivez et modifiez vos voyages</p>
                  </div>
                </div>
                <div className="feature">
                  <span>❤️</span>
                  <div>
                    <strong>Favoris</strong>
                    <p>Gardez vos destinations préférées</p>
                  </div>
                </div>
                <div className="feature">
                  <span>🎁</span>
                  <div>
                    <strong>Avantages exclusifs</strong>
                    <p>Offres spéciales et promotions</p>
                  </div>
                </div>
                <div className="feature">
                  <span>📞</span>
                  <div>
                    <strong>Support prioritaire</strong>
                    <p>Assistance dédiée 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;