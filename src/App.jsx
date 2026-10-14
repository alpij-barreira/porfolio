import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import AdditionalWork from './components/additional/AdditionalWork';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Section from './components/layout/Section';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/global.css';
import './styles/textures.css';

function App() {
  return (
    <LanguageProvider>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />

        {/* Material de apoyo: llega plegado, se abre si interesa */}
        <Section id="apendice" tone="warm">
          <AdditionalWork />
          <Education />
          <Skills />
        </Section>
      </main>

      <Footer />
    </LanguageProvider>
  );
}

export default App;
