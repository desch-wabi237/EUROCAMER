// src/components/OfferCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OfferCard.css';

const OfferCard = ({ 
  offer = {
    id: 1,
    title: "Séjour Culturel au Cameroun",
    description: "Découverte authentique des traditions et paysages camerounais",
    price: 850,
    duration: "8 jours",
    location: "Cameroun",
    category: "Culturel",
    image: null,
    featured: false
  } 
}) => {
  const {
    id,
    title,
    description,
    price,
    duration,
    location,
    category,
    image,
    featured
  } = offer;

  return (
    <div className={`offer-card ${featured ? 'featured' : ''}`}>
      {/* Badge catégorie */}
      <div className="offer-badge">{category}</div>
      
      {/* Image de l'offre */}
      <div className="offer-image">
        <div className="image-placeholder">
          <span>🏞️ {location} - {title}</span>
        </div>
        {/* À remplacer par : <img src={image} alt={title} /> */}
      </div>
      
      {/* Contenu de la carte */}
      <div className="offer-content">
        <div className="offer-header">
          <h3 className="offer-title">{title}</h3>
          <span className="offer-location">📍 {location}</span>
        </div>
        
        <p className="offer-description">{description}</p>
        
        <div className="offer-details">
          <div className="offer-duration">⏱️ {duration}</div>
          <div className="offer-price">
            <span className="price-amount">{price}€</span>
            <span className="price-person">/personne</span>
          </div>
        </div>
        
        <div className="offer-features">
          <span className="feature">🏠 Hébergement inclus</span>
          <span className="feature">👨‍🏫 Guide local</span>
          <span className="feature">🚗 Transport</span>
        </div>
        
        <div className="offer-actions">
          <Link to={`/offers/${id}`} className="btn btn-primary">
            Voir détails
          </Link>
          <button className="btn btn-outline">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;