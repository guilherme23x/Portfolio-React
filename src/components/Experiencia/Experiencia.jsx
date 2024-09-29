import React from 'react';
import './Experiencia.modules.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Imagens
import PowerBi from '../../assets/certificados/PowerBi.jpg';
import PowerPoint from '../../assets/certificados/Powerpoint.jpg';
import HtmlCss from '../../assets/certificados/HtmlCss.jpg';
import Python from '../../assets/certificados/Python.jpg';
import Camp from '../../assets/certificados/Camp.jpg';
import Hardware from '../../assets/certificados/Hardware.jpg';



function Experiencia() {
  return (
    <section className='experiencia' id='Experiencia'>
      <h2>Experiência</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        className='Slide'
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img src={PowerBi} alt="Perfil" className='imgExp' /></SwiperSlide>
        <SwiperSlide><img src={PowerPoint} alt="Perfil" className='imgExp' /></SwiperSlide>
        <SwiperSlide><img src={HtmlCss} alt="Perfil" className='imgExp' /></SwiperSlide>
        <SwiperSlide><img src={Python} alt="Perfil" className='imgExp' /></SwiperSlide>
        <SwiperSlide><img src={Camp} alt="Perfil" className='imgExp' /></SwiperSlide>
        <SwiperSlide><img src={Hardware} alt="Perfil" className='imgExp' /></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Experiencia;
