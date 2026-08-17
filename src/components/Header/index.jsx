import React, { useContext, useState } from "react";
// import Headroom from "react-headroom";
import { ThemeContext } from "../../context/ThemeContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  educationInfo,
  bigProjects
} from "../../portfolioData";

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource?.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection?.display;
  const viewBlog = blogSection?.display;
  const viewTalks = talkSection?.display;
  const viewEducation = educationInfo?.display;
  const viewProjects = bigProjects?.display;

  return (
      <header className={`max-w-full px-5 py-4 mx-auto md:flex md:items-center md:justify-between transition-colors duration-300 bg-[#060010]/80 backdrop-blur-md text-white sticky top-0 z-50`}>
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="/" className="block flex-none text-2xl no-underline mt-2">
            <span className="text-[#868e96]"> &lt;</span>
            <span className="font-signature font-bold px-2" style={{ fontVariantLigatures: "no-common-ligatures" }}>
              {greeting.username}
            </span>
            <span className="text-[#868e96]">/&gt;</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden block p-4 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-[18px] h-[2px] transition-all duration-200" style={{ background: menuOpen ? 'transparent' : 'white' }}>
              <span className={`absolute w-full h-full left-0 transition-all duration-200 bg-white`} style={{ top: menuOpen ? '0' : '-5px', transform: menuOpen ? 'rotate(45deg)' : 'none' }}></span>
              <span className={`absolute w-full h-full left-0 transition-all duration-200 bg-white`} style={{ top: menuOpen ? '0' : '5px', transform: menuOpen ? 'rotate(-45deg)' : 'none' }}></span>
            </div>
          </button>
        </div>

        <ul className={`md:flex m-0 p-0 list-none overflow-hidden transition-all duration-200 ease-out ${menuOpen ? 'max-h-[500px]' : 'max-h-0 md:max-h-none'} bg-[#060010] md:bg-transparent`}>
          {viewSkills && (
            <li className="md:float-left">
              <a href="#skills" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li className="md:float-left">
              <a href="#experience" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Work Experiences
              </a>
            </li>
          )}
          {viewEducation && (
            <li className="md:float-left">
              <a href="#education" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Education
              </a>
            </li>
          )}
          {viewProjects && (
            <li className="md:float-left">
              <a href="#projects" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Projects
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li className="md:float-left">
              <a href="#opensource" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li className="md:float-left">
              <a href="#achievements" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li className="md:float-left">
              <a href="#blogs" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li className="md:float-left">
              <a href="#talks" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
                Talks
              </a>
            </li>
          )}
          <li className="md:float-left">
            <a href="#contact" className={`block px-5 py-4 no-underline font-medium text-white hover:text-[#00d1f7] hover:drop-shadow-[0_0_12px_#00d1f7] active:drop-shadow-[0_0_15px_#00d1f7] transition-all duration-300`}>
              Contact Me
            </a>
          </li>

        </ul>
      </header>
  );
}