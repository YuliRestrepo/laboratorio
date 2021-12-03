import {Routes,Route} from 'react-router-dom';

import Home from './pages/home';
import Nosostros from './pages/nosotros';
import Vacunas from './pages/vacunas';
import Examenes from './pages/examenes';
import Login from './pages/login';
import Registro from './pages/registro';



function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosostros />} />
        <Route path="/vacunas" element={<Vacunas />} />
        <Route path="/examenes" element={<Examenes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>    
  );
}

export default App;
