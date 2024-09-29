import React from 'react';
import './Habilidades.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3, faJs, faPython, faWindows } from '@fortawesome/free-brands-svg-icons';

function Habilidades() {
  return (
    <section className='habilidades' id='Habilidades'>
      <h2>Habilidades</h2>
      <div className='minhasHabili'>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faReact} />
          <span className="tooltiptext">React</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faHtml5} />
          <span className="tooltiptext">HTML5</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faCss3} />
          <span className="tooltiptext">CSS3</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faJs} />
          <span className="tooltiptext">JavaScript</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faPython} />
          <span className="tooltiptext">Python</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faWindows} />
          <span className="tooltiptext">Windows</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faBook} />
          <span className="tooltiptext">Desenhar</span>
        </div>
        <div className="tooltip">
          <FontAwesomeIcon className='iconeHabi' icon={faChartColumn} />
          <span className="tooltiptext">Power BI</span>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;