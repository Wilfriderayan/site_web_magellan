
import './hero.css';
import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import chine from '../../../assets/african-student-china.png'; // Imagine une image de voyageur/étudiant
import allemagne from '../../../assets/health-formation.png';
import accper from '../../../assets/touristic-business.png';

const slides = [
  {
    id: 1,
    title: "Étudiez en Chine",
    description: "Obtenez une Licence, un Master ou un PHD Doctorat à travers les bourses d'etudes dénichées dans les meilleures universités chinoises",
    image: chine,
    color: "#d63031",
    textButton: "je postule"
  },
  {
    id: 2,
    title: "Formation en Allemagne",
    description: "Nous prefinançons votre voyage en Allemagne pour une formation professionnelle rémunérée (Ausbildung), vous nous rembourserez une fois sur place",
    image: allemagne,
    color: "#871f03",
    textButton: "Je m'inscrire"
  },
  {
    id: 3,
    title: "Accompagnement personnalisé",
    description: "Nous vous accompagnons dans toutes vos procédures de visa et de voyage.",
    image: accper,
    color: "#0068b7",
    textButton: "Je prends rendez-vous"  
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Pour faire défiler automatiquement toutes le 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
        <section className="hero-slider">
            <AnimatePresence mode="wait">
                <motion.div
                key={slides[current].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="slide"
                style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[current].image})`}}
                >
                {/*linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), */}
                <div className="slide-content">
                    <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    data-slide={slides[current].id}
                    >
                    {slides[current].title}
                    </motion.h1>
                    
                    <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    data-slide={slides[current].id}
                    >
                    {slides[current].description}
                    </motion.p>

                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn-cta"
                    style={{ backgroundColor: slides[current].color }}
                    >
                    {slides[current].textButton}
                    </motion.button>
                </div>
                </motion.div>
            </AnimatePresence>
        </section>
        {/*<div className="slider-dots">
            {slides.map((slide, index) => (
                <button
                key={slide.id}
                className={`dot ${current === index ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                />
            ))}
        </div> */}
    </>
  );
};

export default HeroSlider;