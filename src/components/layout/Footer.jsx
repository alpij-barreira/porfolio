// Footer — El cierre del dossier: el correo grande y las tres vías de contacto
// como botones, no como texto suelto.
import { TbFileText, TbPhone } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import Action from '../shared/Action';
import Reveal from '../shared/Reveal';
import styles from './Footer.module.css';

const Footer = () => {
  const { content } = useLanguage();
  const { contact } = content.personal;
  const labels = content.ui.footer;
  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className={styles.footer}>
      <div className="page">
        <Reveal className={styles.head} y={14}>
          <p className={styles.lead}>{labels.emailLead}</p>
          <a href={`mailto:${contact.email}`} className={styles.email}>
            {contact.email}
          </a>
        </Reveal>

        <div className={styles.actions}>
          <Action
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            icon={<TbPhone />}
            ariaLabel={`${labels.phone}: ${contact.phone}`}
          >
            {contact.phone}
          </Action>
          <Action href={contact.linkedin} icon={<FaLinkedin />} external>
            {labels.linkedin}
          </Action>
          <Action href={contact.cv} download="JavierPineda_CV.pdf" icon={<TbFileText />}>
            {labels.cv}
          </Action>
        </div>

        <div className={styles.sign}>
          <p className={styles.signature}>{content.footer.signature}</p>
          <p className={styles.copyright}>© {year} {content.personal.name}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
