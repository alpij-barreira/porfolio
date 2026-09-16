// AdditionalWorkCard — Tarjeta horizontal de trabajo adicional con modal y galería
// Framer: motion.div (hover x-lift), AnimatePresence (modal enter/exit)
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SiYoutube } from 'react-icons/si';
import { TbDownload, TbExternalLink } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './AdditionalWorkCard.module.css';

const AdditionalWorkCard = ({ work }) => {
  const { content } = useLanguage();
  const labels = content.ui.additionalWork;
  const [expanded, setExpanded] = useState(false);
  const scrollPosRef = useRef(0);

  // Bloquear scroll (compatible con iOS) y cerrar con Escape
  useEffect(() => {
    if (expanded) {
      scrollPosRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setExpanded(false);
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        const savedPos = scrollPosRef.current;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo({ top: savedPos, behavior: 'instant' });
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [expanded]);

  return (
    <>
      {/* Tarjeta apaisada */}
      <motion.div
        className={styles.card}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => setExpanded(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setExpanded(true);
          }
        }}
      >
        <div className={styles.thumbWrapper}>
          <img src={work.thumbnail} alt="" className={styles.thumb} />
          {work.status && <span className={styles.status}>{work.status}</span>}
          {work.year && <span className={styles.year}>{work.year}</span>}
        </div>

        <div className={styles.main}>
          {/* Cuerpo: titular y resumen */}
          <div className={styles.body}>
            <h3 className={styles.title}>{work.title}</h3>
            <p className={styles.summary}>{work.summary}</p>
          </div>

          {/* Pie: la acción, siempre a la misma altura en todas las tarjetas */}
          <div className={styles.footer}>
            <span className={styles.moreInfo}>
              {labels.moreInfo}
              <span className={styles.moreInfoUnderline} />
            </span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </div>
        </div>
      </motion.div>

      {/* Modal via portal — se renderiza en document.body */}
      {createPortal(
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
                aria-labelledby={`aw-modal-title-${work.title}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.close} onClick={() => setExpanded(false)} aria-label={labels.close}>✕</button>

                <div className={styles.modalContent}>
                  <h2 id={`aw-modal-title-${work.title}`} className={styles.modalTitle}>{work.title}</h2>

                  {((work.tools && work.tools.length > 0) || work.status) && (
                    <div className={styles.tools}>
                      {work.status && <span className={styles.modalStatus}>{work.status}</span>}
                      {work.tools && work.tools.map((tool, i) => (
                        <span key={i} className={styles.toolTag}>{tool}</span>
                      ))}
                    </div>
                  )}

                  <p className={styles.modalSummary}>{work.summary}</p>

                  {work.sections && work.sections.map((section, i) => (
                    <div key={i} className={styles.section}>
                      <h4 className={styles.sectionHeading}>{section.title}</h4>
                      <p className={styles.sectionContent}>{section.content}</p>
                    </div>
                  ))}

                  {/* Enlace al proyecto en vivo */}
                  {work.liveUrl && (
                    <div className={styles.liveCta}>
                      <span className={styles.liveHook}>{work.liveHook || labels.liveHook}</span>
                      <a
                        href={work.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.liveButton}
                        aria-label={`${labels.liveButton} · ${labels.liveAria}`}
                      >
                        <TbExternalLink aria-hidden="true" />
                        <span>{labels.liveButton}</span>
                        <span className={styles.liveArrow} aria-hidden="true">↗</span>
                      </a>
                    </div>
                  )}

                  {/* PDF — portada como preview; al pulsar, se descarga */}
                  {work.pdf && (
                    <div className={styles.pdf}>
                      <h4 className={styles.sectionHeading}>{labels.pdfHeading}</h4>
                      <a
                        href={work.pdf.file}
                        download={work.pdf.downloadName}
                        className={styles.pdfLink}
                        aria-label={labels.pdfAria}
                      >
                        <div className={styles.pdfCover}>
                          <img src={work.pdf.cover} alt="" className={styles.pdfImage} loading="lazy" />
                          <span className={styles.pdfOverlay}>
                            <TbDownload aria-hidden="true" />
                            <span>{labels.pdfAction}</span>
                          </span>
                        </div>
                        <span className={styles.pdfMeta}>{work.pdf.meta}</span>
                      </a>
                    </div>
                  )}

                  {/* Vídeos — se abren en YouTube en una pestaña nueva */}
                  {work.videos && work.videos.length > 0 && (
                    <div className={styles.videos}>
                      <h4 className={styles.sectionHeading}>{labels.videos}</h4>
                      <div className={styles.videoList}>
                        {work.videos.map((id, i) => (
                          <a
                            key={id}
                            href={`https://www.youtube.com/watch?v=${id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.videoLink}
                            aria-label={`${labels.videoLabel} ${i + 1} — ${labels.videoAria}`}
                          >
                            <div className={styles.videoThumb}>
                              <img
                                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                                alt=""
                                className={styles.videoImage}
                                loading="lazy"
                              />
                              <span className={styles.videoPlay} aria-hidden="true">
                                <SiYoutube />
                              </span>
                            </div>
                            <span className={styles.videoTitle}>{`${labels.videoLabel} ${i + 1}`}</span>
                            <span className={styles.videoArrow} aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Galería de piezas */}
                  {work.gallery && work.gallery.length > 0 && (
                    <div className={styles.gallery}>
                      <h4 className={styles.sectionHeading}>{labels.gallery}</h4>
                      <div className={styles.galleryItems}>
                        {work.gallery.map((piece, i) => (
                          <figure key={i} className={styles.piece}>
                            <div className={styles.pieceFrame}>
                              <img src={piece.src} alt={piece.caption} className={styles.pieceImage} loading="lazy" />
                            </div>
                            <figcaption className={styles.pieceCaption}>
                              <span className={styles.pieceText}>{piece.caption}</span>
                              {piece.format && <span className={styles.pieceFormat}>{piece.format}</span>}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default AdditionalWorkCard;
