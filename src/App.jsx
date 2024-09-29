import './App.modules.css';
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Experiencia from './components/Experiencia/Experiencia';
import Habilidades from './components/Habilidades/Habilidades';
import Contatos from './components/Contatos/Contatos';



function App() {
  return (
    <>
      <Cabecalho />
      <Home />
      <Sobre />
      <Projetos />
      <Experiencia />
      <Habilidades/>
      <Contatos/>
    </>
  );
}

export default App;
