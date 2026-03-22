// ProjectCard — Tarjeta de proyecto con modal expandible
// Framer: motion.div (hover y-lift), AnimatePresence (modal enter/exit)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectCard.module.css';

const tagColorMap = {
  'UX Research': 'blue',
  'Investigación cualitativa': 'blue',
  'Design Thinking': 'blue',
  'UX/UI Design': 'green',
  'Wireframing': 'green',
  'Prototipado': 'amber',
  'Pruebas de usuario': 'amber',
  'Design Sprint': 'red',
  'Análisis heurístico': 'red',
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  // Bloquear scroll y cerrar con Escape cuando el modal está abierto
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setExpanded(false);
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [expanded]);

  return (
    <>
      {/* Card compacta en el grid */}
      <motion.div
        className={styles.card}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setExpanded(true)}
        style={{ cursor: 'pointer' }}
      >
        {/* Thumbnail */}
        <div className={styles.thumbnailWrapper}>
          {project.image ? (
            <img src={project.image} alt={project.title} className={styles.thumbnail} />
          ) : (
            <div className={styles.thumbnailPlaceholder}>
              <span className={styles.thumbnailLabel}>{project.title}</span>
              <span className={styles.thumbnailSize}>16:9</span>
            </div>
          )}
        </div>

        {/* Info row */}
        <div className={styles.infoRow}>
          <div className={styles.meta}>
            <span className={styles.title}>{project.title}</span>
            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <span key={i} className={`${styles.tag} ${styles[`tag${tagColorMap[tag] || ''}`] || ''}`}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.moreInfo}>
              Más información
              <span className={styles.moreInfoUnderline} />
            </span>
            <span className={styles.arrow}>↗</span>
          </div>
        </div>
      </motion.div>

      {/* Modal overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setExpanded(false)}
          >
            <motion.div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${project.title}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button className={styles.close} onClick={() => setExpanded(false)} aria-label="Cerrar">✕</button>

              {/* Imagen */}
              {project.image && (
                <div className={styles.modalThumbnail}>
                  <img src={project.image} alt={project.title} className={styles.modalImage} />
                </div>
              )}

              {/* Contenido */}
              <div className={styles.modalContent}>
                <h2 id={`modal-title-${project.title}`} className={styles.modalTitle}>{project.title}</h2>

                <div className={styles.modalTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`${styles.tag} ${styles[`tag${tagColorMap[tag] || ''}`] || ''}`}>{tag}</span>
                  ))}
                </div>

                <p className={styles.modalSummary}>{project.summary}</p>

                {project.sections && project.sections.map((section, i) => (
                  <div key={i} className={styles.section}>
                    <h4 className={styles.sectionHeading}>{section.title}</h4>
                    <p className={styles.sectionContent}>{section.content}</p>
                  </div>
                ))}

                {project.tools && project.tools.length > 0 && (
                  <div className={styles.tools}>
                    {project.tools.map((tool, i) => (
                      <span key={i} className={styles.toolTag}>{tool}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
