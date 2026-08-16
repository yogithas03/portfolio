import React, { useContext } from "react";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
  const { isDark } = useContext(ThemeContext);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="mt-[2rem] pb-[1rem]">
        <p className={`text-center m-0 mb-2 ${isDark ? "text-white" : "text-[#868e96]"}`}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={`text-center m-0 ${isDark ? "text-white" : "text-[#868e96]"}`}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio" className="text-inherit hover:text-[#55198b] transition-colors">
            developerFolio
          </a>
        </p>
      </div>
    </motion.div>
  );
}