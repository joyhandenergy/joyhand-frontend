import React from 'react';
import Link from 'next/link';
import { PiArrowRight } from 'react-icons/pi';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-section">
      <div className="container"> {/* Container inside, not on section */}
        <div className="cta-banner">
          {/* Subtle engineering grid background for a tech feel */}
          <div className="cta-banner__grid-overlay"></div>
          
          <div className="cta-banner__content">
            <span className="cta-banner__badge">Sourcing & Supply Chain Partnership</span>
            <h2 className="cta-banner__title">Scale Your Energy Brand Through Our Partner Network</h2>
            <p className="cta-banner__description">
              Partner with JoyHand to source and customize next-generation energy solutions through our network of vetted manufacturing partners. 
              From concept to global distribution, we provide the OEM/ODM excellence your brand requires — without the factory risk.
            </p>
            
            <div className="cta-banner__actions">
              <Link href="/contact" className="cta-banner__button btn">
                Start Your Sourcing Project <PiArrowRight />
              </Link>
              <Link href="/services" className="cta-banner__button--outline btn">
                View Sourcing Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;