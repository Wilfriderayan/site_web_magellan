// Importation de la bibliothèque React pour créer des composants
import React from 'react';
// Importation du fichier CSS spécifique à ce composant pour le style
import './header.css';
// Importation du logo Magellan depuis le dossier assets avec le chemin relatif corrigé
import logo from '../../assets/logo_magellan.png';
import Hero from '../common/acceuil/Hero';
import HeroService from '../common/acceuil/Hero_service';
import Secondaryservices from '../common/acceuil/Secondaryservices';
import Temoignages from '../common/acceuil/Temoignages'
import { motion } from 'framer-motion';
// Importation des hooks React nécessaires pour la gestion du cycle de vie et des états
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Tableau contenant les informations de toutes les agences Magellan
// Chaque objet représente une agence avec ses coordonnées complètes
const agencies = [
  // Agence de Douala - Cameroun
  { city: "Douala",     country: "CM", address: " Makepe, Rpt Petit Pays,",      phone: "+237 658 113 745", color: "cm"  },
  // Agence de Yaoundé - Cameroun (couleur différente pour la distinction)
  { city: "Yaoundé",    country: "CM", address: "Quartier Bastos, Ave. Kennedy", phone: "+237 658 113 745", color: "cm2" },
  // Agence de N'Djamena - Tchad
  { city: "N'Djamena",  country: "TD", address: "Ave. Charles de Gaulle",        phone: "+235 000 000 000", color: "td"  },
  // Agence de Bangui - République Centrafricaine
  { city: "Bangui",     country: "RCA",address: "Ave. David Dacko, Centre-ville",phone: "+236 000 000 000", color: "rca" },
  // Commentaire pour ajouter facilement de nouvelles agences
];

// Constante définissant combien d'agences sont visibles simultanément dans le carrousel
const VISIBLE = 2;
// Constante définissant l'intervalle de temps (en millisecondes) entre chaque changement automatique du carrousel
// 5000ms = 5 secondes
const INTERVAL = 5000;

// Déclaration du composant principal PreHeader exporté par défaut
export default function PreHeader() {
  // Hook pour détecter la page active
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  // Hook d'état pour suivre l'index de la slide actuellement affichée (commence à 0)
  const [current, setCurrent] = useState(0);
  // Calcul du nombre total de slides nécessaires en divisant le nombre d'agences par le nombre visible
  // Math.ceil arrondit toujours vers le haut pour s'assurer que toutes les agences sont incluses
  const steps = Math.ceil(agencies.length / VISIBLE);
  // Hook useRef pour créer une référence persistante au timer qui ne provoque pas de re-rendu
  const timerRef = useRef(null);

  // Fonction pour naviguer directement vers une slide spécifique
  // Prend l'index de la destination et met à jour l'état 'current'
  const goTo = (idx) => setCurrent(idx);

  // Fonction pour réinitialiser et démarrer le timer du carrousel
  const resetTimer = (idx) => {
    // Arrête le timer précédent s'il existe pour éviter plusieurs timers simultanés
    clearInterval(timerRef.current);
    // Crée un nouveau timer qui s'exécute toutes les INTERVAL millisecondes
    timerRef.current = setInterval(() => {
      // Met à jour l'état 'current' en utilisant la valeur précédente (c)
      // L'opérateur modulo (%) permet de revenir à 0 après la dernière slide (boucle infinie)
      setCurrent(c => (c + 1) % steps);
    }, INTERVAL);
  };

  // Hook useEffect qui s'exécute une seule fois au montage du composant (tableau de dépendances vide [])
  useEffect(() => {
    // Démarre le timer automatique quand le composant est monté
    resetTimer();
    // Fonction de nettoyage qui s'exécute quand le composant est démonté
    // Empêche les fuites de mémoire en arrêtant le timer
    return () => clearInterval(timerRef.current);
  }, []); // Tableau vide = exécution unique au montage

  // Fonction pour gérer le clic sur les points de navigation du carrousel
  const handleDot = (i) => {
    // Navigue vers la slide correspondant au point cliqué
    goTo(i);
    // Réinitialise le timer pour redémarrer le défilement automatique
    resetTimer();
  };
    return (
        <>
            <header className="container-fluid preheader-wrapper">
                <section className="row align-items-center py-2">
                    <div className="col-3">
                        {/* Start Logo Area */}
                        <div className="logo-area">
                            <a href="" className="navbar-brand">
                                <img src={logo} alt="Logo Magellan" height="40"/>
                            </a>
                        </div>
                        {/* End Logo Area */}
                    </div>
                    <div className="preheader-inner col-6">

                    {/* Carrousel agences */}
                    <div className="preheader-left">
                        <span className="preheader-label">Nos agences</span>
                        <div className="carousel-track-wrap">
                        <div
                            className="carousel-track"
                            style={{ transform: `translateX(-${current * VISIBLE * 216}px)` }}
                        >
                            {agencies.map((a, i) => (
                            <div className="agency-card" key={i}>
                                <span className={`agency-dot dot-${a.color}`}></span>
                                <div className="agency-info">
                                <div className="agency-header">
                                    <span className="agency-city">{a.city}</span>
                                    <span className={`agency-country country-${a.color}`}>{a.country}</span>
                                </div>
                                <span className="agency-address">{a.address}</span>
                                <a href={`tel:${a.phone.replace(/\s/g,"")}`} className="agency-phone">
                                    {a.phone}
                                </a>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        <div className="carousel-dots">
                        {Array.from({ length: steps }).map((_, i) => (
                            <span
                            key={i}
                            className={`dot ${i === current ? "active" : ""}`}
                            onClick={() => handleDot(i)}
                            />
                        ))}
                        </div>
                    </div>

                    </div>
                    <div className="preheader-right col-4">
                        <a href="mailto:contact@magellantravel.org" className="ph-citem">
                        <i className="bi bi-envelope"></i> contact@magellantravel.org
                        </a>
                        <span className="ph-citem">
                        <i className="bi bi-clock"></i> Lun–Ven 8h–18h · Sam 9h–13h
                        </span>
                        <div className="preheader-socials">
                            <a href="https://www.tiktok.com/@magellantravels2" className="ph-soc"><i className="bi bi-tiktok"></i></a>
                            <a href="https://www.instagram.com/magellantravel2024" className="ph-soc"><i className="bi bi-instagram"></i></a>
                            <a href="https://wa.me/237658113745" className="ph-soc"><i className="bi bi-whatsapp"></i></a>
                            <a href="https://www.facebook.com" className="ph-soc"><i className="bi bi-facebook"></i></a>
                        </div>
                    </div>
                </section>
                {/* Start Header Bottom Area  */}
                <section className=" menus header-bottom header-shape sticky-header bg-white shadow-sm">
                    <div className="menus container-fluid">
                        <div className="menus row align-items-center py-3">
                            <div className=" d-none d-lg-block">
                                {/* Start Navigation Area */}
                                <nav className="menus navigation-area">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} >Accueil</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/aPropos" className={`nav-link ${isActive('/aPropos') ? 'active' : ''}`}>À propos</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                                Services
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" to="/Services/Cours_langue">Cours de langue</Link></li>
                                                <li><Link className="dropdown-item">Accompagnement pour l'obtention des bourses d'etudes</Link></li>
                                                <li><Link className="dropdown-item">Accompagnement dans les Procedures d'imigration</Link></li>
                                                <li><Link className="dropdown-item">Formation professionnel</Link></li>
                                                <li><Link className="dropdown-item">Vente de billets d'avions</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link">Bourses d'Etudes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link">Opportunités en Allemagne</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link  className="nav-link">Contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link">FAQ</Link>
                                        </li>
                                        <li className="nav-item">
                                            <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="btn-cta2"
                                            style={{ backgroundColor: "green" }}
                                            >
                                           Prendre rendez-vous
                                        </motion.button>
                                        </li>
                                    </ul>
                                </nav>
                                {/* End Navigation Area */}
                            </div>

                            <div className="col-7 col-lg-2">
                                {/* Start Header Action Area */}
                                <div className="header-action-area">
                                    <ul className="action-buttons nav justify-content-end">
                                        <li className="nav-item d-lg-none">
                                            <button className="btn btn-outline-secondary">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {/* End Header Action Area */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Header Bottom Area  */}
            </header>
            
        </>
    )
}