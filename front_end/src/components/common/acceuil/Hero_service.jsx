import './hero_service.css';
import {motion} from 'framer-motion'// On importe motion
import chinaCard from '../../../assets/news-china.png';
import germanyCard from '../../../assets/professional-formation-2.png';

// ... (ton tableau destinations reste le même)

const destinations = [
  {
    id: 1,
    country: "Chine",
    title: "Bourses d'Études",
    desc: "Programmes couvrant totalement ou partiellement les frais de scolarité et logement sur le territoire chinois.",
    img: chinaCard,
    tags: ["Full Scholarship", "Hanyu Shuiping Kaoshi"],
    color: "#d63031",
    textButton: "Voir les details"
  },
  {
    id: 2,
    country: "Allemagne",
    title: "Formation Ausbildung",
    desc: "Formations professionelles alliant théorie et pratique avec remuneration a la clé",
    img: germanyCard,
    tags: ["Travail Rémunéré", "Langue Allemande"],
    color: "#871f03",
    textButton: "En savoir plus"
  }
];


const Destinations = () => {
  return (
    <section className="destinations-section">
      <div className="section-header">
        {/* On anime aussi le titre pour qu'il apparaisse en douceur */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos Destinations Favorites
        </motion.h2>
        <div className="underline"></div>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <motion.div 
            key={dest.id} 
            className="dest-card"
            // --- CONFIGURATION DE L'ANIMATION ---
            initial={{ opacity: 0, y: 50 }} // Départ : invisible et un peu plus bas
            whileInView={{ opacity: 1, y: 0 }} // Arrivée : visible et à sa place
            viewport={{ once: true, amount: 0.2 }} // Déclenche quand 20% de la carte est visible
            transition={{
              duration: 0.6,
              delay: index * 0.2 // Effet de cascade : les cartes arrivent l'une après l'autre
            }}
          >
            <div className="card-image" style={{ backgroundImage: `url(${dest.img})` }}>
              <div className="card-overlay">
                <span className="country-label" style={{ backgroundColor: dest.color }}>{dest.country}</span>
                <div className="card-content">
                    <h3>{dest.title}</h3>
                    <p>{dest.desc}</p>
                    <div className="tags">
                        {dest.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <button className="btn-explore">{dest.textButton}</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;