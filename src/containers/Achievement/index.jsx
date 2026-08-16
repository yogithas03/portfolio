import React, { useContext } from "react";
import { motion } from "framer-motion";
import { achievementSection } from "../../portfolioData";
import { ThemeContext } from "../../context/ThemeContext";

export default function Achievement() {
  const { isDark } = useContext(ThemeContext);

  if (!achievementSection.display) {
    return null;
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] py-[20px] px-[10px] mx-auto mt-[2rem]" id="achievements">
        <div>
          <h1 className={`text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-normal text-center lg:text-left ${isDark ? "text-white" : "text-black"}`}>
            {achievementSection.title}
          </h1>
          <p className={`text-[16px] md:text-[18px] lg:text-[20px] uppercase tracking-[1px] mb-8 text-center lg:text-left ${isDark ? "text-white" : "text-[#868e96]"}`}>
            {achievementSection.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {achievementSection.achievementsCards.map((card, i) => (
              <div
                key={i}
                className={`group relative flex flex-col rounded-2xl overflow-hidden border border-cyan-500/20 backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-2 ${
                  isDark
                    ? "bg-slate-900/50 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                    : "bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)]"
                }`}
              >
                {card.image && (
                  <div className="relative h-[220px] overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500 rounded-lg"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow p-6 text-center">
                  <h5 className={`text-xl md:text-2xl font-bold mb-3 transition-colors group-hover:text-cyan-400 ${isDark ? "text-white" : "text-black"}`}>
                    {card.title}
                  </h5>
                  <p className={`text-sm md:text-base mb-6 flex-grow leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
