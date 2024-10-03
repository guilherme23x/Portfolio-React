import React from 'react';
import './Cabecalho.modules.css'

function Cabecalho(props) {
  return (
    <header >
      <a href={props.headerHome}>Guilherme</a>
      <div className='menu'>
        <a href={props.headerSobre}>Sobre</a>
        <a href={props.headerProjetos}>Projetos</a>
        <a href={props.headerExperiencia}>Experiência</a>
        <a href={props.headerHabilidades}>Habilidades</a>
        <a href={props.headerContatos}>Contatos</a>
      </div>

    </header>
  );
}

export default Cabecalho;
