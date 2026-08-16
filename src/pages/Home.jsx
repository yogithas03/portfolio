import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium border border-cyan-500/20">
                Available for Opportunities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span>Yogithasoundararajan</span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              MERN Stack Developer
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">
              I build responsive, user-friendly and modern web applications using React.js, Node.js, Express.js and MongoDB.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/projects" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg hover:shadow-cyan-500/25 text-center"
              >
                View My Projects
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="px-8 py-3 rounded-lg glass text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-center"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 border-t border-slate-200 dark:border-white/10 w-max mx-auto lg:mx-0">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:example@email.com" className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Code Window */}
            <div className="absolute inset-0 glass rounded-2xl p-6 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 shadow-xl dark:shadow-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm space-y-4">
                <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-cyan-600 dark:text-cyan-400">developer</span> <span className="text-slate-800 dark:text-white">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">name:</span> <span className="text-green-600 dark:text-green-300">'Yogithasoundararajan'</span>,</p>
                <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">role:</span> <span className="text-green-600 dark:text-green-300">'MERN Stack Developer'</span>,</p>
                <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">skills:</span> ['React', 'Node', 'Express', 'MongoDB'],</p>
                <p className="pl-4"><span className="text-slate-500 dark:text-slate-400">passion:</span> <span className="text-green-600 dark:text-green-300">'Building beautiful UIs'</span></p>
                <p className="text-slate-800 dark:text-white">{'}'};</p>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-10 -left-6 glass p-4 rounded-xl text-cyan-500 dark:text-cyan-400 animate-[bounce_4s_infinite]">
              <FaReact size={32} />
            </div>
            <div className="absolute top-40 -right-8 glass p-4 rounded-xl text-yellow-500 dark:text-yellow-400 animate-[bounce_5s_infinite_0.5s]">
              <SiJavascript size={32} />
            </div>
            <div className="absolute bottom-32 -left-4 glass p-4 rounded-xl text-green-600 dark:text-green-500 animate-[bounce_6s_infinite_1s]">
              <FaNodeJs size={32} />
            </div>
            <div className="absolute bottom-10 right-10 glass p-4 rounded-xl text-green-500 dark:text-green-400 animate-[bounce_4s_infinite_1.5s]">
              <SiMongodb size={32} />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
