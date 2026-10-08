import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Treatments.module.css';

export function Treatments() {
  return (
    <section id="tratamentos" className={`section-padding ${styles.treatments}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className="eyebrow">TRATAMENTOS</div>
            <h2 className={styles.headline}>
              Tudo o que você precisa<br/>
              para um <span className="text-primary">sorriso completo.</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>
              Da prevenção ao tratamento mais avançado, a Odonto Excellence 
              oferece soluções completas para cuidar da sua saúde e da estética 
              do seu sorriso, com qualidade e segurança.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {clinicData.treatments.map((treatment, index) => (
            <div key={index} className={styles.card}>
              <div 
                className={styles.imageWrapper}
                style={(treatment as any).contain ? { backgroundColor: '#fff' } : undefined}
              >
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className={styles.image} 
                  style={(treatment as any).contain ? { objectFit: 'contain' } : undefined}
                />
              </div>
              <h3 className={styles.cardTitle}>{treatment.title}</h3>
              <p className={styles.cardDesc}>{treatment.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#contato" className={`btn btn-outline ${styles.btn}`}>
            Ver todos os tratamentos
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
