// SectionHead — El título de la sección y el filete que cruza la página.
// Sin etiqueta repetida encima: el título ya dice lo que es.
import styles from './SectionHead.module.css';

const SectionHead = ({ title, intro }) => (
  <header className={styles.head}>
    <div className={styles.titleRow}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>
    {intro && <p className={styles.intro}>{intro}</p>}
  </header>
);

export default SectionHead;
