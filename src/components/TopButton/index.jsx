import React, { useState, useEffect } from "react";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`fixed bottom-[20px] right-[30px] z-[99] border-none outline-none bg-[#00b8db] text-white cursor-pointer p-[15px] rounded-[15px] text-[25px] transition-all duration-200 hover:bg-black ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}