import React, { useContext } from "react";
import { motion } from "framer-motion";
import emoji from "react-easy-emoji";
import { ThemeContext } from "../../context/ThemeContext";
import landingPerson from "../../assets/lottie/landingPerson.json";
import DisplayLottie from "../../components/DisplayLottie";
import SocialMedia from "../../components/SocialMedia";
import Button from "../../components/Button";
import { illustration, greeting } from "../../portfolioData";
const manOnTable = "https://via.placeholder.com/150";

export default function Greeting() {
  const { isDark } = useContext(ThemeContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] md:w-[85%] mx-auto py-5 pt-16 mt-8 lg:mt-16" id="greeting">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div>
              <h1
                className={`text-[32px] md:text-[40px] lg:text-[45px] xl:text-[50px] leading-[1.1] mb-5 font-bold whitespace-normal lg:whitespace-nowrap transition-all duration-300 drop-shadow-[0_0_15px_#00d1f7] cursor-default ${isDark ? "text-white" : "text-black"}`}
              >
                {greeting.title}&nbsp;
                <span className="inline-block origin-[70%_70%] animate-[wave_1.8s_infinite]">
                  {emoji("👋")}
                </span>
              </h1>
              <p
                className={`text-[18px] md:text-[20px] lg:text-[30px] leading-normal lg:leading-[40px] mb-8 ${
                  isDark ? "text-white" : "text-[#868e96]"
                }`}
              >
                {greeting.subTitle}
              </p>
              
              <SocialMedia />
              
              <div className="flex justify-center lg:justify-start gap-4 mt-5">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          
          <div className="flex-1 mt-10 lg:mt-0 w-full h-[250px] lg:h-auto flex justify-center scale-110 lg:scale-125 origin-center">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man at table"
                src={manOnTable}
                className="max-w-full h-auto"
              />
            )}
          </div>
          
        </div>
      </div>
      
      {/* Wave Keyframes defined globally in index.css */}
    </motion.div>
  );
}