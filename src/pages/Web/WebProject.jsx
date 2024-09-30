import CardProjetos from '../../components/CardProjetos/CardsProjetos';
import "./WebProject.modules.css";

const WebProject = () => {
  return (
    <>
      <section id="Webproject" className="Project">


        <h2>Projetos Web</h2>

        <div className='CardsProjects'>
          <CardProjetos  linkcodigo={"https://github.com/guilherme23x/Rufus"} link={"https://guilherme23x.github.io/Rufus/"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Rufus.png"} titulo={"Rufus"} info={" Uma landing-page de um programa para formatar o Computador.(HTML/CSS)"} />
          <CardProjetos linkcodigo={""} link={""} imgproject={"https://guilherme23x.github.io/Portfolio/img/Par%C3%A1.png"} titulo={"Pará"} info={" Projeto feito para mostrar um pouco de um lugar e uma cantora fantástica. (HTML/CSS)"} />
          <CardProjetos linkcodigo={""} link={""} imgproject={"https://guilherme23x.github.io/Portfolio/img/Caf%C3%A9.png"} titulo={"Xpress-Coffe"} info={" Uma cafeteria com a barra de menu na lateral direita.(HTML/CSS/JS)"} />
          <CardProjetos linkcodigo={""} link={""} imgproject={"https://guilherme23x.github.io/Portfolio/img/NewGoogle.png"} titulo={"New-Google"} info={" Redesign da página Google, com efeitos e barra de pesquisa funcional. (HTML/CSS/JS)"} />
          <CardProjetos linkcodigo={""} link={""} imgproject={"https://guilherme23x.github.io/Portfolio/img/Cubo.png"} titulo={"Cubo-3D"} info={" Atividade feita no curso de html/css, usando o eixo Z dando profundidade. (HTML/CSS)"} />
          <CardProjetos linkcodigo={""} link={""} imgproject={"https://guilherme23x.github.io/Portfolio/img/Eyedropper.png"} titulo={"Eyedropper"} info={" Uma página onde terá um dos melhores conta gotas para Windows. (HTML/CSS/JS)"} />

        </div>
      </section>
    </>
  );

}

export default WebProject;