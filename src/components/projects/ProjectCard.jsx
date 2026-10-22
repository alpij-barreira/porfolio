// ProjectCard — Cada proyecto, una polaroid apoyada en la página junto a su
// ficha. El caso completo se lee en la lámina deslizante.
import { useState } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import { projectSlug, splitTitle } from '../../utils/text';
import Sheet from '../shared/Sheet';
import CaseSheet from '../shared/CaseSheet';
import Polaroid from '../shared/Polaroid';
import Reveal from '../shared/Reveal';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const { content } = useLanguage();
  const labels = content.ui.projectCard;
  const [open, setOpen] = useState(false);

  const [name, subtitle] = splitTitle(project.title);
  const slug = projectSlug(project.title);
  const titleId = `case-${slug}`;

  return (
    <>
      <Reveal as="article" id={slug} className={styles.plate} y={24}>
        <button
          type="button"
          className={styles.frame}
          onClick={() => setOpen(true)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Polaroid
            src={project.image}
            ratio="16 / 9"
            rotate={index % 2 === 0 ? -1 : 0.9}
            caption={project.year}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </button>

        <div className={styles.info}>
          <h3 className={styles.title}>
            {name}
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          </h3>

          <p className={styles.summary}>{project.summary}</p>

          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>

          <button type="button" className={`${styles.action} touch-target`} onClick={() => setOpen(true)}>
            <span>{labels.readCase}</span>
            <TbArrowUpRight aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </button>
        </div>
      </Reveal>

      <Sheet open={open} onClose={() => setOpen(false)} labelledBy={titleId} closeLabel={labels.close}>
        <CaseSheet item={project} labels={labels} titleId={titleId} />
      </Sheet>
    </>
  );
};

export default ProjectCard;
