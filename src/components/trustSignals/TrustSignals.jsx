"use client";

import Image from "next/image";
import { PiSealCheckFill, PiArrowRight } from "react-icons/pi";
import "./TrustSignals.css";
import { partners } from "../../data";

const TrustSignals = () => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="trust">
      <div className="container">

        {/* SECTION HEADER */}
        <header className="trust__header text-center">
          <div className="trust__badge-wrapper">
            <span className="trust__badge">
              <PiSealCheckFill /> Trusted Partners
            </span>
          </div>
          <h2 className="trust__title">Trusted by Leading Energy Distributors</h2>
          <p className="trust__subtitle">
            Working with distributors and clean-energy companies worldwide through our vetted factory network
          </p>
        </header>

        {/* LOGO MARQUEE */}
        <div className="trust__logos">
          <div className="trust__marquee">
            <div className="trust__track">
              {scrollingPartners.map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="trust__logo-item">
                  <div className="trust__logo-wrapper">
                   <Image
                      src={partner.logo}
                      alt={partner.alt || "Energy partner logo"}
                      fill
                      sizes="140px"
                      className="trust__logo"
                      priority // 🔥 loads immediately (above-the-fold images)
                      placeholder="blur" // 🔥 prevents flash
                      blurDataURL="/images/placeholder-blur.png" // lightweight tiny image
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="trust__logos-note">*and more across Asia, Europe, and Americas</p>
        </div>

        {/* QUALITY PROMISE */}
        <div className="trust__quality">
          <div className="trust__quality-item">
            <div className="trust__quality-icon">
              <PiSealCheckFill />
            </div>
            <div className="trust__quality-content">
              <h4 className="trust__quality-title">Every Factory. Every Shipment. Verified.</h4>
              <p className="trust__quality-text">
                Our engineers perform on-site audits at partner facilities before any product leaves for your destination.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="trust__footnote">
          <a href="/about" className="trust__link">
            Learn about our quality protocols <PiArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrustSignals;