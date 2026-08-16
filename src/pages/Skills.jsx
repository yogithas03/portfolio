import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="A comprehensive overview of the technologies and tools I work with." 
        />
        
        <div className="space-y-16 mt-12">
          {skillsData.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm">
                  {index + 1}
                </span>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
