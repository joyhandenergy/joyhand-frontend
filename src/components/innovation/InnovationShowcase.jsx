"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  PiCertificate,
  PiShieldCheck,
  PiTestTube,
  PiGlobe,
  PiArrowRight,
} from "react-icons/pi";
import "./InnovationShowcase.css";

const InnovationShowcase = () => {
  const sectionRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  const pillars = [
    {
      title: "ISO 9001:2025",
      icon: <PiCertificate />,
      preview: "Quality management system",
      description:
        "ISO 9001:2025 certified. Documented, audited processes ensure consistent, reliable products."
    },
    {
      title: "CE & UL Certified",
      icon: <PiShieldCheck />,
      preview: "Global compliance",
      description:
        "CE & UL certified. Rigorous testing for electrical safety and market compliance."
    },
    {
      title: "UN38.3 Testing",
      icon: <PiTestTube />,
      preview: "Lithium battery safety",
      description:
        "UN38.3 tested for safe transport. Vibration, thermal shock, and short circuit tests passed."
    },
    {
      title: "Global Certifications",
      icon: <PiGlobe />,
      preview: "Market‑ready compliance",
      description:
        "CE (Europe), UL (North America), UN38.3 (transport), IEC 62109 (inverters). Full documentation."
    }
  ];

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-section__hero">
        <div 
          className={`innovation-section__poster ${videoLoaded ? 'innovation-section__poster--hidden' : ''}`}
          style={{
            backgroundImage: "url('/videos/heroImg/factory-poster.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`innovation-section__video ${videoLoaded ? 'innovation-section__video--loaded' : ''}`}
          poster="/videos/heroImg/factory-poster.png"
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source
            src="/homeImg/joyhand-factory-manufacturing.webm"
            type="video/webm"
          />
        </video>
        <div className="innovation-section__overlay">
          <div className="container innovation-section__hero-content">
            <span className="innovation-section__badge">Certified Quality</span>
            <h2 className="innovation-section__title">
              Trust Built on Verified Standards
            </h2>
            <p className="innovation-section__subtitle">
              Every product leaves our factory with full certification and rigorous testing.
              From battery cells to complete systems, we document quality at every stage.
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
              style={{ '--delay': `${index * 0.1}s` }}
            >
              {/* Side ring div */}
              <div className="innovation-card__ring"></div>

              <div className="innovation-card__main">
                <div className="innovation-card__icon">{item.icon}</div>
                <h3 className="innovation-card__title">{item.title}</h3>
              </div>

              <div className="innovation-card__preview">
                <p className="innovation-card__preview-text">{item.preview}</p>
              </div>

              <div className="innovation-card__description">
                <p className="innovation-card__description-text">{item.description}</p>
              </div>

              <div className="innovation-card__glow"></div>
              <div className="innovation-card__pattern"></div>
            </div>
          ))}
        </div>

        <div className="innovation-section__footer">
          <p className="innovation-section__footer-text">
            Need certified products for your market?
            <Link href="/contact-us" className="innovation-section__footer-link">
              Request certification package <PiArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;