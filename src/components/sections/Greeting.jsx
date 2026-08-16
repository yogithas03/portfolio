import { greeting } from '../../portfolioData';
import MaskedHeading from '../MaskedHeading';

const Greeting = () => {
  if (!greeting.displayGreeting) return null;

  return (
    <section id="greeting" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-[#060010]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6 relative h-[120px] w-full max-w-[600px] flex items-center justify-center md:justify-start">
              <MaskedHeading 
                text={greeting.title} 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
                align="center"
              />
            </div>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0">
              {greeting.subTitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-transparent border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
              >
                Contact Me
              </a>
              {greeting.resumeLink && (
                <a 
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-md border border-white/10 text-white font-medium transition-colors"
                >
                  See my resume
                </a>
              )}
            </div>
          </div>
          
          {/* Illustration/Image */}
          <div className="flex-1 w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Developer Illustration" 
              className="w-full h-auto rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
