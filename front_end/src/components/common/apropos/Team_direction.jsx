import './team_direction.css';
import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion'

const Team_direction = () => {
    return (
        <>
            {/* --- 5. SECTION DIRECTION / PDG --- */}
            <section className="team-section container">
            <div className="section-title">
                <h2>Nos Dirigeants</h2>
                <p>Une équipe visionnaire pour vous accompagner.</p>
            </div>

            <div className="team-grid">
                {/* Carte du PDG */}
                <motion.div 
                    className="team-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    >
                    <div className="team-img-container">
                        <img src="/assets/pdg.jpg" alt="PDG Magellan Travel" />
                    </div>
                    <div className="team-info">
                        <h4>M. NGANSOP WATAT </h4>
                        <span>Co Fondateur & President Directeur Général</span>
                        <div className="team-social">
                        {/* Tu peux mettre des liens LinkedIn ici */}
                        </div>
                    </div>
                </motion.div>
                {/* Carte du PDG */}
                <motion.div 
                    className="team-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    >
                    <div className="team-img-container">
                        <img src="/assets/pdg.jpg" alt="PDG Magellan Travel" />
                    </div>
                    <div className="team-info">
                        <h4>M. KUATE CHOUPO Gabriel</h4>
                        <span>Directeur des Operations</span>
                        <div className="team-social">
                        {/* Tu peux mettre des liens LinkedIn ici */}
                        </div>
                    </div>
                </motion.div>

                {/* Si il y a un deuxième dirigeant, tu dupliques la carte ici */}
            </div>
            </section>
        </>
    )
}
export default Team_direction;