import CardProjetos from '../../components/CardProjetos/CardsProjetos';
import "./Mobile.modules.css";
import Cabecalho from '../../components/Cabecalho/Cabecalho'
const Mobile = () => {
  return (
    <>
      <Cabecalho headerHome="/portfolio-react#Home" headerSobre="/portfolio-react#Sobre" headerProjetos="/portfolio-react#Projetos" headerExperiencia="/portfolio-react#Experiencia" headerHabilidades="/portfolio-react#Habilidades" headerContatos="/portfolio-react#Contatos" />

      <section id="Mobile" className="Project">

        <h2>Projetos Mobile</h2>

        <div className='CardsProjects'>
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/King-of-Computing-App-2"} link={"https://github.com/guilherme23x/King-of-Computing-App-2"} imgproject={"https://guilherme23x.github.io/Portfolio/img/KingOfComputing.png"} titulo={"K.O.C"} info={"Do projeto King of Computing, com nova interface e usabilidade.(React Native)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/TG-Burguer"} link={"https://github.com/guilherme23x/TG-Burguer"} imgproject={"https://guilherme23x.github.io/Portfolio/img/TGBurguer.png"} titulo={"TG Burguer"} info={"Um app de Hamburgueria para uma empresa de fast-food.(React Native)"} />
          <CardProjetos linkcodigo={"https://github.com/NaahSchmitt/Nayza"} link={"https://github.com/NaahSchmitt/Nayza"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Nayza.png"} titulo={"Nayza"} info={"Projeto de restaurante e menu de cardápio em um só app.(React Native)"} />

        </div>
      </section>
    </>
  );

}

export default Mobile;