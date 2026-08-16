import SectionTitle from '../components/SectionTitle';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Resume" 
          subtitle="A summary of my qualifications, experience, and skills." 
        />
        
        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8 mb-12">
          <a 
            href="/resume.pdf" 
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            <FaDownload /> Download Resume
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg glass text-white font-medium hover:bg-white/5 transition-colors"
          >
            <FaEye /> View Resume
          </a>
        </div>

        {/* Resume Preview */}
        <div className="glass rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="relative z-10 print:text-black print:bg-white">
            {/* Header */}
            <div className="border-b border-white/10 pb-6 mb-8 text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Yogithasoundararajan</h1>
              <p className="text-cyan-400 text-xl font-medium">MERN Stack Developer</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10">
              
              {/* Summary */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                  Professional Summary
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Passionate and detail-oriented MERN Stack Developer with a strong foundation in building responsive, 
                  user-centric web applications. Transitioning from a background in English Literature, bringing excellent 
                  communication skills, analytical thinking, and a unique perspective to software development.
                </p>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-2">Frontend</h3>
                    <p className="text-slate-400">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-2">Backend & Database</h3>
                    <p className="text-slate-400">Node.js, Express.js, REST APIs, MongoDB, MySQL</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-2">Tools & Platforms</h3>
                    <p className="text-slate-400">Git, GitHub, VS Code, Postman, Vite</p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                  Education
                </h2>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                    <h3 className="text-lg font-bold text-slate-200">Master of Arts – English Language and Literature</h3>
                  </div>
                  <p className="text-slate-400">Graduated with comprehensive analytical and critical thinking skills.</p>
                </div>
              </section>

              {/* Selected Projects */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                  Selected Projects
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-lg font-bold text-slate-200">Lee Beauty - E-Commerce Platform</h3>
                      <span className="text-sm text-cyan-400">React, Tailwind, React Router</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Developed a premium cosmetics e-commerce frontend.</li>
                      <li>Implemented product browsing, search functionality, and shopping cart logic.</li>
                      <li>Ensured a fully responsive design across all devices.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                      <h3 className="text-lg font-bold text-slate-200">Community Skill Exchange</h3>
                      <span className="text-sm text-cyan-400">MERN Stack</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-400 space-y-1">
                      <li>Built a platform for users to discover and exchange skills.</li>
                      <li>Designed user profiles and integrated search capabilities.</li>
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
