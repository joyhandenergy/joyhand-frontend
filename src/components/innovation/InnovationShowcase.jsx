"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PiFactory,
  PiMagnifyingGlass,
  PiFlask,
  PiClipboardText,
  PiArrowRight,
  PiHandTap,
  PiMouse
} from "react-icons/pi";
import "./InnovationShowcase.css";

const InnovationShowcase = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      title: "OEM Factory Matching",
      icon: <PiFactory />,
      preview: "Connect with specialized manufacturers",
      content:
        "We connect you with specialized manufacturers for custom-engineered battery storage systems from specification to production oversight."
    },
    {
      title: "ODM Product Development",
      icon: <PiFlask />,
      preview: "Bridge specs with factory R&D",
      content:
        "Bridge your product requirements with factory R&D teams. We facilitate design, prototyping, and certification for rapid market entry."
    },
    {
      title: "Independent Quality Control",
      icon: <PiMagnifyingGlass />,
      preview: "On-site factory audits",
      content:
        "Our engineers perform on-site factory audits and pre-shipment inspections. If it doesn't pass, it doesn't ship."
    },
    {
      title: "Factory Certification Verification",
      icon: <PiClipboardText />,
      preview: "ISO, CE, UL validation",
      content:
        "We verify ISO, CE, UL, and other certifications directly with manufacturing partners before any partnership begins."
    }
  ];

  return (
    <section ref={sectionRef} className="innovation-section">
      <div className="innovation-section__hero">
        {/* Video poster - shows instantly while video loads */}
        <div 
          className={`innovation-section__poster ${videoLoaded ? 'innovation-section__poster--hidden' : ''}`}
          style={{
            backgroundImage: "url('/videos/heroImg/factory3-poster.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`innovation-section__video ${videoLoaded ? 'innovation-section__video--loaded' : ''}`}
          poster="/videos/heroImg/factory3-poster.jpg"
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source
            src="/videos/heroImg/factory3.mp4"
            type="video/mp4"
          />
        </video>

        <div className="innovation-section__overlay">
          <div className="container innovation-section__hero-content">
            <span className="innovation-section__badge">
              Why Distributors Trust Us
            </span>
            <h2 className="innovation-section__title">
              Your Bridge to Vetted Manufacturing Partners
            </h2>
            <p className="innovation-section__subtitle">
              From factory selection to final delivery, JoyHand gives energy companies the confidence to scale.
              We stand behind every shipment with rigorous quality control.
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
              <div className="innovation-card__main">
                <div className="innovation-card__icon">{item.icon}</div>
                <h3 className="innovation-card__title">{item.title}</h3>
              </div>

              <div className="innovation-card__preview">
                <p className="innovation-card__preview-text">{item.preview}</p>
              </div>

              <div className="innovation-card__hover-content">
                <p className="innovation-card__description">{item.content}</p>
              </div>

              <div className="innovation-card__hint">
                {isMobile ? <PiHandTap size={12} /> : <PiMouse size={12} />}
                <span>{isMobile ? "Tap" : "Hover"}</span>
              </div>

              <div className="innovation-card__glow"></div>
              <div className="innovation-card__pattern"></div>
            </div>
          ))}
        </div>

        <div className="innovation-section__footer">
          <p className="innovation-section__footer-text">
            Every factory partnership begins with a comprehensive audit.
            <Link href="/contact" className="innovation-section__footer-link">
              Request factory list <PiArrowRight />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;