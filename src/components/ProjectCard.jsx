import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass rounded-2xl overflow-hidden card-hover group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 md:h-56">
        <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-fill transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-300 dark:border-white/10"
          >
            <FaGithub /> 
            <span className="text-sm font-medium">Code</span>
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            <FaExternalLinkAlt size={12} /> 
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
