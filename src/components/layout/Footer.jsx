// Footer — Contacto, firma y copyright
// Framer: useInView (animación de escritura en firma)
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TbFileText } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Footer.module.css';

const FooterLink = ({ href, download, children }) => (
  <a
    href={href}
    className={styles.link}
    target="_blank"
    rel="noopener noreferrer"
    download={download || undefined}
  >
    {children}
    <span className={styles.underline} />
  </a>
);

const Footer = () => {
  const { content } = useLanguage();
  const year = new Date().getFullYear();
  const { contact } = content.personal;
  const signatureRef = useRef(null);
  const isInView = useInView(signatureRef, { once: true, amount: 0.5 });

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <FooterLink href={`mailto:${contact.email}`}>
            {contact.email}
          </FooterLink>
          <FooterLink href={`tel:${contact.phone.replace(/\s/g, '')}`}>
            {contact.phone}
          </FooterLink>
          <FooterLink href={contact.cv} download="JavierPineda_CV2026.pdf">
            <span className={styles.linkInner}>
              <TbFileText />
              {content.ui.footer.cv}
            </span>
          </FooterLink>
        </div>

        <p
          ref={signatureRef}
          className={`${styles.signature} ${isInView ? styles.signatureVisible : ''}`}
        >
          {content.footer.signature}
        </p>
        <p className={styles.copyright}>© {year} {content.personal.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
