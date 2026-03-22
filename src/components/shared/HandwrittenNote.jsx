// FRAMER-READY
import styles from './HandwrittenNote.module.css';
import WashiTape from './WashiTape';

const HandwrittenNote = ({ children, rotation = -2, withTape = false, tapeColor = 'amber' }) => {
  return (
    <div
      className={styles.note}
      style={{ '--note-rotation': `${rotation}deg` }}
    >
      {withTape && <WashiTape color={tapeColor} rotation={rotation * -0.5} />}
      <span className={styles.text}>{children}</span>
    </div>
  );
};

export default HandwrittenNote;
