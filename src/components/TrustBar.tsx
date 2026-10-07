import React from 'react';
import { Users, ShieldCheck, Diamond, CreditCard } from 'lucide-react';
import styles from './TrustBar.module.css';

export function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Users className={styles.icon} />
          </div>
          <div className={styles.content}>
            <span className={styles.highlight}>+ DE<br/>300 MIL</span>
            <p className={styles.text}>SORRISOS TRANSFORMADOS<br/>EM TODO O BRASIL.</p>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <ShieldCheck className={styles.icon} />
          </div>
          <div className={styles.content}>
            <p className={styles.textHighlight}>PROFISSIONAIS<br/>QUALIFICADOS<br/>E ESPECIALISTAS</p>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <Diamond className={styles.icon} />
          </div>
          <div className={styles.content}>
            <p className={styles.textHighlight}>TECNOLOGIA<br/>E ESTRUTURA<br/>DE PONTA</p>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <CreditCard className={styles.icon} />
          </div>
          <div className={styles.content}>
            <p className={styles.textHighlight}>CONDIÇÕES<br/>ESPECIAIS<br/>DE PAGAMENTO</p>
          </div>
        </div>

      </div>
    </section>
  );
}
