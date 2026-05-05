// Navbar — Navegación fija con logo animado, menú móvil y selector de idioma
// Framer: AnimatePresence (logo clipPath reveal, mobile menu height)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbFileText } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className={styles.navLink}>
      {children}
      <span className={styles.underline} />
    </a>
  );
};

const Navbar = () => {
  const { content } = useLanguage();
  const { nav } = content.ui;
  const { cv } = content.personal.contact;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const title = document.querySelector('#sobre-mi h1');
    if (!title) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#experiencia', label: nav.experience },
    { href: '#proyectos', label: nav.projects },
    { href: '#contacto', label: nav.contact },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <AnimatePresence>
          {pastHero && (
            <motion.a
              href="#"
              className={styles.logo}
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              exit={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {content.personal.name}
            </motion.a>
          )}
        </AnimatePresence>

        <nav className={styles.nav}>
          {links.map(link => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <a
            href={cv}
            download="JavierPineda_CV.pdf"
            className={styles.cvButton}
            title={nav.downloadCV}
          >
            <TbFileText aria-hidden="true" />
            <span>{nav.downloadCV}</span>
          </a>
          <LanguageSwitcher />
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={nav.openMenu}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={cv}
              download="JavierPineda_CV.pdf"
              className={styles.mobileCvLink}
            >
              <TbFileText aria-hidden="true" />
              {nav.downloadCV}
            </a>
            <LanguageSwitcher variant="mobile" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
