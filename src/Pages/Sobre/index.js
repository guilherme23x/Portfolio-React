import styles from './Sobre.module.css'
import stylesGeral from '../CSS_Geral/Geral.module.css'
import imgPerfil from '../Imagens/Perfil.jpg'
import Header from '../Header';

function Sobre() {
  return (
    <>
    <Header/>
    <section id="Sobre" className={styles.sobre}>
      <img src={imgPerfil} alt="Imagem de Perfil" />
      <div class="textoSobre">
        <h2>Sobre</h2>
        <p>
          Olá, sou Guilherme, tenho 19 anos e gosto de desenvolver interfaces
          <span> Web </span> usando <span>HTML/CSS/Javascript</span> com o
          propósito de deixar tudo fácil e intuítivo para o usuário, deixar a
          melhor experiência caso ele acesse várias vezes por necessitar.
          Tenho um Hobby de <span>Desenhar</span> diversas coisas, tanto
          carros quanto personagens (realista, animes e desenhos animados)
          dedicando ao máximo e aprendendo com os erros.
        </p>
      </div>
    </section>
    </>
  );
}

export default Sobre;