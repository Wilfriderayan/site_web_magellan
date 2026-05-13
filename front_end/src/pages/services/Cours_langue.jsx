import './cour_langue.css'
import {motion} from 'framer-motion'
import { BsBookHalf} from 'react-icons/bs';
const niveaux = [
  {
    id: 1,
    titre: "Niveau A1 - Débutant",
    desc: "Apprenez les bases : se présenter, poser des questions simples et comprendre des expressions quotidiennes.",
    img: "/assets/langue-a1.jpg",
    details: ["Grammaire de base", "Vocabulaire usuel", "Prononciation"]
  },
  {
    id: 2,
    titre: "Niveau A2 - Élémentaire",
    desc: "Communiquez sur des tâches simples et exprimez vos besoins immédiats avec plus d'assurance.",
    img: "/assets/langue-a2.jpg",
    details: ["Échanges sociaux", "Passé/Futur proche", "Compréhension orale"]
  },
  {
    id: 3,
    titre: "Niveau B1 - Intermédiaire",
    desc: "Devenez autonome pour voyager et raconter des événements, des rêves ou des projets.",
    img: "/assets/langue-b1.jpg",
    details: ["Argumentation", "Rédaction de textes", "Débats"]
  },
  {
    id: 4,
    titre: "Niveau B2 - Avancé",
    desc: "Le niveau requis pour l'université ou le travail. Comprenez des sujets complexes et parlez couramment.",
    img: "/assets/langue-b2.jpg",
    details: ["Langage technique", "Nuances de langue", "Préparation examens"]
  }
];

const Cours_langue = () => {
    return(
        <>
            <div className="cours-page">
                <section className="cours-hero">
                    <h1>Nos Cours de Langues</h1>
                    <p>Maîtrisez l'Allemand ou le Chinois avec nos experts.</p>
                </section>

                <section className="niveaux-container container">
                    {niveaux.map((niv, index) => (
                    <motion.div 
                        className={`niveau-card ${index % 2 !== 0 ? 'reverse' : ''}`}
                        key={niv.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="niv-image">
                            <img src={niv.img} alt={niv.titre} />
                        </div>
                        <div className="niv-text">
                            <span className="badge">Étape {niv.id}</span>
                            <h2>{niv.titre}</h2>
                            <p>{niv.desc}</p>
                            <ul>
                                {niv.details.map((item, i) => (
                                <li key={i}><BsBookHalf className="list-icon" /> {item}</li>
                                ))}
                            </ul>
                            <button className="btn-inscription">S'inscrire</button>
                        </div>
                    </motion.div>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Cours_langue;