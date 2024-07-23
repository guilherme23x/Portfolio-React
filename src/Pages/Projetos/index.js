import styles from './Projetos.module.css'
import stylesGeral from '../CSS_Geral/Geral.module.css'
import Header from '../Header';
import Card from '../Card'
import { faEarthAfrica, faMobile, faDesktop, faCompassDrafting } from '@fortawesome/free-solid-svg-icons';

function Projetos() {
  return (
    <>
      <Header />
      <section id="Projetos" className={styles.projetos}>
        <h2>Projetos</h2>
        <div className={styles.cardsProjetos}>
          <Card iconeFont={faEarthAfrica} titulo="Sites" info="Sites feitos em Html/Css e um pouco de JavaScript" />
          <Card iconeFont={faMobile} titulo="Aplicativos" info="Interfaces simples com um belo propósito de interação" />
          <Card iconeFont={faDesktop} titulo="Desktop" info="Projetos feitos para aprender o uso do C# para desktop" />
          <Card iconeFont={faCompassDrafting} titulo="Desenhos" info="Desenhos feitos a mão como um Hobby de prazer" />

        </div>
      </section>
    </>
  );
}

export default Projetos;