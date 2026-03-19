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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav">
          <button 
            onClick={() => scrollToSection('hero')}
            className="title"
          >
            &gt; KYRA'S PORTFOLIO_
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="item">
              [ABOUT]
            </button>
            <button onClick={() => scrollToSection('skills')} className="item">
              [SKILLS]
            </button>
            <button onClick={() => scrollToSection('projects')} className="item">
              [PROJECTS]
            </button>
            <button onClick={() => scrollToSection('books')} className="item">
              [BOOKS]
            </button>
            <button onClick={() => scrollToSection('contact')} className="item">
              [CONTACT]
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-gray-900 text-left transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 text-left transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('books')} className="text-gray-700 hover:text-gray-900 text-left transition-colors">
                Books
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 text-left transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
