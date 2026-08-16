import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission for frontend-only portfolio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Alternatively, use mailto:
      // window.location.href = `mailto:example@email.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\nMessage: ${formData.message}`)}`;
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Build Something <span className="text-gradient">Together</span>
            </h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:example@email.com" className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Email</h4>
                  <p className="text-slate-400 text-sm">hello@example.com</p>
                </div>
              </a>
              
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">LinkedIn</h4>
                  <p className="text-slate-400 text-sm">Connect professionally</p>
                </div>
              </a>
              
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass rounded-xl hover:border-cyan-500/50 transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">GitHub</h4>
                  <p className="text-slate-400 text-sm">Check out my repos</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Location</h4>
                  <p className="text-slate-400 text-sm">Available Remotely</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all shadow-lg ${
                  isSubmitting 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:shadow-cyan-500/25'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 text-green-400 text-sm text-center border border-green-500/30">
                  Message sent successfully! (Simulated)
                </div>
              )}
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
