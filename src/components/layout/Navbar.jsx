// Navbar — Barra de papel: el nombre aparece al dejar la portada atrás,
// y la navegación se mantiene a mano sin pesar.
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TbFileText, TbMenu2, TbX } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { content } = useLanguage();
  const { nav } = content.ui;
  const { cv } = content.personal.contact;
  const reduced = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastCover, setPastCover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const title = document.querySelector('#portada h1');
    if (!title) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastCover(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: '#trabajo', label: nav.work },
    { href: '#experiencia', label: nav.experience },
    { href: '#contacto', label: nav.contact },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`page ${styles.inner}`}>
        <AnimatePresence>
          {pastCover && (
            <motion.a
              href="#portada"
              className={styles.logo}
              initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {content.personal.name}
            </motion.a>
          )}
        </AnimatePresence>

        <nav className={styles.nav} aria-label={content.ui.sections.contact}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href={cv} download="JavierPineda_CV.pdf" className={styles.cvButton}>
            <TbFileText aria-hidden="true" />
            <span>{nav.downloadCV}</span>
          </a>
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={nav.openMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <TbX aria-hidden="true" /> : <TbMenu2 aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`page ${styles.mobileInner}`}>
              {links.map((link) => (
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
                className={styles.mobileCv}
                onClick={() => setMenuOpen(false)}
              >
                <TbFileText aria-hidden="true" />
                {nav.downloadCV}
              </a>
              <LanguageSwitcher variant="mobile" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
