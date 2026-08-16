import React from "react";
import "./OrbitGallery.css";
import { skillsSection } from "../portfolioData";
import codingPerson from "../assets/lottie/codingPerson.json";
import DisplayLottie from "./DisplayLottie";

const OrbitGallery = () => {
  const allSkills = skillsSection.softwareSkills;

  // Orbit 1: Outer (Frontend, 5 skills)
  const outerSkillNames = ["HTML5", "CSS3", "Bootstrap 5", "Tailwind CSS", "JavaScript (ES6+)"];
  const outerSkills = allSkills.filter(skill => outerSkillNames.includes(skill.skillName));

  // Orbit 2: Middle (React & Backend, 5 skills)
  const middleSkillNames = ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"];
  const middleSkills = allSkills.filter(skill => middleSkillNames.includes(skill.skillName));

  // Orbit 3: Inner (Tools, 4 skills)
  const innerSkillNames = ["Git", "GitHub", "REST API", "VS Code"];
  const innerSkills = allSkills.filter(skill => innerSkillNames.includes(skill.skillName));

  const renderOrbit = (skills, orbitClass) => {
    return (
      <div className={`orbit ${orbitClass}`}>
        {skills.map((skill, index) => {
          // Calculate the starting angle for evenly distributing skills
          const angle = (360 / skills.length) * index;
          return (
            <div
              key={index}
              className="orbit-card-wrapper"
              style={{
                transform: `rotate(${angle}deg)`
              }}
            >
              <div className="orbit-card-counter-rotator">
                <div 
                  className={`orbit-card-content-wrapper ${skill.color}`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(-${angle}deg)`
                  }}
                >
                  <div className="orbit-card">
                    <div className="orbit-card-inner">
                      {skill.icon && React.createElement(skill.icon, { className: "orbit-card-icon" })}
                    </div>
                  </div>
                  <div className="orbit-card-label">
                    {skill.skillName}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="orbit-section">
      <div className="orbit-container">
        
        {/* Stationary Center Logo */}
        <div className="orbit-center">
          <DisplayLottie animationData={codingPerson} />
        </div>

        {/* Orbit 3 - Inner */}
        {renderOrbit(innerSkills, "orbit-inner")}

        {/* Orbit 2 - Middle */}
        {renderOrbit(middleSkills, "orbit-middle")}

        {/* Orbit 1 - Outer */}
        {renderOrbit(outerSkills, "orbit-outer")}

      </div>
    </section>
  );
};

export default OrbitGallery;
