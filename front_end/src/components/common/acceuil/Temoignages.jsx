// import React from 'react';
// import { motion } from 'framer-motion';
// import { AiFillStar } from 'react-icons/ai'; // Pour les étoiles
// import './temoignage.css';


// const Testimonials = () => {
//   return (
//     <section className="testi-section">
//       <div className="container">
//         <div className="testi-header">
//           <h2>Ils nous ont fait confiance</h2>
//           <div className="stars-top">
//             <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
//           </div>
//         </div>

//         <div className="testi-grid">
//           {testimonials.map((item, index) => (
//             <motion.div 
//               className="testi-card"
//               key={item.id}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="quote-icon">“</div>
//               <p className="testi-text">{item.text}</p>
//               <div className="testi-profile">
//                 <img src={item.img} alt={item.name} className="testi-avatar" />
//                 <div className="testi-info">
//                   <h4>{item.name}</h4>
//                   <span>{item.status}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
// useCallback pour optimiser les performances 
import { useState, useEffect, useCallback } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './temoignage.css';

const testimonials = [
  {
    id: 1,
    name: "Samuel E.",
    status: "Étudiant en Ingénierie - Chine",
    text: "Grâce à Magellan, j'ai obtenu une bourse complète. L'accompagnement pour le visa a été impeccable.",
    img: "/assets/testi-1.jpg"
  },
  {
    id: 2,
    name: "Marie-Louise M.",
    status: "Ausbildung Infirmière - Allemagne",
    text: "Je suis arrivée en Allemagne sereine. Magellan s'est occupé de tout, même de mon logement.",
    img: "/assets/testi-2.jpg"
  },
  {
    id: 3,
    name: "Christian T.",
    status: "Parent d'élève",
    text: "Une équipe sérieuse et transparente. Mon fils est aujourd'hui dans une grande école à Shanghai.",
    img: "/assets/testi-3.jpg"
  },
  {
    id: 4,
    name: "Christian T.",
    status: "Parent d'élève",
    text: "Une équipe sérieuse et transparente. Mon fils est aujourd'hui dans une grande école à Shanghai.",
    img: "/assets/testi-3.jpg"
  }
];
const Temoignages = () => {
  const [index, setIndex] = useState(0);

  // On utilise useCallback pour que la fonction "next" soit stable
  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // --- LE TIMER ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000); // Change de slide toutes les 6 secondes

    // TRÈS IMPORTANT : On nettoie le timer si le composant est démonté
    // ou si l'index change, pour éviter les bugs de superposition.
    return () => clearInterval(timer);
  }, [nextStep, index]);

  return (
    <section className="testi-section">
      <div className="testi-container">
        <h2>Ce que disent nos étudiants</h2>
        
        <div className="slider-wrapper">
          <button className="nav-btn prev" onClick={prevStep} aria-label="Précédent">
            <AiOutlineLeft />
          </button>

          <div className="testi-card-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="testi-card slider-card"
              >
                <div className="stars">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
                <p>"{testimonials[index].text}"</p>
                <div className="profile">
                  <img src={testimonials[index].img} alt={testimonials[index].name} />
                  <div>
                    <h4>{testimonials[index].name}</h4>
                    <span>{testimonials[index].status}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className="nav-btn next" onClick={nextStep} aria-label="Suivant">
            <AiOutlineRight />
          </button>
          
        </div>
        
        <div className="progress-container">
          <motion.div
            key={index} // Se réinitialise à chaque changement de slide
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }} // Doit correspondre à la durée de ton timer
            className="progress-bar"
          />
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <span 
              key={i} 
              className={`dot ${i === index ? 'active' : ''}`} 
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Temoignages;