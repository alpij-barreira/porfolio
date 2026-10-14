// Fold — Pliego: una sección que llega cerrada y se abre si interesa.
// Para el material de apoyo del dossier, que no debe competir con el trabajo.
import { useState, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TbPlus } from 'react-icons/tb';
import styles from './Fold.module.css';

const Fold = ({ id, title, children }) => {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <section id={id} className={styles.fold}>
      <h2 className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className={styles.title}>{title}</span>
          <span className={styles.spacer} aria-hidden="true" />
          <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`} aria-hidden="true">
            <TbPlus />
          </span>
        </button>
      </h2>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className={styles.panel}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.panelInner}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Fold;
