import './secondaryservices.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaPassport, FaLanguage, FaPlaneArrival } from 'react-icons/fa'; // On utilise react-icons

const services = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "Orientation Académique",
    desc: "Conseil dans le choix de l'université et de la filière selon votre profil et vos ambitions.",
    textButton: "Je m'inscrit",
    color: "brown"
  },
  {
    id: 2,
    icon: <FaPassport />,
    title: "Accompagnement dans toutes vos procedures de Visa",
    desc: "Nous vous accompagnons dans toutes vos procédures jusqu'à l'obtention de votre visa",
    textButton: "J'ouvre un dossier",
    color: "blue"
  },
  {
    id: 3,
    icon: <FaLanguage />,
    title: "Cours de Langue (Allemande,Italien) ",
    desc: "cours accélérés, sessions preparatoires sur mesures pour la reussite de vos test de langues.",
    textButton: "Je m'inscrit",
    color: "#871f03"
  },
  {
    id: 4,
    icon: <FaPlaneArrival />,
    title: "Billets d'avions",
    desc: "nous vous proposons les meilleures offres tarrifaires pour vos destination dans le monde ",
    textButton: "Je reserve mon Billet",
    color: "green"
  }
];

const Secondaryservices = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span>Notre Expertise</span>
          <h2>Un accompagnement de A à Z</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon" style={{color: service.color}}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className='justify'>{service.desc}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="service-button"
                style={{ backgroundColor: service.color }}
              >
                {service.textButton}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secondaryservices;