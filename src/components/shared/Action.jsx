// Action — El botón del dossier: el icono en su casilla y la acción al lado.
// Mismo objeto en la portada y en el pie, para que el sitio hable con una voz.
import styles from './Action.module.css';

const Action = ({
  href,
  icon,
  children,
  download,
  external = false,
  ariaLabel,
  variant = 'default',
}) => (
  <a
    href={href}
    className={`${styles.action} ${variant === 'solid' ? styles.solid : ''}`}
    download={download}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    aria-label={ariaLabel}
  >
    <span className={styles.icon} aria-hidden="true">{icon}</span>
    <span className={styles.label}>{children}</span>
  </a>
);

export default Action;
