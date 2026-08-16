import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { illustration, contactInfo } from "../../portfolioData";
import SocialMedia from "../../components/SocialMedia";
import email from "../../assets/lottie/email.json";
const contactMailDark = "https://via.placeholder.com/150";
import DisplayLottie from "../../components/DisplayLottie";

export default function Profile() {
  const { isDark } = useContext(ThemeContext);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-[90%] py-[20px] px-[10px] mx-auto mt-[4rem]" id="contact">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className={`text-[40px] md:text-[50px] font-normal leading-normal ${isDark ? "text-white" : "text-black"}`}>
              {contactInfo.title}
            </h1>
            <p className={`text-[20px] md:text-[25px] mt-[1rem] md:mt-[2rem] uppercase tracking-[1px] ${isDark ? "text-white" : "text-[#868e96]"}`}>
              {contactInfo.subtitle}
            </p>
            <div className="mt-[1rem] md:mt-[2rem]">
              {contactInfo.number && (
                <>
                  <a
                    className="text-[20px] md:text-[25px] font-normal hover:text-[#b5b5b5] transition-all"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="text-[20px] md:text-[25px] font-normal text-[#868e96] hover:text-[#b5b5b5] transition-all"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            {illustration.animated ? (
              <div className="w-[80%] max-w-[500px]">
                <DisplayLottie animationData={email} />
              </div>
            ) : (
              <img
                alt="Man working"
                src={contactMailDark}
                className="max-w-[80%]"
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}