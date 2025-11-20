// src/pages/Contact.jsx
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire envoyé:', formData);
    alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <HeroSection 
        title="Contactez-Nous"
        subtitle="Une question ? Un projet ? Notre équipe est là pour vous accompagner"
        showButton={false}
      />

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Nos Coordonnées</h3>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <p>contact@eurocamer.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>Téléphone</strong>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div>
                  <strong>Adresse</strong>
                  <p>123 Avenue du Tourisme<br />75001 Paris, France</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <strong>Horaires</strong>
                  <p>Lun - Ven: 9h - 18h<br />Sam: 10h - 16h</p>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h3>Envoyez-nous un message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;