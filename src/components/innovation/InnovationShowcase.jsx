"use client";

import React, { useEffect, useRef } from "react";
import { PiBuildings, PiLightning, PiFlask, PiLightbulb } from "react-icons/pi";
import "./InnovationShowcase.css";

const InnovationShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const pillars = [
    {
      title: "ODM Development",
      icon: <PiFlask />,
      content: "Custom product development for global brands."
    },
    {
      title: "OEM Production",
      icon: <PiBuildings />,
      content: "High-volume manufacturing with strict quality control."
    },
    {
      title: "Engineering Expertise",
      icon: <PiLightning />,
      content: "Energy system design and optimization."
    },
    {
      title: "Quality Assurance",
      icon: <PiLightbulb />,
      content: "International Manufacturing standards."
    }
  ];

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-section__hero">
        <video autoPlay loop muted playsInline className="innovation-section__video">
          <source src="/videos/heroImg/factory3.mp4" type="video/mp4" />
        </video>
        <div className="innovation-section__overlay">
          <div className="container innovation-section__hero-content">
            <h2 className="innovation-section__title">Advanced Manufacturing Capabilities</h2>
            <p className="innovation-section__subtitle">
              Pioneering the future of technology through automated gigafactories and rigorous scientific research.
            </p>
          </div>
        </div>
      </div>

      <div className="innovation-section__container container">
        <div className="innovation-grid">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="innovation-card"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="innovation-card__main">
                <div className="innovation-card__icon">{item.icon}</div>
                <h4 className="innovation-card__title">{item.title}</h4>
              </div>

              {/* DESCRIPTION: Appears on hover */}
              <div className="innovation-card__hover-content">
                <p className="innovation-card__description">{item.content}</p>
              </div>

              {/* LINK: Visible by default, hidden on hover, fixed position */}
              <div className="innovation-card__link">
                Discover Technology <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;
