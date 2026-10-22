// ExperienceCard — Asiento del cuaderno de trabajo: el periodo al margen,
// el puesto y el relato en la columna principal. El detalle se despliega.
import { useState, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TbCheck, TbProgress, TbChevronDown } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({ exp }) => {
  const { content } = useLanguage();
  const labels = content.ui.experienceCard;
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  const [firstParagraph, ...rest] = exp.description;

  return (
    <article className={`rail-grid ${styles.entry}`}>
      <div className={styles.rail}>
        <span className={`label ${styles.period}`}>{exp.period}</span>
        <span className={styles.duration}>{exp.duration}</span>
      </div>

      <div className={styles.main}>
        <h3 className={styles.company}>{exp.company}</h3>
        <p className={styles.role}>{exp.role}</p>
        <p className={styles.summary}>{firstParagraph}</p>

        {exp.logoImage && (
          <img src={exp.logoImage} alt="" className={styles.logo} loading="lazy" />
        )}

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span>{labels.moreInfo}</span>
          <TbChevronDown className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true" />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              className={styles.details}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.detailsInner}>
                {rest.map((paragraph, i) => (
                  <p key={i} className={styles.paragraph}>{paragraph}</p>
                ))}

                <h4 className={`label ${styles.achievementsTitle}`}>{labels.achievements}</h4>
                <ul className={styles.achievements}>
                  {exp.achievements.map((a, i) => (
                    <li key={i} className={styles.achievement}>
                      <span
                        className={`${styles.bullet} ${a.status === 'done' ? styles.bulletDone : styles.bulletProgress}`}
                        aria-hidden="true"
                      >
                        {a.status === 'done' ? <TbCheck /> : <TbProgress />}
                      </span>
                      <span className={styles.achievementText}>{a.text}</span>
                    </li>
                  ))}
                </ul>

                <ul className={styles.skills}>
                  {exp.skills.map((skill) => (
                    <li key={skill} className={styles.skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};

export default ExperienceCard;
