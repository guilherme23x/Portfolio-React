import React, { useState } from 'react';
import './Cabecalho.modules.css';

function Cabecalho(props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <a href={props.headerHome}>Guilherme</a>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuVisible ? '✖' : '☰'}
      </button>
      <div className={`menu ${menuVisible ? 'menu-visible' : ''}`}>
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
