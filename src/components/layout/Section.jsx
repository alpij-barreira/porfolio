// Section — Contenedor de sección con ritmo vertical y rejilla de página.
import styles from './Section.module.css';

const Section = ({ id, children, className = '', tone = 'paper' }) => (
  <section id={id} className={`${styles.section} ${styles[tone] || ''} ${className}`}>
    <div className="page">{children}</div>
  </section>
);

export default Section;
