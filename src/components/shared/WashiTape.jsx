// FRAMER-READY
import styles from './WashiTape.module.css';

const WashiTape = ({ color = 'blue', rotation = -2, style = {} }) => {
  const colorMap = {
    blue: 'var(--color-ink-blue)',
    red: 'var(--color-ink-red)',
    green: 'var(--color-ink-green)',
    amber: 'var(--color-ink-amber)',
  };

  return (
    <div
      className={styles.tape}
      style={{
        '--tape-color': colorMap[color] || colorMap.blue,
        '--tape-rotation': `${rotation}deg`,
        ...style
      }}
    />
  );
};

export default WashiTape;
