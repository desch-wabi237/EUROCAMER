// src/pages/Offers.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import OfferCard from '../components/OfferCard';
import '../styles/Offers.css';

const Offers = () => {
  const allOffers = [
    {
      id: 1,
      title: "Safari Authentique Tanzanie",
      description: "Expérience safari responsable avec guides locaux dans les parcs nationaux",
      price: 1200,
      duration: "10 jours",
      location: "Tanzanie",
      category: "Aventure",
      featured: true
    },
    {
      id: 2,
      title: "Culture Sénégalaise",
      description: "Immersion totale dans la culture wolof et découverte de l'île de Gorée",
      price: 750,
      duration: "7 jours",
      location: "Sénégal",
      category: "Culturel"
    },
    {
      id: 3,
      title: "Randonnée Atlas Maroc",
      description: "Trekking responsable dans les montagnes de l'Atlas avec communauté berbère",
      price: 650,
      duration: "6 jours",
      location: "Maroc",
      category: "Aventure"
    },
    {
      id: 4,
      title: "Découverte Camerounaise",
      description: "Circuit complet des richesses culturelles et naturelles du Cameroun",
      price: 900,
      duration: "9 jours",
      location: "Cameroun",
      category: "Culturel"
    },
    {
      id: 5,
      title: "Cap-Vert Authentique",
      description: "Découverte des îles et de la culture créole cap-verdienne",
      price: 800,
      duration: "8 jours",
      location: "Cap-Vert",
      category: "Balnéaire"
    },
    {
      id: 6,
      title: "Afrique du Sud Nature",
      description: "Route des vins et observation de la faune sauvage",
      price: 1100,
      duration: "11 jours",
      location: "Afrique du Sud",
      category: "Aventure"
    }
  ];

  const categories = ["Toutes", "Aventure", "Culturel", "Balnéaire", "Écotourisme"];

  return (
    <div className="offers-page">
      <HeroSection 
        title="Nos Offres de Voyage"
        subtitle="Découvrez nos séjours responsables soigneusement sélectionnés avec nos partenaires locaux"
        showButton={false}
      />

      <section className="offers-filters">
        <div className="container">
          <div className="filters-section">
            <h3>Filtrer par catégorie</h3>
            <div className="category-filters">
              {categories.map(category => (
                <button key={category} className="filter-btn">
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="all-offers">
        <div className="container">
          <div className="offers-grid">
            {allOffers.map(offer => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;