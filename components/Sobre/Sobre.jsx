import React from 'react';
import './Sobre.modules.css';
import imgPerfil from '../../assets/Perfil.png'

function Sobre() {
  return (
    <section id='Sobre' className='sobre'>
      <img className='imgPerfil' src={imgPerfil} alt="imagem de perfil" />
      <div className='sobreConteudo'>
        <h2 >Sobre</h2>
        <p>Olá, sou Guilherme, tenho 19 anos e gosto de desenvolver <span>interfaces Web usando HTML/CSS/Javascript</span> com o propósito de deixar tudo fácil e intuítivo para o usuário, deixar a melhor experiência caso ele acesse várias vezes por necessitar. Tenho um <span>Hobby de Desenhar </span> diversas coisas, tanto carros quanto personagens (realista, animes e desenhos animados) dedicando ao máximo e aprendendo com os erros. </p>
      </div>
    </section>
  );
}

export default Sobre;