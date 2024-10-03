import CardProjetos from '../../components/CardProjetos/CardsProjetos';
import "./Desktop.modules.css";
import Cabecalho from '../../components/Cabecalho/Cabecalho'
const Desktop = () => {
  return (
    <>
      <Cabecalho headerHome="/portfolio-react#Home" headerSobre="/portfolio-react#Sobre" headerProjetos="/portfolio-react#Projetos" headerExperiencia="/portfolio-react#Experiencia" headerHabilidades="/portfolio-react#Habilidades" headerContatos="/portfolio-react#Contatos" />

      <section id="Desktop" className="Project">

        <h2>Projetos Desktop</h2>

        <div className='CardsProjects'>
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Agencia-Avioes-C_charp"} link={"https://github.com/guilherme23x/Agencia-Avioes-C_charp"} imgproject={"https://guilherme23x.github.io/Portfolio/img/AviaoAgencia.png"} titulo={"Agência de Aviões"} info={"Projeto feito para gerenciar os clientes, produtos e funcionários. (C#)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Bloco-de-Notas-C_charp"} link={"https://github.com/guilherme23x/Bloco-de-Notas-C_charp"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Notepad.png"} titulo={"NotePad"} info={"Uma réplica do bloco de notas do windows, com todas as funções. (C#)"} />
          <CardProjetos linkcodigo={"https://github.com/guilherme23x/Estoque-CS"} link={"https://github.com/guilherme23x/Estoque-CS/releases/download/Estoque/Concessionaria.exe"} imgproject={"https://guilherme23x.github.io/Portfolio/img/Estoque.png"} titulo={"Estoque"} info={"Uma plataforma de colocar caminhões em estoque. (C#)"} />
        </div>
      </section>
    </>
  );

}

export default Desktop;