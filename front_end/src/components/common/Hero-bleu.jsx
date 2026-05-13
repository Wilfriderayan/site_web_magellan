import { motion } from 'framer-motion';
import './hero-bleu.css';
 let h1_hero, p_hero
function Hero_bleu (h1_hero,p_hero) {
     return(
     <>{/* 1. Header Hero */}
        <section className="about-hero">
            <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            >
            {h1_hero}
            </motion.h1>
            <p className="slogan">{p_hero}</p>
        </section>
     </>
)}
export default Hero_bleu;