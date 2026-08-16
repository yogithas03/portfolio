import React, { useContext } from "react";
import { motion } from "framer-motion";
import { bigProjects } from "../../portfolioData";
import { ThemeContext } from "../../context/ThemeContext";
import AccordionGallery from "../../components/AccordionGallery";

export default function StartupProject() {

  const { isDark } = useContext(ThemeContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] py-[20px] px-[10px] mx-auto mt-[2rem]" id="projects">
        <div>
          <h1 className={`text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-normal text-center lg:text-left ${isDark ? "text-white" : "text-black"}`}>
            {bigProjects.title}
          </h1>
          <p className={`text-[16px] md:text-[18px] lg:text-[20px] uppercase tracking-[1px] mb-8 text-center lg:text-left ${isDark ? "text-white" : "text-[#868e96]"}`}>
            {bigProjects.subtitle}
          </p>

          <div className="mt-12 w-full">
            <AccordionGallery items={bigProjects.projects} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
