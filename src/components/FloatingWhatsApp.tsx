import React from 'react';
import { clinicData } from '../clinicData';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  return (
    <a 
      href={`https://wa.me/55${clinicData.whatsapp.replace(/\D/g, '')}?text=Olá! Vim pelo site da Odonto Excellence Alvorada e gostaria de agendar uma avaliação.`}
      className={styles.floatingBtn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.icon} />
    </a>
  );
}
