// AdditionalWork — Sección desplegable con trabajos de menor recorrido
// Framer: AnimatePresence (height reveal), motion.div (stagger de tarjetas)
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import AdditionalWorkCard from './AdditionalWorkCard';
import styles from './AdditionalWork.module.css';

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const AdditionalWork = () => {
  const { content } = useLanguage();
  const labels = content.ui.additionalWork;
  const works = content.additionalWork || [];
  const [open, setOpen] = useState(false);

  if (works.length === 0) return null;

  return (
    <Section id="trabajos-adicionales" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h2 className={styles.sectionTitle}>{content.ui.sections.additionalWork}</h2>
          <p className={styles.intro}>{labels.intro}</p>
        </div>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="trabajos-adicionales-lista"
        >
          <span>{open ? labels.collapse : labels.expand}</span>
          <span className={styles.count}>{works.length}</span>
          <motion.span
            className={styles.chevron}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            aria-hidden="true"
          >
            ⌄
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="trabajos-adicionales-lista"
            className={styles.reveal}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className={styles.list}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {works.map((work, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AdditionalWorkCard work={work} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default AdditionalWork;
