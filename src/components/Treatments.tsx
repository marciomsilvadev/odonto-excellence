import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, X } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './Treatments.module.css';

export function Treatments() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

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
                onClick={() => setSelectedImage(treatment.image)}
                style={{ cursor: 'zoom-in' }}
              >
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className={styles.image} 
                />
              </div>
              <h3 className={styles.cardTitle}>{treatment.title}</h3>
              <p className={styles.cardDesc}>{treatment.description}</p>
            </div>
          ))}
        </div>

      </div>
      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Tratamento ampliado" className={styles.lightboxImage} />
        </div>,
        document.body
      )}
    </section>
  );
}
