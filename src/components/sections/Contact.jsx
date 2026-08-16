import { contactInfo, socialMediaLinks } from '../../portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const getIcon = (key) => {
    switch(key) {
      case 'github': return <FaGithub />;
      case 'linkedin': return <FaLinkedin />;
      case 'gmail': return <FaEnvelope />;
      case 'twitter': return <FaTwitter />;
      case 'facebook': return <FaFacebook />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#060010] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">{contactInfo.title}</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0">
              {contactInfo.subtitle}
            </p>

            <div className="space-y-6 mb-12">
              <p className="text-2xl font-medium text-cyan-400">
                {contactInfo.number}
              </p>
              <a 
                href={`mailto:${contactInfo.email_address}`} 
                className="inline-block text-2xl font-medium text-white hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
              >
                {contactInfo.email_address}
              </a>
            </div>

            {socialMediaLinks.display && (
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {Object.entries(socialMediaLinks).map(([key, value]) => {
                  if (key === 'display') return null;
                  const icon = getIcon(key);
                  if (!icon) return null;
                  
                  return (
                    <a 
                      key={key}
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-[#0a0713] border border-white/10 flex items-center justify-center text-2xl text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-2"
                    >
                      {icon}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Profile Image */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Profile" 
              className="relative w-full h-auto aspect-square object-cover rounded-full border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
