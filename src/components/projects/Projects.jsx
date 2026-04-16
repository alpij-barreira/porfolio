// Projects — Grid de proyectos con stagger animation
// Framer: motion.div (staggerChildren on grid, rotate on cards)
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardRotations = [-0.4, 0.3, 0.25, -0.35];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const Projects = () => {
  const { content } = useLanguage();

  return (
    <Section id="proyectos">
      <h2 className={styles.sectionTitle}>{content.ui.sections.projects}</h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {content.projects.map((project, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{ rotate: cardRotations[i % cardRotations.length] }}
            whileHover={{ rotate: 0 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
