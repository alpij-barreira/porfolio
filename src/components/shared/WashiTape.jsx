// FRAMER-READY
import styles from './WashiTape.module.css';

// Un solo acento en todo el sitio: la cinta también es azul de plano.
const WashiTape = ({ rotation = -2, style = {} }) => {
  return (
    <div
      className={styles.tape}
      style={{
        '--tape-color': 'var(--color-accent)',
        '--tape-rotation': `${rotation}deg`,
        ...style
      }}
    />
  );
};

export default WashiTape;
