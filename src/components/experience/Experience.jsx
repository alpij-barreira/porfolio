// Experience — Timeline de experiencia laboral
// Sin dependencias de Framer directas (las animaciones están en ExperienceCard)
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

const Experience = () => {
  const { content } = useLanguage();

  return (
    <Section id="experiencia">
      <h2 className={styles.sectionTitle}>{content.ui.sections.experience}</h2>

      <div className={styles.timeline}>
        {content.experience.map((exp, i) => (
          <div key={i} className={styles.timelineItem}>
            <div className={styles.timelineMarker}>
              {i > 0 && <div className={styles.timelineConnectorTop} />}
              <div className={`${styles.timelineNode} ${i === 0 ? styles.timelineNodeActive : ''}`} />
              {i < content.experience.length - 1 && <div className={styles.timelineConnectorBottom} />}
            </div>
            <div className={styles.cardWrapper}>
              <ExperienceCard exp={exp} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
