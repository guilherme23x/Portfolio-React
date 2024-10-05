import './CardsProjetos.modules.css';

function CardsProjetos(props) {
  return (

    <div class="cartoesProjects">
      <a href={props.link} target='_black' className='containerProjects'>
        <div className="cardProjects">
          <div className="cardGradienteProjects">
            <img className='imgProjects' src={props.imgproject} alt="" />
          </div>
          <div className="containerCardProjects">
            <h3 className='tituloProjects'>{props.titulo}</h3>
            <p className='sobreCardProjects'>{props.info}</p>
          </div>
        </div>
      </a>
      <a href={props.linkcodigo} target='_black' className='codigoProjects'>Código</a>
    </div>

  );

}

export default CardsProjetos;