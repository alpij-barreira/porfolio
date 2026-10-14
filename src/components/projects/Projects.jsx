// Projects — El trabajo seleccionado, una lámina por proyecto.
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import SectionHead from '../shared/SectionHead';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const { content } = useLanguage();

  return (
    <Section id="trabajo">
      <SectionHead title={content.ui.sections.projects} />

      <div className={styles.plates}>
        {content.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
