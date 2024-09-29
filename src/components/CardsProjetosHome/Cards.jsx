import './Cards.modules.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faM, faMobile } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
  return (

    <div class="cardsProjetos">
      <a href={props.link}>
        <div className="cardProjeto">
          <div className="cardGradiente"></div>
          <FontAwesomeIcon className='icone' icon={props.icone} />
          <div className="containerCardProjeto">
            <h3 className='tituloProjetos'>{props.titulo}</h3>
            <p className='sobreCard'>{props.info}</p>
          </div>
        </div>
      </a>
    </div>

  );

}

export default Cards;