// Education — Formación académica con timeline
// Framer: motion.div (stagger en cards)
import { motion } from 'framer-motion';
import { content } from '../../data/content';
import Section from '../layout/Section';
import styles from './Education.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const Education = () => {
  return (
    <Section id="estudios">
      <h2 className={styles.sectionTitle}>Estudios</h2>

      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {content.education.map((edu, i) => (
          <motion.div key={i} className={styles.timelineItem} variants={itemVariants}>
            <div className={styles.timelineMarker}>
              {i > 0 && <div className={styles.timelineConnectorTop} />}
              <div className={`${styles.timelineNode} ${i === 0 ? styles.timelineNodeActive : ''}`} />
              {i < content.education.length - 1 && <div className={styles.timelineConnectorBottom} />}
            </div>
            <div className={styles.card}>
              <span className={styles.period}>{edu.period}</span>
              <h3 className={styles.institution}>{edu.institution}</h3>
              <span className={styles.degree}>{edu.degree}</span>
              <p className={styles.description}>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Education;
