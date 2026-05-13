// Importation de la bibliothèque React pour créer des composants
import React from 'react';
// Importation du fichier CSS spécifique à ce composant pour le style
import './sidebar.css';
// Importation du logo Magellan depuis le dossier assets avec le chemin relatif corrigé
import logo from '../../assets/logo_magellan.png';

function Sidebar(params) {
    return (
        <footer>
            <div className="footer-header">
                <div className="aPropos col-3 align-items-justify">
                    <img src={logo} alt="Logo Magellan" width={150}/>
                    <p>Magellan Travel est une agence de promotion des voyages d'études, d'affaires et de tourisme à l'étranger.</p>
                    <div className="preheader-socials">
                        <a href="https://www.tiktok.com/@magellantravels2" className="ph-soc"><i className="bi bi-tiktok"></i></a>
                        <a href="https://www.instagram.com/magellantravel2024" className="ph-soc"><i className="bi bi-instagram"></i></a>
                        <a href="https://wa.me/237658113745" className="ph-soc"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://www.facebook.com" className="ph-soc"><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
                <div className="service col-5">
                    <p>Nos Services</p>
                    <ul>
                        <li><a href="#bourses">Bourses d'études</a></li>
                        <li><a href="#cours">Cours de langues</a></li>
                        <li><a href="#formations">Formations professionnelles</a></li>
                        <li><a href="#procedures">Initiation aux procédures administratives</a></li>
                        <li><a href="#billeterie">Billeterie aérienne</a></li>
                    </ul>
                </div>
                <div className="contact col-4">
                    <p>Nous contacter</p>
                    <a href="#contact">Contacts des agences</a>
                    <form action="" className="newsletter">
                        <h4>Newsletter</h4>
                        <input type="email" placeholder="Votre email" />
                        <textarea name="message" id="message" placeholder="Votre message"></textarea>
                        <button>S'inscrire</button>
                    </form>    
                </div>
            </div>
            <div className="footer-bottom container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <p>Copyright © 2025 Magellan. Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Sidebar;