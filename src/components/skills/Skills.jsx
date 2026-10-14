// Skills — Competencias y herramientas, plegadas con el resto del material
// de apoyo. Las notas de cada herramienta se leen, no se esconden tras un hover.
import { SiFigma, SiNotion, SiJira, SiClaude } from 'react-icons/si';
import { TbPalette } from 'react-icons/tb';
import { useLanguage } from '../../contexts/LanguageContext';
import Fold from '../shared/Fold';
import styles from './Skills.module.css';

const toolIcons = {
  figma: <SiFigma />,
  claude: <SiClaude />,
  notion: <SiNotion />,
  jira: <SiJira />,
  adobe: <TbPalette />,
};

const Skills = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  return (
    <Fold id="habilidades" title={ui.sections.skills}>
      <div className={styles.grid}>
        <div>
          <h3 className="label">{ui.skills.competencias}</h3>
          <ul className={styles.skillList}>
            {skills.core.map((skill) => (
              <li key={skill} className={styles.skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="label">{ui.skills.herramientas}</h3>
          <ul className={styles.toolList}>
            {skills.tools.map((tool) => (
              <li key={tool.name} className={styles.tool}>
                <span className={styles.toolIcon} aria-hidden="true">{toolIcons[tool.icon]}</span>
                <span className={styles.toolBody}>
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={styles.toolNote}>{tool.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fold>
  );
};

export default Skills;
