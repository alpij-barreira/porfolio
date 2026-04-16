// ExperienceCard — Card expandible de experiencia laboral
// Framer: motion.div (layout), AnimatePresence (expand/collapse con height auto)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import BulletJournalIcon from '../shared/BulletJournalIcon';
import ArchitectCota from '../shared/ArchitectCota';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({ exp }) => {
  const { content } = useLanguage();
  const labels = content.ui.experienceCard;
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={styles.card}
      layout
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Closed state — always visible */}
      <button
        className={styles.header}
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className={styles.headerLeft}>
          <div className={styles.meta}>
            <span className={styles.company}>{exp.company}</span>
            <span className={styles.role}>{exp.role}</span>
            <span className={styles.period}>{exp.period}</span>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.moreInfo}>
            {labels.moreInfo}
            <span className={styles.moreInfoUnderline} />
          </span>
          <span className={`${styles.toggle} ${expanded ? styles.toggleOpen : ''}`}>
            ↓
          </span>
        </div>
      </button>

      {/* Expanded state */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className={styles.details}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.detailsInner}>
              {exp.logoImage && (
                <div className={styles.logoImageWrapper}>
                  <img src={exp.logoImage} alt={exp.company} className={styles.logoImage} />
                </div>
              )}
              <div className={styles.description}>
                {exp.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className={styles.achievements}>
                <h4>{labels.achievements}</h4>
                {exp.achievements.map((a, i) => (
                  <div key={i} className={styles.achievement}>
                    <BulletJournalIcon type={a.status === 'done' ? 'done' : 'progress'} />
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>

              <div className={styles.skills}>
                {exp.skills.map((s, i) => (
                  <span key={i} className={styles.skillTag}>{s}</span>
                ))}
              </div>

              <ArchitectCota label={exp.duration} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceCard;
