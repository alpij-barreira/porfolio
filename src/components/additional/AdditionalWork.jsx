// AdditionalWork — Índice plegado de trabajos de menor recorrido.
// Cada fila abre su ficha completa en la lámina de lectura.
import { useState } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import { projectSlug, splitTitle } from '../../utils/text';
import Fold from '../shared/Fold';
import Sheet from '../shared/Sheet';
import CaseSheet from '../shared/CaseSheet';
import styles from './AdditionalWork.module.css';

const AdditionalWork = () => {
  const { content } = useLanguage();
  const labels = { ...content.ui.projectCard, ...content.ui.additionalWork };
  const works = content.additionalWork || [];
  const [openIndex, setOpenIndex] = useState(null);

  if (works.length === 0) return null;

  const active = openIndex === null ? null : works[openIndex];
  const activeId = active ? `case-${projectSlug(active.title)}` : undefined;
  // Sólo las fichas sin anexo visual abren con la lámina de portada.
  const activeItem =
    active && !active.gallery && !active.videos && !active.pdf
      ? { ...active, image: active.thumbnail }
      : active;

  return (
    <Fold id="trabajos-adicionales" title={content.ui.sections.additionalWork} count={works.length}>
      <p className={styles.intro}>{labels.intro}</p>

      <ul className={styles.list}>
        {works.map((work, i) => {
          const [name, subtitle] = splitTitle(work.title);
          return (
            <li key={work.title}>
              <button type="button" className={styles.row} onClick={() => setOpenIndex(i)}>
                <span className={styles.thumbFrame}>
                  <img
                    src={work.thumbnail}
                    alt=""
                    className={styles.thumb}
                    style={work.thumbPosition ? { objectPosition: work.thumbPosition } : undefined}
                    loading="lazy"
                  />
                </span>

                <span className={styles.text}>
                  <span className={styles.name}>{name}</span>
                  {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                </span>

                <span className={styles.meta}>
                  {work.tools?.length > 0 && (
                    <span className={styles.tools}>{work.tools.join(' · ')}</span>
                  )}
                  <span className={styles.year}>{work.year}</span>
                </span>

                <TbArrowUpRight className={styles.arrow} aria-hidden="true" />
                <span className="sr-only">{labels.moreInfo} — {work.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <Sheet
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        labelledBy={activeId}
        closeLabel={labels.close}
      >
        {activeItem && <CaseSheet item={activeItem} labels={labels} titleId={activeId} />}
      </Sheet>
    </Fold>
  );
};

export default AdditionalWork;
