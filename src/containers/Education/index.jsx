import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { educationInfo } from "../../portfolioData";

function EducationCard({ school }) {
  const { isDark } = useContext(ThemeContext);

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="text-[#868e96] mb-2 list-disc ml-5">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="group flex flex-col lg:flex-row pb-[10px] text-center lg:text-left"
        style={{ '--hover-glow': school.glowColor || '#ec268f' }}
      >
        <div className="flex justify-center lg:justify-start lg:mr-8 mb-4 lg:mb-0">
          <img
            crossOrigin={"anonymous"}
            className="w-[90px] lg:w-[130px] h-auto object-contain mt-[10px] lg:mt-0 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_var(--hover-glow)] transition-all duration-300"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
        <div className="max-w-full lg:max-w-[70%]">
          <h5 className={`text-[20px] lg:text-[28px] font-bold m-0 leading-tight lg:leading-snug ${isDark ? "text-white" : "text-black"}`}>
            {school.schoolName}
          </h5>

          <div className="mt-2 lg:mt-0">
            <h5 className={`font-bold text-[16px] lg:text-[19px] m-0 pt-[0.5rem] lg:pt-[0.8rem] leading-normal ${isDark ? "text-white" : "text-black"}`}>
              {school.subHeader}
            </h5>
            <p className={`text-[16px] lg:text-[19px] m-0 pt-[0.5rem] ${isDark ? "text-white" : "text-black"}`}>
              {school.duration}
            </p>
            <p className={`my-[0.5rem] ${isDark ? "text-white" : "text-black"}`}>
              {school.desc}
            </p>
            <div className="max-w-[80%] lg:max-w-full mx-auto lg:mx-0 mt-[0.5rem]">
              <ul className="text-left">
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="h-[30px] border-t-2 border-[rgba(211,211,211,0.397)] mb-[20px] mx-auto lg:mx-0 lg:w-[80%] group-hover:border-[color:var(--hover-glow)] group-hover:w-full transition-all duration-[600ms] ease-in-out hidden lg:block"
      ></motion.div>
      
      {/* Mobile border */}
      <div 
        className="h-[30px] border-t-2 border-[rgba(211,211,211,0.397)] mb-[20px] w-full lg:hidden group-hover:border-[color:var(--hover-glow)] transition-all duration-[600ms] ease-in-out"
        style={{ '--hover-glow': school.glowColor || '#ec268f' }}
      ></div>
    </div>
  );
}

export default function Education() {
  const { isDark } = useContext(ThemeContext);
  
  if (!educationInfo.display) {
    return null;
  }
  
  return (
    <div className="w-[90%] py-[20px] px-[10px] mx-auto mt-8 lg:mt-[2rem]" id="education">
      <h1 className={`text-[40px] md:text-[50px] leading-[1.1] text-center mb-10 ${isDark ? "text-white" : "text-black"}`}>
        Education
      </h1>
      <div className="flex flex-col">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
}