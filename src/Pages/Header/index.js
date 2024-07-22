import styles from './Header.module.css'
import stylesGeral from '../CSS_Geral/Geral.module.css'
import Sobre from '../Sobre'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <a href="" class="tituloNav">Guilherme</a>
        </Link>
        <ul class="linksNav">
          <li> <Link to="/sobre"><a>Sobre</a></Link> </li>
          <li><a href="#Projetos">Projetos</a></li>
          <li><a href="#Habilidades">Habilidades</a></li>
          <li><a href="#Contatos">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;