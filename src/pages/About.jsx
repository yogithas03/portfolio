import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="My journey into software development and what drives me." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              I hold a Master's degree in English Language and Literature, but my curiosity and passion for technology led me to pivot my career into software development.
            </p>
            <p>
              Through rigorous Full Stack / MERN training, I have transitioned from a non-IT background to becoming a capable and enthusiastic MERN Stack Developer. I am deeply passionate about creating websites and web applications that are not only functional but also visually stunning.
            </p>
            <p>
              My focus lies primarily in frontend development and user experience (UX). I believe that great code should result in an intuitive and accessible interface for the end user. I am currently building various projects to hone my full-stack skills and keep up with the latest industry trends.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">10+</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Projects Built</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">MERN</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Stack Focused</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-5">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Timeline</h3>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-cyan-500/30">
                  <div className="absolute w-3 h-3 bg-cyan-500 dark:bg-cyan-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Stack Training</h4>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-2">Present</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Learning and building complex, modern web applications using MERN technologies.</p>
                </div>
                
                <div className="relative pl-6 border-l border-purple-500/30">
                  <div className="absolute w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Career Transition</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">The Pivot</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Transitioned from a non-technical career path into software development, driven by a passion for technology.</p>
                </div>
                
                <div className="relative pl-6 border-l border-slate-300 dark:border-slate-700">
                  <div className="absolute w-3 h-3 bg-slate-400 dark:bg-slate-500 rounded-full -left-[6.5px] top-1.5"></div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Education</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Master of Arts</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Graduated with a Master's degree in English Language and Literature.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
