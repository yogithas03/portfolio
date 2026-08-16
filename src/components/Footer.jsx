import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import MaskedHeading from './MaskedHeading';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="w-56 mb-4">
              <MaskedHeading 
                 text="< yogithasoundararajan />" 
                 tag="div" 
                 src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000&auto=format&fit=crop" 
                 textScale={0.12} 
                 tracking={0} 
                 className="font-signature font-bold" 
              />
            </div>
            <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">MERN Stack Developer</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xs">
              Building responsive, user-friendly and modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <a href="#greeting" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm">Home</a>
              <a href="#skills" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm">Skills</a>
              <a href="#education" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm">Education</a>
              <a href="#projects" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-all border border-slate-300 dark:border-white/10">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 hover:bg-slate-300 dark:hover:text-cyan-400 dark:hover:bg-slate-800 transition-all border border-slate-300 dark:border-white/10">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:example@email.com" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-purple-600 hover:bg-slate-300 dark:hover:text-purple-400 dark:hover:bg-slate-800 transition-all border border-slate-300 dark:border-white/10">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>&copy; {currentYear} Yogithasoundararajan. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
