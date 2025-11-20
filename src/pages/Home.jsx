// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import OfferCard from '../components/OfferCard';
import '../styles/Home.css';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Données des régions du Cameroun
  const cameroonRegions = [
    {
      id: 1,
      name: "Littoral & Douala",
      image: "🏙️",
      description: "Porte d'entrée économique avec ses marchés animés et sa culture métissée",
      highlights: ["Marché des Fleurs", "Musée Maritime", "Plages de Kribi"],
      color: "#2A9D8F"
    },
    {
      id: 2,
      name: "Région de l'Ouest",
      image: "⛰️",
      description: "Terre des chefferies Bamiléké et paysages de hauts plateaux verdoyants",
      highlights: ["Chefferie Bafut", "Lac Bamendjing", "Chutes de Mamiwater"],
      color: "#D89C60"
    },
    {
      id: 3,
      name: "Extrême-Nord",
      image: "🏜️",
      description: "Paysages sahéliens et rencontres avec les peuples Mafa et Mofu",
      highlights: ["Parc de Waza", "Monts Mandara", "Marché de Maroua"],
      color: "#E76F51"
    },
    {
      id: 4,
      name: "Sud & Forêt",
      image: "🌳",
      description: "Forêt équatoriale dense et rencontre avec les peuples Baka",
      highlights: ["Réserve de Dja", "Chutes de Lobé", "Culture Baka"],
      color: "#264653"
    }
  ];

  // Offres populaires Cameroun
  const popularOffers = [
    {
      id: 1,
      title: "Expérience Bamiléké Authentique",
      description: "Immersion complète dans la culture Bamiléké avec séjour en chefferie, initiation aux danses traditionnelles et découverte de l'artisanat local",
      price: 750,
      duration: "7 jours",
      location: "Ouest Cameroun",
      category: "Culturel",
      featured: true,
      includes: ["Guide local francophone", "Hébergement chez l'habitant", "Repas traditionnels", "Cérémonie d'accueil"]
    },
    {
      id: 2,
      title: "Aventure en Forêt Équatoriale",
      description: "Expédition écologique dans la forêt du Dja avec les peuples Baka, découverte de la médecine traditionnelle et observation de la biodiversité",
      price: 920,
      duration: "8 jours",
      location: "Sud Cameroun",
      category: "Écotourisme",
      featured: true,
      includes: ["Guide Baka", "Campement écologique", "Safari nocturne", "Initiation à la chasse traditionnelle"]
    },
    {
      id: 3,
      title: "Saga des Monts Mandara",
      description: "Randonnée culturelle dans les monts Mandara à la rencontre des peuples Kapsiki et Mofu, paysages lunaires et architecture unique",
      price: 680,
      duration: "6 jours",
      location: "Extrême-Nord",
      category: "Aventure",
      includes: ["Guide de montagne", "Rencontres villageoises", "Atelier poterie", "Nuit en case traditionnelle"]
    }
  ];

  // Témoignages
  const testimonials = [
    {
      id: 1,
      name: "Sophie et Marc Dubois",
      origin: "Lyon, France",
      text: "Notre voyage dans l'Ouest Cameroun a été une révélation. L'accueil dans les chefferies Bamiléké était incroyablement chaleureux. Une authenticité rare de nos jours !",
      rating: 5,
      trip: "Circuit Culturel Ouest",
      avatar: "👨‍👩‍👧"
    },
    {
      id: 2,
      name: "Thomas Weber",
      origin: "Berlin, Allemagne",
      text: "L'expérience avec le peuple Baka en forêt équatoriale a changé ma vision du voyage. Un respect profond pour ces gardiens de la forêt et leurs connaissances ancestrales.",
      rating: 5,
      trip: "Écotourisme Sud",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      origin: "Madrid, Espagne",
      text: "Les paysages de l'Extrême-Nord sont à couper le souffle. Les couchers de soleil sur les monts Mandara valent à eux seuls le voyage. Organisation impeccable !",
      rating: 5,
      trip: "Randonnée Nord",
      avatar: "👩‍🎓"
    }
  ];

  // Faits intéressants
  const facts = [
    { number: "250+", text: "Groupes ethniques vivant en harmonie" },
    { number: "400+", text: "Espèces de mammifères différentes" },
    { number: "90%", text: "De satisfaction de nos voyageurs" },
    { number: "5", text: "Zones climatiques différentes" }
  ];

  // Rotation automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="home premium-home">
      {/* Hero Section Améliorée */}
      <HeroSection 
        title="Le Cameroun, l'Afrique en Miniature"
        subtitle="Découvrez un pays aux 250 ethnies, 5 zones climatiques et une diversité culturelle exceptionnelle. Des expériences authentiques qui transforment le voyage en aventure humaine."
        showButton={true}
        buttonText="Découvrir nos expériences uniques"
      />

      {/* Section Chiffres Clés */}
      <section className="facts-section">
        <div className="container">
          <div className="facts-grid">
            {facts.map((fact, index) => (
              <div key={index} className="fact-card">
                <div className="fact-number">{fact.number}</div>
                <div className="fact-text">{fact.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi le Cameroun */}
      <section className="why-cameroon">
        <div className="container">
          <div className="section-header premium-header">
            <h2>Pourquoi Choisir le Cameroun ?</h2>
            <p>Un concentré de toutes les beautés de l'Afrique dans un seul pays</p>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🌍</div>
              <h3>Diversité Unique</h3>
              <p>Des plages de Kribi aux montagnes de l'Ouest, en passant par le désert du Nord, le Cameroun offre une incroyable variété de paysages</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">🎭</div>
              <h3>Culture Vivante</h3>
              <p>Rencontrez 250 ethnies aux traditions préservées, des chefferies Bamiléké aux peuples de la forêt équatoriale</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">🦁</div>
              <h3>Faune Exceptionnelle</h3>
              <p>Parcs nationaux riches en biodiversité avec éléphants, lions, gorilles et une avifaune parmi les plus diversifiées d'Afrique</p>
            </div>
            
            <div className="reason-card">
              <div className="reason-icon">🍍</div>
              <h3>Gastronomie</h3>
              <p>Découvrez une cuisine métissée alliant saveurs locales et influences européennes, avec des produits frais et variés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Régions */}
      <section className="regions-section">
        <div className="container">
          <div className="section-header premium-header">
            <h2>Découvrez les Régions du Cameroun</h2>
            <p>Chaque région offre une expérience unique et authentique</p>
          </div>
          
          <div className="regions-grid">
            {cameroonRegions.map(region => (
              <div key={region.id} className="region-card" style={{ '--region-color': region.color }}>
                <div className="region-header">
                  <div className="region-icon">{region.image}</div>
                  <h3>{region.name}</h3>
                </div>
                <p className="region-description">{region.description}</p>
                <div className="region-highlights">
                  {region.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">✓ {highlight}</span>
                  ))}
                </div>
                <button className="region-explore-btn">Explorer cette région</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Offres Premium */}
      <section className="premium-offers">
        <div className="container">
          <div className="section-header premium-header">
            <h2>Nos Expériences Signature</h2>
            <p>Des voyages conçus pour une immersion totale dans la culture camerounaise</p>
          </div>
          
          <div className="offers-grid premium-grid">
            {popularOffers.map(offer => (
              <div key={offer.id} className="premium-offer-wrapper">
                <OfferCard offer={offer} />
                {offer.includes && (
                  <div className="offer-includes">
                    <h4>Ce prix comprend :</h4>
                    <ul>
                      {offer.includes.map((item, index) => (
                        <li key={index}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages Animés */}
      <section className="animated-testimonials">
        <div className="container">
          <div className="section-header premium-header">
            <h2>Ils Ont Découvert le Cameroun</h2>
            <p>Les expériences authentiques de nos voyageurs</p>
          </div>
          
          <div className="testimonials-container">
            <div className="testimonial-active">
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p>{testimonials[currentTestimonial].text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonials[currentTestimonial].avatar}</div>
                  <div className="author-details">
                    <strong>{testimonials[currentTestimonial].name}</strong>
                    <span>{testimonials[currentTestimonial].origin}</span>
                    <div className="trip-info">{testimonials[currentTestimonial].trip}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonials-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Premium */}
      <section className="premium-cta">
        <div className="container">
          <div className="cta-content premium-cta-content">
            <h2>Prêt pour l'Aventure Camerounaise ?</h2>
            <p>Rejoignez nos voyageurs satisfaits à 90% et vivez une expérience qui transformera votre vision de l'Afrique</p>
            <div className="cta-features">
              <span>✓ Accompagnement 24/7</span>
              <span>✓ Guides locaux francophones</span>
              <span>✓ Impact positif vérifié</span>
            </div>
            <div className="cta-actions premium-actions">
              <a href="/offers" className="btn btn-primary btn-large">Planifier mon voyage</a>
              <a href="/contact" className="btn btn-outline btn-large">Consultation gratuite</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dernier appel à l'action */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content">
            <h3>🌍 Le Cameroun Vous Attend</h3>
            <p>Ne laissez pas cette opportunité unique de découvrir l'Afrique authentique passer</p>
            <a href="/contact" className="btn btn-secondary">Parler à un expert</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;