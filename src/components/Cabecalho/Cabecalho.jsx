import React from 'react';
import './Cabecalho.modules.css'

function Cabecalho() {
  return (
    <header >
      <a href="">Guilherme</a>
      <div className='menu'>
        <a href="#Sobre">Sobre</a>
        <a href="#Projetos">Projetos</a>
        <a href="#Experiencia">Experiencia</a>
        <a href="">Habilidades</a>
        <a href="">Contatos</a>
      </div>

    </header>
  );
}

export default Cabecalho;
