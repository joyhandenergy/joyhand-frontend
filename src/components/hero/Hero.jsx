"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import "./Hero.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Only load video after page is interactive (improves LCP)
  useEffect(() => {
    const loadVideo = () => {
      if (videoRef.current && !videoLoaded) {
        videoRef.current.load();
        setVideoLoaded(true);
      }
    };
    // Delay video loading to prioritize critical content
    const timer = setTimeout(loadVideo, 2000);
    return () => clearTimeout(timer);
  }, [videoLoaded]);

  return (
    <>
      <section className="hero">
        {/* Background – static image first, video replaces after load */}
        <div className="hero__background">
          <div className="hero__static-bg" aria-hidden="true">
            <Image
              src="/videos/heroImg/hero-poster.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero__static-img"
            />
          </div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`hero__video ${videoLoaded ? "hero__video--loaded" : ""}`}
            poster="/videos/heroImg/hero-poster.png"
          >
            <source
              src="/videos/heroImg/joyhand-hero-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero__overlay"></div>
        </div>

        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge-wrapper">
              <span className="hero__badge">⚡ OEM/ODM Manufacturer</span>
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">Custom Energy &</span>
              <span className="hero__title-line hero__title-line--highlight">
                E‑Mobility Manufacturer
              </span>
            </h1>

            <p className="hero__desc">
              <strong>Direct factory supply</strong> of custom{" "}
              <strong>lithium‑ion batteries</strong>,{" "}
              <strong>solar inverters</strong>, and{" "}
              <strong>electric motorcycles</strong> with full OEM/ODM
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

        {/* Simplified animated graphic – reduced complexity */}
        <div className="hero__sun-graphic" aria-hidden="true">
          <div className="hero__graphic-particles"></div>
        </div>

        <div className="hero__scroll-indicator">
          <span className="hero__scroll-text">Discover Our Manufacturing</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      <PopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="quote" />
    </>
  );
}