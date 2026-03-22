// FRAMER-READY
import styles from './ArchitectCota.module.css';

const ArchitectCota = ({ label }) => {
  return (
    <div className={styles.cota}>
      <div className={styles.line}>
        <span className={styles.tick} />
        <span className={styles.label}>{label}</span>
        <span className={styles.tick} />
      </div>
    </div>
  );
};

export default ArchitectCota;
