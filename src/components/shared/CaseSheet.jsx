// CaseSheet — El cuerpo del caso dentro de la lámina de lectura.
// Sirve igual a un proyecto principal y a un trabajo adicional.
import { SiFigma, SiYoutube } from 'react-icons/si';
import { TbDownload, TbExternalLink, TbArrowUpRight } from 'react-icons/tb';
import { splitTitle } from '../../utils/text';
import styles from './CaseSheet.module.css';

const Spec = ({ term, children }) =>
  children ? (
    <div className={styles.specRow}>
      <dt className="label">{term}</dt>
      <dd className={styles.specValue}>{children}</dd>
    </div>
  ) : null;

const LinkBand = ({ hook, label, href, ariaLabel, icon }) => (
  <div className={styles.band}>
    <span className={styles.bandHook}>{hook}</span>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.bandButton}
      aria-label={ariaLabel}
    >
      {icon}
      <span>{label}</span>
      <TbArrowUpRight className={styles.bandArrow} aria-hidden="true" />
    </a>
  </div>
);

const CaseSheet = ({ item, labels, titleId }) => {
  const image = item.image || item.cover || null;
  const [name, subtitle] = splitTitle(item.title);

  return (
    <article className={styles.doc}>
      <header className={styles.head}>
        <h2 id={titleId} className={styles.title}>
          {name}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </h2>
        {item.summary && <p className={styles.lead}>{item.summary}</p>}

        <dl className={styles.spec}>
          <Spec term={labels.year}>{item.year}</Spec>
          <Spec term={labels.disciplines}>
            {item.tags && item.tags.length > 0 ? item.tags.join(' · ') : null}
          </Spec>
          <Spec term={labels.tools}>
            {item.tools && item.tools.length > 0 ? item.tools.join(' · ') : null}
          </Spec>
        </dl>
      </header>

      {image && (
        <figure className={styles.plate}>
          <img src={image} alt={item.title} className={styles.plateImage} />
        </figure>
      )}

      <div className={styles.body}>
        {item.sections?.map((section, i) => (
          <section key={i} className={`rail-grid ${styles.block}`}>
            <h3 className={styles.blockTitle}>{section.title}</h3>
            <p className={styles.blockText}>{section.content}</p>
          </section>
        ))}
      </div>

      {item.liveUrl && (
        <LinkBand
          hook={item.liveHook || labels.liveHook}
          label={labels.liveButton}
          href={item.liveUrl}
          ariaLabel={`${labels.liveButton} · ${labels.liveAria}`}
          icon={<TbExternalLink aria-hidden="true" />}
        />
      )}

      {item.figmaUrl && (
        <LinkBand
          hook={labels.figmaHook}
          label={labels.figmaButton}
          href={item.figmaUrl}
          ariaLabel={`${labels.figmaButton} · ${labels.figmaAria}`}
          icon={<SiFigma aria-hidden="true" />}
        />
      )}

      {item.pdf && (
        <section className={styles.extra}>
          <h3 className={styles.extraTitle}>{labels.pdfHeading}</h3>
          <a
            href={item.pdf.file}
            download={item.pdf.downloadName}
            className={styles.pdfLink}
            aria-label={labels.pdfAria}
          >
            <span className={styles.pdfCover}>
              <img src={item.pdf.cover} alt="" className={styles.pdfImage} loading="lazy" />
            </span>
            <span className={styles.pdfMeta}>
              <span className={styles.pdfAction}>
                <TbDownload aria-hidden="true" />
                {labels.pdfAction}
              </span>
              <span className="label">{item.pdf.meta}</span>
            </span>
          </a>
        </section>
      )}

      {item.videos?.length > 0 && (
        <section className={styles.extra}>
          <h3 className={styles.extraTitle}>{labels.videos}</h3>
          <div className={styles.videoGrid}>
            {item.videos.map((id, i) => (
              <a
                key={id}
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.video}
                aria-label={`${labels.videoLabel} ${i + 1} — ${labels.videoAria}`}
              >
                <span className={styles.videoThumb}>
                  <img
                    src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                    alt=""
                    className={styles.videoImage}
                    loading="lazy"
                  />
                  <span className={styles.videoPlay} aria-hidden="true"><SiYoutube /></span>
                </span>
                <span className={styles.videoLabel}>
                  {labels.videoLabel} {i + 1}
                  <TbArrowUpRight aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {item.gallery?.length > 0 && (
        <section className={styles.extra}>
          <h3 className={styles.extraTitle}>{labels.gallery}</h3>
          <div className={styles.gallery}>
            {item.gallery.map((piece, i) => (
              <figure key={i} className={styles.piece}>
                <span className={styles.pieceFrame}>
                  <img src={piece.src} alt={piece.caption} className={styles.pieceImage} loading="lazy" />
                </span>
                <figcaption className={styles.pieceCaption}>
                  <span className={styles.pieceText}>{piece.caption}</span>
                  {piece.format && <span className="label">{piece.format}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default CaseSheet;
