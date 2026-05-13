import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Accueil from './pages/Acceuil';
import APropos from './pages/A_propos';
import Cours_langue from './pages/services/Cours_langue';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/aPropos" element={<APropos />} />
        <Route path='/Services'>
          <Route path='Cours_Langue/' element={<Cours_langue/>}/>
        </Route>
        {/* Plus tard, tu ajouteras : <Route path="/chine" element={<Chine />} /> */}
      </Routes>
      <Sidebar />
    </Router>
  );
}
export default App;