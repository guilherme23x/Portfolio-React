import './Projetos.modules.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEarthAmerica, faDesktop, faPen } from '@fortawesome/free-solid-svg-icons';
import Cards from '../../components/CardsProjetosHome/Cards';



function Projetos() {
  return (

    <section id="Projetos" class="projetos">
      <h2>Projetos</h2>

      <div className='Cartoes'>
        <Cards icone={faEarthAmerica} titulo={"Web"} info={"Interfaces simples com um belo propósito de interação"} />
        <Cards icone={faMobile} titulo={"Mobile"} info={"Interfaces simples com um belo propósito de interação"} />
        <Cards icone={faDesktop} titulo={"Desktop"} info={"Interfaces simples com um belo propósito de interação"} />
        <Cards icone={faPen} titulo={"Desenhos"} info={"Interfaces simples com um belo propósito de interação"} />
      </div>
    </section>

  );

}

export default Projetos;