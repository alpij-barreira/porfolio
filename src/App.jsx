import SketchyBorder from './components/shared/SketchyBorder';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Education from './components/education/Education';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/global.css';
import './styles/textures.css';

function App() {
  return (
    <LanguageProvider>
      {/* Global SVG filters */}
      <SketchyBorder />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <Footer />
    </LanguageProvider>
  );
}

export default App;
