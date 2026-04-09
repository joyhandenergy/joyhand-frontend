"use client";

import { useState } from "react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";
import "./Hero.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero">
        {/* Background */}
        <div className="hero__background">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero__video"
            poster="/videos/heroImg/hero-poster.png"
          >
            <source
              src="/homeImg/joyhand-factory.webm"
              type="video/webm"
            />
          </video>
          <div className="hero__overlay"></div>
        </div>

        {/* Content */}
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge-wrapper">
              <span className="hero__badge">
                ⚡ OEM/ODM Manufacturer
              </span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">
                Custom Energy &
              </span>
              <span className="hero__title-line hero__title-line--highlight">
                E‑Mobility Manufacturer
              </span>
            </h1>

            <p className="hero__desc">
              <strong>Direct factory supply</strong> of custom 
              <strong> lithium‑ion batteries</strong>,
              <strong> solar inverters</strong>, and
              <strong> electric motorcycles</strong> with full OEM/ODM 
              capabilities for global distributors.
            </p>

            <div className="hero__stats">
              <div className="hero__stat-item">
                <span className="hero__stat-number">50,000+</span>
                <span className="hero__stat-label">m² Facility</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat-item">
                <span className="hero__stat-number">27+</span>
                <span className="hero__stat-label">Years Exp.</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat-item">
                <span className="hero__stat-number">30+</span>
                <span className="hero__stat-label">Engineers</span>
              </div>
            </div>

            <div className="hero__actions">
              <Link href="/products" className="btn hero__cta">
                Explore Products <PiArrowRight />
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn--secondary hero__cta-secondary"
              >
                Request Quote
              </button>
            </div>

            <p className="hero__trust-note">
              <span className="hero__trust-icon">✓</span> 
              ISO, CE, UL, UN38.3 Certified | Factory Direct
            </p>
          </div>
        </div>

        {/* Animated Graphic */}
        <div className="hero__sun-graphic">
          <div className="hero__graphic-particles"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Discover Our Manufacturing</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
}