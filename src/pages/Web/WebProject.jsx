import CardProjetos from '../../components/CardProjetos/CardsProjetos';
import "./WebProject.modules.css";
import Cabecalho from '../../components/Cabecalho/Cabecalho';

const WebProject = () => {
  return (
    <>
      <Cabecalho headerHome="/portfolio-react#Home" headerSobre="/portfolio-react#Sobre" headerProjetos="/portfolio-react#Projetos" headerExperiencia="/portfolio-react#Experiencia" headerHabilidades="/portfolio-react#Habilidades" headerContatos="/portfolio-react#Contatos" />
      <section id="Webproject" className="Project">

        <h2>Projetos Web</h2>

        <div className='CardsProjects'>
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Rufus"} link={"https://guilherme23x.github.io/Rufus/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Rufus.png"} titulo={"Rufus"} info={" Uma landing-page de um programa para formatar o Computador.(HTML/CSS)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Fafa-Belem"} link={"https://guilherme23x.github.io/Fafa-Belem/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Par%C3%A1.png"} titulo={"Pará"} info={" Projeto feito para mostrar um pouco de um lugar e uma cantora fantástica. (HTML/CSS)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Xpress-coffe"} link={"https://guilherme23x.github.io/Xpress-coffe/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Caf%C3%A9.png"} titulo={"Xpress-Coffe"} info={" Uma cafeteria com a barra de menu na lateral direita.(HTML/CSS/JS)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/New-Google"} link={"https://guilherme23x.github.io/New-Google/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/NewGoogle.png"} titulo={"New-Google"} info={" Redesign da página Google, com efeitos e barra de pesquisa funcional. (HTML/CSS/JS)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Cubo"} link={"https://guilherme23x.github.io/Cubo/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Cubo.png"} titulo={"Cubo-3D"} info={" Atividade feita no curso de html/css, usando o eixo Z dando profundidade. (HTML/CSS)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Eyedropper"} link={"https://guilherme23x.github.io/Eyedropper/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Eyedropper.png"} titulo={"Eyedropper"} info={" Uma página onde terá um dos melhores conta gotas para Windows. (HTML/CSS/JS)"} />

        </div>
      </section>
    </>
  );

}

export default WebProject;