import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import MaskedHeading from './MaskedHeading';
import { socialMediaLinks } from '../portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#greeting" className="w-56 md:w-64 flex-shrink-0 hover:opacity-80 transition-opacity flex items-center">
            <MaskedHeading 
               text="< yogithasoundararajan />" 
               tag="div" 
               src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop" 
               textScale={0.12} 
               tracking={0} 
               className="font-signature font-bold" 
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors">
              Skills
            </a>
            <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors">
              Education
            </a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium transition-colors">
              Contact
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <FaSun className="text-xl text-yellow-400" /> : <FaMoon className="text-xl text-slate-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <FaSun className="text-lg text-yellow-400" /> : <FaMoon className="text-lg text-slate-700" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass absolute top-16 left-0 right-0 border-t border-slate-200 dark:border-white/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Skills
            </a>
            <a 
              href="#education" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
