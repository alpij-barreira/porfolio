// SectionHead — El título de la sección, sin adornos: ni etiqueta encima
// ni filete al lado.
import styles from './SectionHead.module.css';

const SectionHead = ({ title, intro }) => (
  <header className={styles.head}>
    <h2 className={styles.title}>{title}</h2>
    {intro && <p className={styles.intro}>{intro}</p>}
  </header>
);

export default SectionHead;
