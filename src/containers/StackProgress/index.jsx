import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import Build from "../../assets/lottie/build.json";
import DisplayLottie from "../../components/DisplayLottie";
import { techStack, illustration } from "../../portfolioData";
const skill = "https://via.placeholder.com/150";

export default function StackProgress() {
  const { isDark } = useContext(ThemeContext);
  
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] mx-auto py-5 px-2 mt-8 lg:mt-16 flex flex-col xl:flex-row">
        
        <div className="flex-1 mb-8 xl:mb-0 xl:mr-8 flex flex-col justify-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${isDark ? "text-white" : "text-black"}`}>
            Proficiency
          </h1>
          
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {techStack.experience.map((exp, i) => (
              <div key={i}>
                <p className={`text-lg md:text-xl lg:text-2xl mb-2 ${isDark ? "text-white" : "text-[#868e96]"}`}>
                  {exp.Stack}
                </p>
                <div className="h-5 bg-[#f3efef] rounded-full relative w-full overflow-hidden">
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: exp.progressPercentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="block h-full bg-[#00D1F7] rounded-l-full rounded-r-md absolute left-0 top-0"
                  ></motion.span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 hidden xl:flex justify-center items-center">
          {illustration.animated ? (
            <div className="w-[90%] ml-20">
              <DisplayLottie animationData={Build} />
            </div>
          ) : (
            <img
              alt="Skills"
              src={skill}
              className="max-w-full h-auto"
            />
          )}
        </div>
        
      </div>
    </motion.div>
  );
}