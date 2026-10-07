import React from 'react';
import { ArrowRight, Heart, Settings, MapPin } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            ODONTO EXCELLENCE ALVORADA
          </div>
          
          <h1 className={styles.headline}>
            Seu sorriso <br/>
            merece <br/>
            <span className="text-primary">excelência</span>.
          </h1>
          
          <p className={styles.subheadline}>
            Odontologia completa com profissionais qualificados,<br/>
            tecnologia e atendimento humanizado em Alvorada.
          </p>
          
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
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <Heart className={styles.featureIcon} />
              <span>Atendimento humanizado</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.feature}>
              <Settings className={styles.featureIcon} />
              <span>Tecnologia de ponta</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.feature}>
              <MapPin className={styles.featureIcon} />
              <span>Fácil acesso em Alvorada</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/hero/hero-hd.png" />
          <img 
            src="/images/hero/hero-odonto-excellence.png" 
            alt="Paciente sorrindo - Odonto Excellence" 
            className={styles.image}
            loading="eager"
            decoding="sync"
          />
        </picture>
      </div>
    </section>
  );
}
