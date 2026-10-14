// Experience — El cuaderno de trabajo: un asiento por empresa.
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import SectionHead from '../shared/SectionHead';
import Reveal from '../shared/Reveal';
import ExperienceCard from './ExperienceCard';
import styles from './Experience.module.css';

const Experience = () => {
  const { content } = useLanguage();

  return (
    <Section id="experiencia">
      <SectionHead title={content.ui.sections.experience} />

      <div className={styles.list}>
        {content.experience.map((exp, i) => (
          <Reveal key={exp.company} className={styles.item} delay={i * 0.06} y={16}>
            <ExperienceCard exp={exp} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
