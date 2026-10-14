// Education — Formación, plegada con el resto del material de apoyo.
import { useLanguage } from '../../contexts/LanguageContext';
import Fold from '../shared/Fold';
import styles from './Education.module.css';

const Education = () => {
  const { content } = useLanguage();

  return (
    <Fold id="estudios" title={content.ui.sections.education} count={content.education.length}>
      <div className={styles.list}>
        {content.education.map((edu) => (
          <article key={`${edu.institution}-${edu.degree}`} className={`rail-grid ${styles.entry}`}>
            <div className={styles.rail}>
              <span className={`label ${styles.period}`}>{edu.period}</span>
              {edu.current && <span className={styles.current} aria-hidden="true" />}
            </div>

            <div className={styles.main}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>{edu.institution}</p>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Fold>
  );
};

export default Education;
