// Reveal — Entrada contenida y única para todo el documento:
// el contenido ya está presente, sólo asienta. Respeta prefers-reduced-motion.
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 18, className, as = 'div', ...rest }) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduced) return <MotionTag className={className} {...rest}>{children}</MotionTag>;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
