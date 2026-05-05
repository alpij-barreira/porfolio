// Hero — Sección principal con bio, foto y animación de entrada
// Framer: motion.div (stagger fade-in en textos), motion.svg (photo frame)
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import HandwrittenNote from '../shared/HandwrittenNote';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Hero = () => {
  const { content } = useLanguage();
  const { personal } = content;

  return (
    <section id="sobre-mi" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left column — text */}
          <div className={styles.textCol}>
            <motion.h1 variants={itemVariants} className={styles.name}>
              {personal.name}
            </motion.h1>

            <motion.p variants={itemVariants} className={styles.tagline}>
              {personal.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className={styles.bio}>
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              className={styles.marginNote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0, delay: 0.8 }}
            >
              <div className={styles.handwriteReveal}>
                <HandwrittenNote rotation={-2} withTape tapeColor="amber">
                  <span style={{ display: 'inline-block', transform: 'scaleX(-1) rotate(90deg)', marginRight: '0.2em' }} aria-hidden="true">↰</span>
                  {personal.marginNote}
                </HandwrittenNote>
              </div>
            </motion.div>
          </div>

          {/* Right column — photo */}
          <motion.div variants={itemVariants} className={styles.photoCol}>
            <div className={styles.photoWrapper}>
              <svg
                className={styles.photoFrame}
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="photo-sketch">
                    <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" result="noise" seed="5" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                  <clipPath id="organic-clip">
                    <ellipse cx="100" cy="100" rx="88" ry="90" />
                  </clipPath>
                </defs>
                <ellipse
                  cx="100"
                  cy="100"
                  rx="88"
                  ry="90"
                  fill="none"
                  stroke="var(--color-graphite-soft)"
                  strokeWidth="1.5"
                  style={{ filter: 'url(#photo-sketch)' }}
                />
                <foreignObject x="12" y="10" width="176" height="180" clipPath="url(#organic-clip)">
                  <img
                    src={personal.photo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 25%',
                    }}
                  />
                </foreignObject>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
