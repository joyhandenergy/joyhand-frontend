"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import PopUpModal from "@/components/contactForm/PopUpModal";
import "./CtaBanner.css";

const CtaBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            {/* Central glow circle */}
            <div className="cta-banner__circle-glow"></div>
            
            <div className="cta-banner__grid-overlay"></div>
            
            <div className="cta-banner__content">
              <span className="cta-banner__badge">OEM / ODM Manufacturing Partner</span>
              <h2 className="cta-banner__title">Launch Your Energy Products with Direct Factory Supply</h2>
              <p className="cta-banner__description">
                From initial design to final delivery, JoyHand streamlines your product journey. 
                We combine decades of manufacturing experience with agile production lines to bring 
                your energy storage, solar inverter, or e‑mobility concepts to market faster. 
                Full certification support and global logistics – all under one roof.
              </p>
              
              <div className="cta-banner__actions">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="cta-banner__button btn"
                >
                  Start Your OEM Project <PiArrowRight />
                </button>
                <Link 
                  href="/products" 
                  className="cta-banner__button--outline btn"
                >
                  View Product Deck <PiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
};

export default CtaBanner;