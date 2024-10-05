import React from 'react';
import './Contatos.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Contatos() {
  return (
    <section className='contatos' id='Contatos'>
      <div className='containerContatos'>
        <h2>Contatos</h2>
        <p>Estou ansioso para colaborar com você. Entre em contato para discutir projetos emocionantes e oportunidades criativas.</p>

        <div className='linksContatos'>

          <a href="https://github.com/guilherme23x" target='_blank'><div className="tooltip">
            <FontAwesomeIcon className='iconeHabi' icon={faGithub} />
            <span className="tooltiptext">Github</span>
          </div></a>

          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" target='_blank'><div className="tooltip">
            <FontAwesomeIcon className='iconeHabi' icon={faEnvelope} />
            <span className="tooltiptext">E-mail</span>
          </div></a>

          <a href="https://www.linkedin.com/in/guilherme-gomes-da-silva-87ab932a5/" target='_blank'><div className="tooltip">
            <FontAwesomeIcon className='iconeHabi' icon={faLinkedin} />
            <span className="tooltiptext">Linkedin</span>
          </div></a>

        </div>
      </div>
    </section>
  );
}

export default Contatos;