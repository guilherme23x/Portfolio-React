import React from 'react';
import styles from './Card.module.css'; // Importe corretamente o arquivo CSS do módulo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ iconeFont, titulo, info }) {
  return (
    <section className={styles.card}>
      <div className={styles.parteCor}></div>
      <FontAwesomeIcon icon={iconeFont} />
      <h3>{titulo}</h3>
      <p className='infoCard'>{info}</p>
    </section>
  );
}

export default Card;
