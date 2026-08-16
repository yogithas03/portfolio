import { educationInfo } from '../../portfolioData';

const Education = () => {
  if (!educationInfo.display) return null;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Education</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationInfo.schools.map((school, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-2xl flex flex-col sm:flex-row gap-8 items-start hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 flex-shrink-0 bg-white rounded-full p-2 shadow-md overflow-hidden flex items-center justify-center">
                <img src={school.logo} alt={school.schoolName} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">{school.schoolName}</h3>
                    <p className="text-cyan-600 dark:text-cyan-400 font-medium text-lg">{school.subHeader}</p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-sm font-medium whitespace-nowrap">
                    {school.duration}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{school.desc}</p>
                {school.descBullets && (
                  <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
                    {school.descBullets.map((bullet, i) => (
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

export default Education;
