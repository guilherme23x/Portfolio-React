import styles from './Header.module.css'
import stylesGeral from '../CSS_Geral/Geral.module.css'
import Sobre from '../Sobre'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/"><a href="" class="tituloNav">Guilherme</a></Link>
        <ul class="linksNav">
          <li><Link to="/sobre">Sobre</Link> </li>
          <li><Link to="/projetos">Projetos</Link> </li>
          <li><Link to="/projetos">Habilidades</Link> </li>
          <li><Link to="/projetos">Contatos</Link> </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;