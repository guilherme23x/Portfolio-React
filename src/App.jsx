import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WebProject from './pages/Web/WebProject';
import Mobile from './pages/Mobile/Mobile';
import Desktop from './pages/Desktop/Desktop'
import Desenhos from './pages/Desenhos/Desenhos';
import Erro from './pages/Erro/ErroPagina';

function App() {
  return (
    <Routes>
      <Route path='/portfolio-react/*' element={<Erro />} />
      <Route path='/portfolio-react/' element={<HomePage />} />
      <Route path='/portfolio-react/web' element={<WebProject />} />
      <Route path='/portfolio-react/mobile' element={<Mobile />} />
      <Route path='/portfolio-react/desktop' element={<Desktop />} />
      <Route path='/portfolio-react/desenhos' element={<Desenhos />} />
    </Routes>
  );
}

export default App;