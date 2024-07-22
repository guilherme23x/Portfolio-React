import styles from './Home.module.css'
import stylesGeral from '../CSS_Geral/Geral.module.css'
import Header from '../Header';

function Home() {
  return (
    <>
      <Header />
      <section className={styles.home}>

        <h1>Guilherme Gomes</h1>
        <h2>Front End & Minimalista</h2>
        <div class="seta"></div>
      </section>
    </>
  );
}

export default Home;