import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <img 
            src="/images/brand/odonto-excellence-logo.png" 
            alt="Odonto Excellence" 
            className={styles.logoImage} 
            width="168"
            height="52"
          />
        </div>

        <button 
          className={styles.mobileToggle} 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`${styles.navWrapper} ${isMenuOpen ? styles.isOpen : ''}`}>
          <nav className={styles.nav}>
            <a href="#inicio" className={styles.link} onClick={closeMenu}>Início</a>
            <a href="#tratamentos" className={styles.link} onClick={closeMenu}>Tratamentos</a>
            <a href="#sobre" className={styles.link} onClick={closeMenu}>Sobre a Clínica</a>
            <a href="#antes-depois" className={styles.link} onClick={closeMenu}>Antes e Depois</a>
            <a href="#equipe" className={styles.link} onClick={closeMenu}>Equipe</a>
            <a href="#estrutura" className={styles.link} onClick={closeMenu}>Estrutura</a>
            <a href="#avaliacoes" className={styles.link} onClick={closeMenu}>Avaliações</a>
            <a href="#contato" className={styles.link} onClick={closeMenu}>Contato</a>
          </nav>

          <a 
            href={`https://wa.me/55${clinicData.whatsapp.replace(/\D/g, '')}?text=Olá! Vim pelo site da Odonto Excellence Alvorada e gostaria de agendar uma avaliação.`}
            className={`btn btn-primary ${styles.cta}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.waIcon} />
            Agende sua avaliação
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
