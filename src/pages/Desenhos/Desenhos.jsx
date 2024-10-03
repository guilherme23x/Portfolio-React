import React from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import './Desenhos.modules.css'

import imagem3 from './imagens/3.jpg';
import imagem4 from './imagens/4.jpg';
import imagem5 from './imagens/5.jpg';
import imagem6 from './imagens/6.jpg';
import imagem7 from './imagens/7.jpg';
import imagem8 from './imagens/8.jpg';
import imagem9 from './imagens/9.jpg';
import imagem10 from './imagens/10.jpg';
import imagem11 from './imagens/11.jpg';
import imagem12 from './imagens/12.jpg';
import imagem13 from './imagens/13.jpg';
import imagem14 from './imagens/14.jpg';
import imagem15 from './imagens/15.jpg';
import imagem16 from './imagens/16.jpg';
import imagem17 from './imagens/17.jpg';
import imagem18 from './imagens/18.jpg';
import imagem19 from './imagens/19.jpg';
import imagem20 from './imagens/20.jpg';
import imagem21 from './imagens/21.jpg';
import imagem22 from './imagens/22.jpg';
import imagem23 from './imagens/23.jpg';
import imagem24 from './imagens/24.jpg';
import imagem25 from './imagens/25.jpg';
import imagem26 from './imagens/26.jpg';
import imagem27 from './imagens/27.jpg';
import imagem29 from './imagens/29.jpg';
import imagem30 from './imagens/30.jpg';
import imagem31 from './imagens/31.jpg';
import imagem32 from './imagens/32.jpg';
import imagem33 from './imagens/33.jpg';
import imagem34 from './imagens/34.jpg';
import imagem35 from './imagens/35.jpg';
import imagem36 from './imagens/36.jpg';
import imagem37 from './imagens/37.jpg';
import imagem38 from './imagens/38.jpg';
import imagem39 from './imagens/39.jpg';
import imagem40 from './imagens/40.jpg';
import imagem42 from './imagens/42.jpg';
import imagem43 from './imagens/43.jpg';
import imagem44 from './imagens/44.jpg';
import imagem45 from './imagens/45.jpg';

const Desenhos = () => {
  const imagens = [
    { src: imagem3, alt: 'Imagem Lamborghini Aventador Vermelha' },
    { src: imagem4, alt: 'Imagem Ilha com conqueiro e um por do sol' },
    { src: imagem5, alt: 'Imagem Lamborghini Aventador Cinza' },
    { src: imagem6, alt: 'Imagem Bugatti Veyron' },
    { src: imagem7, alt: 'Imagem Mercedes-Benz C 200 AMG Line' },
    { src: imagem8, alt: 'Imagem Mclaren P1' },
    { src: imagem9, alt: 'Imagem Mustang GT' },
    { src: imagem10, alt: 'Imagem Porsche 911' },
    { src: imagem11, alt: 'Imagem BMW Z4M' },
    { src: imagem12, alt: 'Imagem Lamborghini Huracan' },
    { src: imagem13, alt: 'Imagem BMW M4' },
    { src: imagem14, alt: 'Imagem Hot Wheels' },
    { src: imagem15, alt: 'Imagem HB20 2014 Sedan' },
    { src: imagem16, alt: 'Imagem Caminhão Scketch' },
    { src: imagem17, alt: 'Imagem Honda Civic' },
    { src: imagem18, alt: 'Imagem Dodge Charger 1970' },
    { src: imagem19, alt: 'Imagem Camaro 2009' },
    { src: imagem20, alt: 'Imagem Mclaren F1' },
    { src: imagem21, alt: 'Imagem Moto Scketch' },
    { src: imagem22, alt: 'Imagem HB20 Scketch' },
    { src: imagem23, alt: 'Imagem Lamborghini Urus Lateral' },
    { src: imagem24, alt: 'Imagem Carro Scketch' },
    { src: imagem25, alt: 'Imagem Ferrari F12' },
    { src: imagem26, alt: 'Imagem Honda HRV 2018' },
    { src: imagem27, alt: 'Imagem Ford Focus' },
    { src: imagem29, alt: 'Imagem Bugatti Chiron Verde' },
    { src: imagem30, alt: 'Imagem Bugatti Chiron Azul' },
    { src: imagem31, alt: 'Imagem Aranha Realista' },
    { src: imagem32, alt: 'Imagem Lamborghini Veneno' },
    { src: imagem33, alt: 'Imagem Lá Ferrari' },
    { src: imagem34, alt: 'Imagem Bugatti Chiron Sombreado' },
    { src: imagem35, alt: 'Imagem Lamborghini Aventador Sombreado' },
    { src: imagem36, alt: 'Imagem Ferrari Testarossa' },
    { src: imagem37, alt: 'Imagem Óculos Realista' },
    { src: imagem38, alt: 'Imagem Jeep Renegate' },
    { src: imagem39, alt: 'Imagem Mercedes-Benz Classe GLA' },
    { src: imagem40, alt: 'Imagem Camaro 2020' },
    { src: imagem42, alt: 'Imagem Caminhão Mercedes-Benz Axor' },
    { src: imagem43, alt: 'Imagem Caminhão Zamzam Volvo FH' },
    { src: imagem44, alt: 'Imagem Mercedes-Benz 300 SRL' },
    { src: imagem45, alt: 'Imagem Fiat 500' },
  ];

  return (
    <>
      <Cabecalho headerHome="/portfolio-react#Home"  headerSobre="/portfolio-react#Sobre" headerProjetos="/portfolio-react#Projetos" headerExperiencia="/portfolio-react#Experiencia" headerHabilidades="/portfolio-react#Habilidades" headerContatos="/portfolio-react#Contatos" />
      <section className='Desenhos'>




        <h2>Projetos Desenhos</h2>
        <div className='cardImagens'>
          {imagens.map((imagem, index) => (
            <img
              key={index}
              className="imagem"
              src={imagem.src}
              alt={imagem.alt}

            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Desenhos;
