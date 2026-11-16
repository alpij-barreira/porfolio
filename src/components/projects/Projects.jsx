// Projects — El trabajo seleccionado, una lámina por proyecto.
// Sólo los primeros llegan abiertos, el resto espera tras «Ver más proyectos».
import { useState, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TbChevronDown } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import SectionHead from '../shared/SectionHead';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

// Número par a propósito: la alternancia de lados va por :nth-child y el
// bloque plegado vuelve a contar desde 1, así que con un número par cada
// lámina sigue en el lado que le toca.
const VISIBLE = 2;

const Projects = () => {
  const { content } = useLanguage();
  const labels = content.ui.projects;
  const [open, setOpen] = useState(false);
  const [settled, setSettled] = useState(false);
  const reduced = useReducedMotion();
  const panelId = useId();

  const visible = content.projects.slice(0, VISIBLE);
  const more = content.projects.slice(VISIBLE);

  return (
    <Section id="trabajo">
      <SectionHead title={content.ui.sections.projects} />

      <div className={styles.plates}>
        {visible.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {more.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                // El recorte sólo dura lo que dura el despliegue: abierto, las
                // sombras y el giro de las polaroids no se cortan por el borde.
                style={{ overflow: settled ? 'visible' : 'hidden' }}
                onAnimationStart={() => setSettled(false)}
                onAnimationComplete={() => setSettled(open)}
                initial={reduced ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={`${styles.plates} ${styles.moreInner}`}>
                  {more.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={VISIBLE + i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            className={`${styles.toggle} touch-target`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
          >
            <span>{open ? labels.showLess : labels.showMore}</span>
            <TbChevronDown
              className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
              aria-hidden="true"
            />
          </button>
        </>
      )}
    </Section>
  );
};

export default Projects;
