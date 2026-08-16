import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import objectwaysLogo from "../../assets/images/objectwaysLogo.jpg";
import ElectricBorder from "../../components/ElectricBorder";

export default function WorkExperience() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div id="experience" className="w-[90%] mx-auto py-10 mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className={`text-[30px] md:text-[40px] lg:text-[50px] font-bold text-center mb-12 ${isDark ? "text-white" : "text-black"}`}>
          Work Experience
        </h1>
        
        <div className="flex justify-center w-full max-w-4xl mx-auto px-4 group cursor-default">
          <ElectricBorder
            color="#00d1f7"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 16, width: '100%' }}
            className="w-full shadow-[0_0_20px_rgba(0,209,247,0.15)] transition-transform duration-500 ease-in-out group-hover:scale-105"
          >
            <div className="flex flex-col md:flex-row items-center p-8 md:p-12 w-full min-h-[200px]">
              {/* Logo */}
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
                <img 
                  src={objectwaysLogo} 
                  alt="Objectways Technologies" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg drop-shadow-[0_0_15px_rgba(0,209,247,0.4)]"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col text-center md:text-left flex-1 justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Objectways Technologies
                </h2>
                <h3 className="text-xl md:text-2xl text-[#00d1f7] font-semibold mb-4">
                  Senior Data Analyst
                </h3>
                <p className="text-[#868e96] text-lg font-medium mb-3">
                  3 Years Experience
                </p>
                <p className="text-[#868e96] text-base md:text-lg mb-2">
                  Experience in data annotation and quality review, ensuring accuracy and consistency.
                </p>
                <ul className="text-[#868e96] text-base md:text-lg list-disc ml-5 text-left inline-block">
                  <li>Skilled in following guidelines and meeting quality standards.</li>
                  <li>Produced quality reports and supported process improvements.</li>
                  <li>Collaborated with teams and used tools like CVAT, Labelbox, and SageMaker.</li>
                </ul>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </motion.div>
    </div>
  );
}