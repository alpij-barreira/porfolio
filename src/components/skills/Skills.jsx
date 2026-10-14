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

// Reparte la lista en dos columnas equilibradas, la primera con el resto.
const inTwoColumns = (items) => {
  const half = Math.ceil(items.length / 2);
  return [items.slice(0, half), items.slice(half)];
};

const Skills = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;
  const columns = inTwoColumns(skills.core);

  return (
    <Fold id="habilidades" title={ui.sections.skills}>
      <div className={styles.grid}>
        <div>
          <h3 className="label">{ui.skills.competencias}</h3>
          <div className={styles.skillColumns}>
            {columns.map((column, i) => (
              <ul key={i} className={styles.skillList}>
                {column.map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            ))}
          </div>
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
