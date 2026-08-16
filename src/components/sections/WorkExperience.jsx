import { workExperiences } from '../../portfolioData';

const WorkExperience = () => {
  if (!workExperiences.display) return null;

  return (
    <section id="experience" className="py-20 bg-[#060010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Work Experience</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {workExperiences.experience.map((exp, index) => (
            <div 
              key={index} 
              className="bg-[#0a0713] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] p-8 rounded-2xl flex flex-col sm:flex-row gap-8 items-start hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group"
            >
              <div className="w-24 h-24 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-2 shadow-sm overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img src={exp.companylogo} alt={exp.company} className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium whitespace-nowrap text-slate-300">
                    {exp.date}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{exp.desc}</p>
                {exp.descBullets && (
                  <ul className="list-disc list-inside space-y-1 text-slate-400">
                    {exp.descBullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
