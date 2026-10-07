import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Reviews.module.css';

export function Reviews() {
  return (
    <section id="avaliacoes" className={`section-padding ${styles.reviews}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.left}>
          <div className={`eyebrow ${styles.eyebrow}`}>AVALIAÇÕES</div>
          
          <h2 className={styles.headline}>
            O que nossos<br/>
            pacientes dizem
          </h2>
          
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={styles.starIcon} fill="currentColor" />
              ))}
            </div>
            <span className={styles.score}>Avaliações de pacientes no Google</span>
          </div>
          
          <p className={styles.description}>
            Centenas de pacientes já confiaram seus sorrisos 
            à Odonto Excellence Alvorada.
          </p>
          
          <a href={clinicData.mapsUrl} target="_blank" rel="noopener noreferrer" className={`btn ${styles.cta}`}>
            Ver mais avaliações
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.grid}>
            {clinicData.testimonials.map((testimonial, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <img src="/google-icon.svg" alt="Google" className={styles.googleIcon} />
                  <div className={styles.cardStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={styles.cardStarIcon} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className={styles.text}>"{testimonial.text}"</p>
                <div className={styles.author}>
                  <span className={styles.name}>{testimonial.name}</span>
                  <span className={styles.role}>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
