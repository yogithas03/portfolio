import React from "react";
import { socialMediaLinks } from "../portfolioData";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  
  const getColors = (key) => {
    switch (key) {
      case 'github': return 'bg-[#333] hover:bg-black';
      case 'linkedin': return 'bg-[#0e76a8] hover:bg-[#0b5a80]';
      case 'gmail': return 'bg-[#ea4335] hover:bg-[#c33126]';
      case 'gitlab': return 'bg-[#fca326] hover:bg-[#d88716]';
      case 'facebook': return 'bg-[#3b5998] hover:bg-[#2d4373]';
      case 'instagram': return 'bg-[#c13584] hover:bg-[#962665]';
      case 'twitter': return 'bg-[#1da1f2] hover:bg-[#1582c6]';
      case 'medium': return 'bg-[#000] hover:bg-[#000]';
      case 'stackoverflow': return 'bg-[#f48024] hover:bg-[#cd6615]';
      case 'kaggle': return 'bg-[#20beff] hover:bg-[#129de4]';
      default: return 'bg-gray-500';
    }
  };

  const getIcon = (key) => {
    switch(key) {
      case 'github': return "fab fa-github";
      case 'linkedin': return "fab fa-linkedin-in";
      case 'gmail': return "fab fa-google";
      case 'gitlab': return "fab fa-gitlab";
      case 'facebook': return "fab fa-facebook-f";
      case 'instagram': return "fab fa-instagram";
      case 'twitter': return "fab fa-twitter";
      case 'medium': return "fab fa-medium";
      case 'stackoverflow': return "fab fa-stack-overflow";
      case 'kaggle': return "fab fa-kaggle";
      default: return "";
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mt-8 mb-8 justify-center md:justify-start">
      {Object.entries(socialMediaLinks).map(([key, value]) => {
        if (key === 'display' || !value) return null;
        
        const colors = getColors(key);
        const iconClass = getIcon(key);

        return (
          <a
            key={key}
            href={value}
            className={`w-11 h-11 rounded-full text-white flex items-center justify-center text-xl transition-all duration-200 transform hover:scale-110 ${colors}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={iconClass}></i>
          </a>
        );
      })}
    </div>
  );
}
