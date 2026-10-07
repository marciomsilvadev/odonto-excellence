import React from 'react';
import styles from './Clinic.module.css';

export function Clinic() {
  return (
    <section id="sobre" className={styles.clinic}>
      <div className={`container ${styles.container}`}>
        <img 
          src="/sobre-clinica-odonto-excellence.webp" 
          alt="Odonto Excellence Alvorada - Sobre a Clínica" 
          className={styles.fullImage}
        />
      </div>
    </section>
  );
}
