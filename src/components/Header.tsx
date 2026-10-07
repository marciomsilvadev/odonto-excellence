import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <img 
            src="/images/brand/odonto-excellence-logo.png" 
            alt="Odonto Excellence" 
            className={styles.logoImage} 
          />
        </div>

        <nav className={styles.nav}>
          <a href="#inicio" className={styles.link}>Início</a>
          <a href="#tratamentos" className={styles.link}>Tratamentos</a>
          <a href="#sobre" className={styles.link}>Sobre a Clínica</a>
          <a href="#antes-depois" className={styles.link}>Antes e Depois</a>
          <a href="#equipe" className={styles.link}>Equipe</a>
          <a href="#estrutura" className={styles.link}>Estrutura</a>
          <a href="#avaliacoes" className={styles.link}>Avaliações</a>
          <a href="#contato" className={styles.link}>Contato</a>
        </nav>

        <a 
          href={`https://wa.me/55${clinicData.whatsapp.replace(/\D/g, '')}?text=Olá! Vim pelo site da Odonto Excellence Alvorada e gostaria de agendar uma avaliação.`}
          className={`btn btn-primary ${styles.cta}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.waIcon} />
          Agende sua avaliação
          <ArrowRight size={18} />
        </a>
      </div>
    </header>
  );
}
