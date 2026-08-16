import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import codingPerson from "../../assets/lottie/codingPerson.json";
import DisplayLottie from "../../components/DisplayLottie";
import { illustration, skillsSection } from "../../portfolioData";
const developerActivity = "https://via.placeholder.com/150";
import OrbitGallery from "../../components/OrbitGallery";

export default function Skills() {
  const { isDark } = useContext(ThemeContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="w-[90%] mx-auto py-5 px-2 mt-8 lg:mt-16" id="skills">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center"
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl mb-6 font-bold ${isDark ? "text-white" : "text-black"}`}>
            {skillsSection.title}{" "}
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl mb-8 uppercase tracking-[1px] font-medium ${isDark ? "text-white" : "text-[#868e96]"}`}>
            {skillsSection.subTitle}
          </p>
          
          {/* SoftwareSkills */}
          <div className="mb-12 w-full mx-auto">
            <OrbitGallery />
          </div>
          
          <div className="max-w-4xl mx-auto text-left">
            {skillsSection.skills.map((skillText, i) => {
              return (
                <div
                  key={i}
                  className={`flex items-start mb-4 ${
                    isDark ? "text-white" : "text-[#868e96]"
                  }`}
                >
                  <span className="mr-3 text-xl mt-1">⚡</span>
                  <p className="text-base md:text-lg lg:text-[20px] leading-relaxed m-0">
                    {skillText}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}