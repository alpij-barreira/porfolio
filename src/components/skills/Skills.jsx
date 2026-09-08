// Skills — Competencias, herramientas y aprendizaje actual
// Framer: motion.div (stagger en skill tags y tool cards)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiFigma, SiNotion, SiJira, SiClaude } from 'react-icons/si';
import { TbPalette } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../layout/Section';
import styles from './Skills.module.css';

const toolIcons = {
  figma: <SiFigma />,
  claude: <SiClaude />,
  notion: <SiNotion />,
  jira: <SiJira />,
  adobe: <TbPalette />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

const ToolCard = ({ tool }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={styles.toolCard}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={styles.toolInner}>
        <span className={styles.toolIcon}>{toolIcons[tool.icon]}</span>
        <span className={styles.toolName}>{tool.name}</span>
      </div>
      {showTooltip && (
        <motion.div
          className={styles.tooltip}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
        >
          {tool.note}
        </motion.div>
      )}
    </div>
  );
};

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;
  const ui = content.ui;

  return (
    <Section id="skills">
      <h2 className={styles.sectionTitle}>{ui.sections.skills}</h2>

      {/* Core skills */}
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>{ui.skills.competencias}</h3>
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.core.map((skill, i) => (
            <motion.div key={i} variants={itemVariants} className={styles.skillTag}>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tools */}
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>{ui.skills.herramientas}</h3>
        <motion.div
          className={styles.toolsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.tools.map((tool, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </Section>
  );
};

export default Skills;
