import Header from '../components/layouts/Header';
import Sidebar from '../components/layouts/Sidebar';
import './accueil.css';
import Temoignages from '../components/common/acceuil/Temoignages';
import Hero from '../components/common/acceuil/Hero';
import HeroService from '../components/common/acceuil/Hero_service';
import Secondaryservices from '../components/common/acceuil/Secondaryservices';
const Accueil = () => {
    return (
        <>
            <Header />
            <Hero />
            <HeroService />
            <Secondaryservices />
            <Temoignages />
            <Sidebar />
        </>
    );
};
export default Accueil;