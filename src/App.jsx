// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Blog from './pages/Blog';
import Account from './pages/Account';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
<Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;