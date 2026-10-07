import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Team.module.css';

export function Team() {
  return (
    <section id="equipe" className={`section-padding ${styles.team}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.left}>
          <div className="eyebrow">NOSSA EQUIPE</div>
          
          <h2 className={styles.headline}>
            Profissionais<br/>
            que fazem<br/>
            <span className="text-primary">a diferença.</span>
          </h2>
          
          <p className={styles.description}>
            Contamos com uma equipe de dentistas especializados e em constante 
            atualização, prontos para oferecer o melhor para o seu sorriso.
          </p>
          
          <a href="#contato" className={`btn btn-outline ${styles.cta}`}>
            Conheça nossa equipe
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {clinicData.professionals.map((professional, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={professional.image} alt={professional.name} className={styles.image} />
                  <div className={styles.logoBadge}>
                    <img 
                      src="/images/brand/odonto-excellence-symbol.jpg" 
                      alt="Odonto Excellence" 
                      className={styles.badgeImage} 
                    />
                  </div>
                </div>
                <h3 className={styles.name}>{professional.name}</h3>
                <span className={styles.cro}>{professional.cro}</span>
                <span className={styles.specialty}>{professional.specialty}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
