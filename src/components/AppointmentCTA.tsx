import React from 'react';
import { ArrowRight, Calendar, FileText, Smile } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './AppointmentCTA.module.css';

export function AppointmentCTA() {
  return (
    <section className={`section-padding ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.left}>
          <h2 className={styles.headline}>
            Seu <span className="text-primary">novo sorriso</span><br/>
            pode estar mais perto<br/>
            do que você imagina.
          </h2>
        </div>

        <div className={styles.center}>
          <div className={styles.step}>
            <Calendar className={styles.icon} />
            <span className={styles.stepText}>Agende sua<br/>avaliação</span>
          </div>
          <div className={styles.step}>
            <FileText className={styles.icon} />
            <span className={styles.stepText}>Receba seu plano<br/>de tratamento</span>
          </div>
          <div className={styles.step}>
            <Smile className={styles.icon} />
            <span className={styles.stepText}>Comece sua<br/>transformação</span>
          </div>
        </div>
        
        <div className={styles.right}>
          <a 
            href={`https://wa.me/55${clinicData.whatsapp.replace(/\D/g, '')}?text=Olá! Vim pelo site da Odonto Excellence Alvorada e gostaria de agendar uma avaliação.`}
            className={`btn btn-primary ${styles.btn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/whatsapp-icon.svg" alt="WhatsApp" className={styles.waIcon} />
            Quero agendar agora
            <ArrowRight size={18} />
          </a>
        </div>
        
      </div>
    </section>
  );
}
