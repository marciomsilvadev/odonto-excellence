import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import styles from './BeforeAfter.module.css';

interface CaseConfig {
  id: number;
  name: string;
  before: string;
  after: string;
  styleBefore?: React.CSSProperties;
  styleAfter?: React.CSSProperties;
}

const cases: CaseConfig[] = [
  { 
    id: 1, 
    name: 'CASO 01', 
    before: '/images/antes-depois/caso-01-antes.jpg', 
    after: '/images/antes-depois/caso-01-depois.jpg',
    styleBefore: { objectPosition: 'center 50%' },
    styleAfter: { objectPosition: 'center 50%' }
  },
  { 
    id: 2, 
    name: 'CASO 02', 
    before: '/images/antes-depois/caso-02-antes.jpg', 
    after: '/images/antes-depois/caso-02-depois.jpg',
    styleBefore: { objectPosition: 'center 45%' },
    styleAfter: { objectPosition: 'center 45%' }
  },
  { 
    id: 3, 
    name: 'CASO 03', 
    before: '/images/antes-depois/caso-03-antes.jpg', 
    after: '/images/antes-depois/caso-03-depois.jpg',
    styleBefore: { objectPosition: 'center 45%' },
    styleAfter: { objectPosition: 'center 45%' }
  },
  { 
    id: 4, 
    name: 'CASO 04', 
    before: '/images/antes-depois/caso-04-antes.jpg', 
    after: '/images/antes-depois/caso-04-depois.jpg',
    styleBefore: { objectPosition: 'center 50%' },
    styleAfter: { objectPosition: 'center 50%' }
  }
];

const CompareSlider = ({ config }: { config: CaseConfig }) => {
  const { before, after, name: label, styleBefore, styleAfter } = config;
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  const onMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: ReactTouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className={styles.card}>
      <div 
        className={styles.sliderContainer} 
        ref={sliderRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      >
        <img 
          src={after} 
          alt={`Depois do tratamento odontológico — ${label}`} 
          className={styles.imageAfter} 
          style={styleAfter}
          loading="lazy" 
          decoding="async" 
        />
        <img 
          src={before} 
          alt={`Antes do tratamento odontológico — ${label}`} 
          className={styles.imageBefore} 
          style={{ ...styleBefore, clipPath: `inset(0 ${100 - position}% 0 0)` }} 
          loading="lazy" 
          decoding="async" 
        />
        
        <div className={styles.sliderHandle} style={{ left: `${position}%` }}>
          <div className={styles.sliderLine}></div>
          <div className={styles.sliderButton}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        <div className={styles.labelBefore} style={{ opacity: position < 15 ? 0 : 1 }}>ANTES</div>
        <div className={styles.labelAfter} style={{ opacity: position > 85 ? 0 : 1 }}>DEPOIS</div>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.caseName}>{label}</span>
      </div>
    </div>
  );
};

export function BeforeAfter() {
  return (
    <section id="antes-depois" className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={`eyebrow ${styles.eyebrow}`}>— RESULTADOS REAIS</div>
          <h2 className={styles.headline}>
            Transformações que<br/>
            <span className={styles.highlight}>fazem a diferença.</span>
          </h2>
          <p className={styles.description}>
            Confira alguns resultados reais de tratamentos realizados<br/>
            pela nossa equipe.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <CompareSlider key={c.id} config={c} />
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.disclaimer}>
            Resultados individuais podem variar de acordo com cada caso.
          </p>
        </div>
      </div>
    </section>
  );
}
