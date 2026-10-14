// Polaroid — El marco de papel que sostiene cualquier imagen del dossier:
// borde grueso abajo, apoyada con una ligera inclinación.
import WashiTape from './WashiTape';
import styles from './Polaroid.module.css';

const Polaroid = ({
  src,
  alt = '',
  caption,
  ratio = '4 / 5',
  rotate = -1.1,
  tape = false,
  tapeColor = 'amber',
  objectPosition,
  loading = 'lazy',
  className = '',
}) => (
  <figure
    className={`${styles.polaroid} ${className}`}
    style={{ '--rotate': `${rotate}deg` }}
  >
    {tape && (
      <span className={styles.tape} aria-hidden="true">
        <WashiTape color={tapeColor} rotation={rotate * -2.4} />
      </span>
    )}

    <span className={styles.window} style={{ aspectRatio: ratio }}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        style={objectPosition ? { objectPosition } : undefined}
        loading={loading}
      />
    </span>

    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

export default Polaroid;
