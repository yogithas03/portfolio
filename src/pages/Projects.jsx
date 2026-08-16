import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories
  const allCategories = ['All', ...new Set(projectsData.flatMap(p => p.categories))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.categories.includes(filter));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A selection of my recent work showcasing my skills in frontend and full-stack development." 
        />
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {allCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                  : 'glass text-slate-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center text-slate-400 py-12 glass rounded-xl">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
