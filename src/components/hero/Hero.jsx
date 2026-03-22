"use client";

import { useState } from "react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal"; // Import the modal
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
            poster="/videos/heroImg/joyhand-hero-poster.jpg" // Add a poster image
          >
            <source
              src="/videos/heroImg/joyhand-hero-video.mp4"
              type="video/mp4"
            />
          </video>

          <div className="hero__overlay"></div>
        </div>

        {/* Content */}
        <div className="container hero__container">
          <div className="hero__content">

            <div className="hero__badge-wrapper">
              <span className="hero__badge">
                ⚡ Global Sourcing Partner
              </span>
            </div>

            <h1 className="hero__title">

              <span className="hero__title-line">
              Custom Energy &
              </span>

              <span className="hero__title-line hero__title-line--highlight">
                E-Mobility Solutions
              </span>

            </h1>

            <p className="hero__desc">
              JoyHand is a trusted <strong>OEM/ODM sourcing partner</strong> connecting 
              global distributors with vetted manufacturers of <strong>lithium-ion batteries</strong>,
              <strong> solar inverters</strong>, and
              <strong> electric motorcycles</strong>. We handle quality control, 
              logistics, and factory coordination so you can scale with confidence.
            </p>

            <div className="hero__stats">
              <div className="hero__stat-item">
                <span className="hero__stat-number">50+</span>
                <span className="hero__stat-label">Distributor Partners</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat-item">
                <span className="hero__stat-number">12</span>
                <span className="hero__stat-label">Countries Served</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat-item">
                <span className="hero__stat-number">100%</span>
                <span className="hero__stat-label">Factories Audited</span>
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
                Request Sourcing Quote
              </button>

            </div>

            <p className="hero__trust-note">
              <span className="hero__trust-icon">✓</span> Direct access to ISO/TS16949 certified factories
            </p>

          </div>
        </div>

        {/* Animated Graphic */}
        <div className="hero__sun-graphic">
          <div className="hero__graphic-particles"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Discover Partners</span>
          <div className="hero__scroll-line"></div>
        </div>

      </section>

      {/* Modal */}
      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
}