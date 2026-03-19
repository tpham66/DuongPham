import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Books } from './components/Books';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <Hero/>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Books />
      <Contact />
    </div>
  );
}
