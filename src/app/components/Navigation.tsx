import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav">
          <button 
            onClick={() => scrollToSection('hero')}
            className="title"
          >
            &gt; KYRA'S PORTFOLIO_
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="item">
              [ABOUT]
            </button>
            <button onClick={() => scrollToSection('skills')} className="item">
              [SKILLS]
            </button>
            <button onClick={() => scrollToSection('experience')} className="item">
              [EXPERIENCE]
            </button>
            <button onClick={() => scrollToSection('projects')} className="item">
              [PROJECTS]
            </button>
            <button onClick={() => scrollToSection('books')} className="item">
              [BOOKS]
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-[#e04560]"
          >
            {isOpen ? <X size={70} /> : <Menu size={70} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-400">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="mobile-item">
                [ABOUT]
              </button>
              <button onClick={() => scrollToSection('skills')} className="mobile-item">
                [SKILLS]
              </button>
              <button onClick={() => scrollToSection('experience')} className="mobile-item">
                [EXPERIENCE]
              </button>
              <button onClick={() => scrollToSection('projects')} className="mobile-item">
                [PROJECTS]
              </button>
              <button onClick={() => scrollToSection('books')} className="mobile-item">
                [BOOKS]
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
