"use client";

import React, { useEffect, useState } from "react";
import { PiArrowUpBold } from "react-icons/pi"; // Using your requested library
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Toggle visibility based on 300px scroll threshold
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-btn ${isVisible ? "scroll-btn--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      type="button"
    >
      <PiArrowUpBold className="scroll-btn__icon" size={24} />
    </button>
  );
};

export default ScrollToTop;
