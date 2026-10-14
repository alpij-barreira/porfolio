// Sheet — Lámina de lectura que se desliza desde el borde, como sacar
// un documento de la carpeta. Bloquea el scroll, atrapa el foco y lo devuelve.
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TbX } from 'react-icons/tb';
import styles from './Sheet.module.css';

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Sheet = ({ open, onClose, labelledBy, closeLabel, children }) => {
  const panelRef = useRef(null);
  const scrollPosRef = useRef(0);
  const openerRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    openerRef.current = document.activeElement;
    scrollPosRef.current = window.scrollY;
    const { body } = document;
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosRef.current}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const raf = requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      const saved = scrollPosRef.current;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      window.scrollTo({ top: saved, behavior: 'instant' });
      document.removeEventListener('keydown', onKeyDown);
      cancelAnimationFrame(raf);
      if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
    };
  }, [open, onClose]);

  const panelMotion = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: '4%' },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '3%' },
      };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            {...panelMotion}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={onClose} aria-label={closeLabel}>
              <TbX aria-hidden="true" />
            </button>
            <div className={styles.scroller}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Sheet;
