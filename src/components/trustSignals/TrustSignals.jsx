"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { PiSealCheckFill, PiArrowRight } from "react-icons/pi";
import { partners } from "../../data";
import "./TrustSignals.css";

const TrustSignals = () => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="trust">
      <div className="trust__energy-glow"></div>
      <div className="trust__energy-waves"></div>

      <div className="container trust__container">
        {/* Header */}
        <div className="trust__header">
          <span className="trust__badge">
            <PiSealCheckFill /> Global Trust
          </span>
          <h2 className="trust__title">Partner with a Manufacturer You Can Rely On</h2>
          <p className="trust__subtitle">
            ISO 9001:2025 certified facility. Every order backed by our engineering team and on‑site quality control.
          </p>
        </div>

        {/* Partner logos – continuous marquee */}
        <div className="trust__marquee">
          <div className="trust__track">
            {scrollingPartners.map((partner, idx) => (
              <div key={`${partner.id}-${idx}`} className="trust__logo-item">
                <div className="trust__logo-wrapper">
                  <Image
                    src={partner.logo}
                    alt={partner.alt || "Partner logo"}
                    fill
                    sizes="120px"
                    className="trust__logo"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="trust__logos-note">*and many more across 20+ countries</p>

        {/* CTA */}
        <div className="trust__footer">
          <a href="/about" className="trust__link">
            Discover our manufacturing process <PiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;