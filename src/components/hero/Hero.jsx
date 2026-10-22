// Hero — La portada: el nombre, el retrato y quién eres, sin rodeos.
// La entrada es CSS puro: el contenido nunca depende de que corra el JS.
import { TbFileText, TbMail, TbPhone } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import Action from '../shared/Action';
import Polaroid from '../shared/Polaroid';
import styles from './Hero.module.css';

const Hero = () => {
  const { content } = useLanguage();
  const { personal, ui } = content;

  return (
    <section id="portada" className={styles.cover}>
      <div className={`page ${styles.inner}`}>
        <div className={styles.titleBlock}>
          <h1 className={styles.name}>{personal.name}</h1>
          <p className={styles.tagline}>{personal.tagline}</p>
        </div>

        <div className={styles.lower}>
          <Polaroid
            className={styles.portrait}
            src={personal.photo}
            alt={personal.name}
            ratio="4 / 5"
            rotate={-1.4}
            tape
            objectPosition="center 22%"
            loading="eager"
          />

          <div className={styles.intro}>
            <div className={styles.bio}>
              {personal.bio.map((paragraph, i) => (
                <p key={i} className={i === 0 ? styles.lead : undefined}>{paragraph}</p>
              ))}
            </div>

            <p className={styles.note}>{personal.marginNote}</p>

            <div className={styles.actions}>
              <Action
                href={`tel:${personal.contact.phone.replace(/\s/g, '')}`}
                icon={<TbPhone />}
                ariaLabel={`${ui.cover.callMe}: ${personal.contact.phone}`}
              >
                {ui.cover.callMe}
              </Action>
              <Action href={`mailto:${personal.contact.email}`} icon={<TbMail />}>
                {ui.cover.writeMe}
              </Action>
              <Action
                href={personal.contact.cv}
                download="JavierPineda_CV.pdf"
                icon={<TbFileText />}
              >
                {ui.nav.downloadCV}
              </Action>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
