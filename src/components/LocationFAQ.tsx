import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Plus, Minus } from 'lucide-react';
import { clinicData } from '../clinicData';
import styles from './LocationFAQ.module.css';

export function LocationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.left}>
          <div className="eyebrow">ONDE ESTAMOS</div>
          <h2 className={styles.headline}>
            Odonto Excellence<br/>
            <span className="text-primary">Alvorada</span>
          </h2>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <MapPin className={styles.infoIcon} />
              <p className={styles.infoText}>{clinicData.address}</p>
            </div>
            <div className={styles.infoItem}>
              <Clock className={styles.infoIcon} />
              <div className={styles.infoText}>
                {clinicData.openingHours.map((hour, idx) => (
                  <p key={idx}>{hour}</p>
                ))}
              </div>
            </div>
          </div>
          
          <a href={clinicData.mapsUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.cta}`}>
            Como chegar
            <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.center}>
          <div className={styles.mapWrapper}>
            <iframe 
              src="https://maps.google.com/maps?q=Alberto%20Pasqualini%2C%20101%2C%20Sumar%C3%A9%2C%20Alvorada%20-%20RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={styles.mapImage}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Odonto Excellence Alvorada"
            ></iframe>
          </div>
        </div>
        
        <div className={styles.right}>
          <div className="eyebrow">DÚVIDAS FREQUENTES</div>
          <h2 className={styles.faqHeadline}>
            Principais questões<br/>
            sobre nossos tratamentos
          </h2>
          
          <div className={styles.accordion}>
            {clinicData.faq.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${openFaq === index ? styles.open : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.accordionHeader}>
                  <h3 className={styles.question}>{item.question}</h3>
                  {openFaq === index ? (
                    <Minus className={styles.accordionIcon} />
                  ) : (
                    <Plus className={styles.accordionIcon} />
                  )}
                </div>
                {openFaq === index && (
                  <div className={styles.accordionBody}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
