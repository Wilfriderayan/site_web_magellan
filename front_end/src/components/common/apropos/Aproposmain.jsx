import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircleFill, BsAwardFill, BsGlobe2, BsSend, BsBook, BsGlobe, BsPersonBadge } from 'react-icons/bs';
import './aproposmain.css';
import consulting from '../../../assets/consultancy-magellan.png'
import Hero_bleu from '../Hero-bleu';
import Team_direction from './Team_direction';
let h1_hero="A propos de Magellan Travel"
let p_hero = "Agence de promotion des voyages d'etudes, d'affaire et de tourisme a l'etranger."
const Aproposmain = () => {
  return (
    <div className="aproposmain-page">
      <Hero_bleu h1_hero={h1_hero} p_hero />

      {/* 2. Mission & Image Visuelle */}
      <section className="about-content container">
        <div className="about-grid">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            
            <div className="image-placeholder">
                <img src={consulting} alt="Équipe Magellan" />
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Notre Mission</h2>
            <p>
              Chez <strong>Magellan Travel</strong>, nous croyons que chaque voyage est une opportunité 
              et que chaque apprentissage est une porte ouverte vers l’avenir. Notre mission est de 
              faciliter la mobilité académique, culturelle et professionnelle pour tous ceux qui 
              rêvent d’élargir leurs horizons.
            </p>
            
            <ul className="values-simple-list">
              <li><BsCheckCircleFill className="icon" /> Accompagnement personnalisé</li>
              <li><BsAwardFill className="icon" /> Centre de cours de langue achat de billets d'avion</li>
              <li><BsGlobe2 className="icon" /> Réseau de partenaires internationaux</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. Grille d'Expertise */}
      <section className="expertise-section container">
        <div className="expertise-grid">
            <div className="expertise-item">
                <BsSend className="exp-icon" />
                <h4>Billetterie aérienne</h4>
            </div>
            <div className="expertise-item">
                <BsBook className="exp-icon" />
                <h4>Institut de langue</h4>
            </div>
            <div className="expertise-item">
                <BsGlobe className="exp-icon" />
                <h4>Immigration & Bourses</h4>
                <small>Chine, Europe & Canada</small>
            </div>
            <div className="expertise-item">
                <BsPersonBadge className="exp-icon" />
                <h4>Centre de formation</h4>
            </div>
        </div>
      </section>

      {/* 4. Section Valeurs (Le bloc bleu) */}
      <section className="values-dark-section">
        <div className="container">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
                <div className="value-card">
                    <h5>Professionnalisme</h5>
                    <p>Un service de qualité, transparent et efficace.</p>
                </div>
                <div className="value-card">
                    <h5>Confiance</h5>
                    <p>Un accompagnement fiable et un suivi personnalisé.</p>
                </div>
                <div className="value-card">
                    <h5>Ouverture</h5>
                    <p>La diversité culturelle comme moteur de réussite.</p>
                </div>
                <div className="value-card">
                    <h5>Engagement</h5>
                    <p>Votre projet devient notre priorité.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Section Chiffres (Stats) */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>+150</h3>
          <p>Étudiants placés</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Succès Visa</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Assistance</p>
        </div>
      </section>
      <Team_direction/>
      {/* 6. Conclusion */}
      <section className="about-footer-text container">
          <p>
            Avec nous, vous n’êtes jamais seul dans votre parcours. Que vous cherchiez à étudier, 
            à voyager ou à réussir vos affaires, nous rendons votre expérience fluide et enrichissante.
          </p>
      </section>
    </div>
  );
};

export default Aproposmain;