"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./PageLoader.css"

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for page to fully load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second - feels premium

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="page-loader">
        <div className="page-loader__container">
          {/* Animated Logo */}
          <div className="page-loader__logo-wrapper">
            <Image
              src="/logos/joyhand-logo.png"
              alt="JoyHand Energy"
              width={200}
              height={67}
              className="page-loader__logo"
              priority
            />
          </div>

          {/* Modern Loading Bar */}
          <div className="page-loader__bar-container">
            <div className="page-loader__bar"></div>
          </div>

          {/* Loading Text */}
          <p className="page-loader__text">Loading energy solutions...</p>
        </div>
      </div>
    );
  }

  return children;
}