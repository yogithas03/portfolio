import { bigProjects } from '../../portfolioData';
import AccordionGallery from '../AccordionGallery';

const Projects = () => {
  if (!bigProjects.display) return null;

  const items = bigProjects.projects.map(p => ({
    image: p.image,
    label: p.projectName,
    link: p.footerLink?.[0]?.url || '#'
  }));

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{bigProjects.title}</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium mb-12">
            {bigProjects.subtitle}
          </p>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl">
            <AccordionGallery
              items={items}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#060010"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              height={460}
              gap={10}
              radius={16}
              orientation="horizontal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
