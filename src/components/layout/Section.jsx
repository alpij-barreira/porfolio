// Section — Wrapper de sección con fade-in al entrar en viewport
// Framer: motion.section (whileInView opacity + y transition)
import { motion } from 'framer-motion';
import styles from './Section.module.css';

const Section = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`${styles.section} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
