// src/pages/Blog.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/Blog.css';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Le Tourisme Responsable en Afrique : Guide Complet",
      excerpt: "Découvrez comment voyager de manière responsable et respectueuse en Afrique...",
      category: "Conseils",
      date: "15 Nov 2024",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Rencontre avec les Communautés Locales au Cameroun",
      excerpt: "Immersion dans la vie quotidienne des populations locales et partage d'expériences...",
      category: "Témoignage",
      date: "8 Nov 2024",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "10 Choses à Savoir Avant un Safari en Tanzanie",
      excerpt: "Préparez votre safari en toute sérénité avec nos conseils pratiques...",
      category: "Guide",
      date: "1 Nov 2024",
      readTime: "6 min"
    }
  ];

  return (
    <div className="blog-page">
      <HeroSection 
        title="Blog & Actualités"
        subtitle="Conseils, récits de voyage et actualités du tourisme responsable"
        showButton={false}
      />

      <section className="blog-content">
        <div className="container">
          <div className="articles-grid">
            {articles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <div className="image-placeholder">
                    <span>📝 Article: {article.title}</span>
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="category">{article.category}</span>
                    <span className="date">{article.date}</span>
                    <span className="read-time">{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <button className="read-more">Lire la suite</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;