import './Projetos.modules.css'
import { faMobile, faEarthAmerica, faDesktop, faPen } from '@fortawesome/free-solid-svg-icons';
import CardsHome from '../../components/CardsProjetosHome/CardsHome';
import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';

const Projetos = () => {
  return (
    <section id="Projetos" class="projetos">
      <h2>Projetos</h2>

      <div className='Cartoes'>
        <Link to={"/Projetos-Web"}> <CardsHome icone={faEarthAmerica} titulo={"Web"} info={"Interfaces simples com um belo propósito de interação"} /></Link>
        <CardsHome icone={faMobile} titulo={"Mobile"} info={"Interfaces simples com um belo propósito de interação"} />
        <CardsHome icone={faDesktop} titulo={"Desktop"} info={"Interfaces simples com um belo propósito de interação"} />
        <CardsHome icone={faPen} titulo={"Desenhos"} info={"Interfaces simples com um belo propósito de interação"} />
      </div>
    </section>

  );

}

export default Projetos;