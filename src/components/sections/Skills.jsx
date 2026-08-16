import { skillsSection, techStack } from '../../portfolioData';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Skills = () => {
  if (!skillsSection.display) return null;

  return (
    <section id="skills" className="py-20 bg-[#060010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Illustration */}
          <div className="flex-1 w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
              alt="Skills" 
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center lg:text-left text-white">{skillsSection.title}</h2>
            <p className="text-xl text-slate-400 mb-8 text-center lg:text-left uppercase tracking-wider font-medium">
              {skillsSection.subTitle}
            </p>

            {/* Software Skills Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {skillsSection.softwareSkills.map((skill, index) => {
                const Icon = FaIcons[skill.icon] || SiIcons[skill.icon];
                return (
                  <div key={index} className="flex flex-col items-center gap-2 group">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0a0713] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-white/20"
                      style={{ color: skill.color }}
                    >
                      {Icon && <Icon className="text-3xl" />}
                    </div>
                    <span className="text-sm font-medium text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.skillName}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Skills List */}
            <div className="space-y-4 mb-12">
              {skillsSection.skills.map((skillLine, index) => (
                <p key={index} className="text-lg text-slate-300">
                  {skillLine}
                </p>
              ))}
            </div>

            {/* Tech Stack Bars */}
            {techStack.viewSkillBars && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Proficiency</h3>
                {techStack.experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-slate-300">
                      <span>{exp.Stack}</span>
                      <span>{exp.progressPercentage}</span>
                    </div>
                    <div className="w-full h-3 bg-[#0a0713] border border-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: exp.progressPercentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
