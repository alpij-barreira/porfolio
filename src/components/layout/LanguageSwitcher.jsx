// LanguageSwitcher — Botones con banderas ES / EN
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

// SVG inline de las banderas — consistente en todos los SO (sin depender de emojis)
const FlagES = () => (
  <svg className={styles.flag} viewBox="0 0 6 4" aria-hidden="true">
    <rect width="6" height="4" fill="#C60B1E" />
    <rect width="6" height="2" y="1" fill="#FFC400" />
  </svg>
);

const FlagGB = () => (
  <svg className={styles.flag} viewBox="0 0 60 30" aria-hidden="true">
    <clipPath id="gb-clip">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="gb-clip-2">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#gb-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb-clip-2)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const LanguageSwitcher = ({ variant = 'default' }) => {
  const { lang, setLang, content } = useLanguage();
  const { language } = content.ui;

  return (
    <div className={`${styles.switcher} ${variant === 'mobile' ? styles.mobile : ''}`}>
      <button
        type="button"
        className={`${styles.btn} ${lang === 'es' ? styles.active : ''}`}
        onClick={() => setLang('es')}
        aria-label={language.switchToEs}
        aria-pressed={lang === 'es'}
      >
        <FlagES />
        <span className={styles.code}>ES</span>
      </button>
      <button
        type="button"
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => setLang('en')}
        aria-label={language.switchToEn}
        aria-pressed={lang === 'en'}
      >
        <FlagGB />
        <span className={styles.code}>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
