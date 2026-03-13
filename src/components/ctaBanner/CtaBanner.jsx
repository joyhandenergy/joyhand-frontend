import React from 'react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-section container">
      <div className="cta-banner">
        {/* Subtle engineering grid background for a tech feel */}
        <div className="cta-banner__grid-overlay"></div>
        
        <div className="cta-banner__content">
          <span className="cta-banner__badge">Manufacturing & Supply Chain Partnership</span>
          <h2 className="cta-banner__title">Scale Your Energy Brand With Our Infrastructure</h2>
          <p className="cta-banner__description">
            Partner with JoyHand to develop and manufacture next-generation energy solutions. 
            From concept to global distribution, we provide the OEM/ODM excellence your brand requires.
          </p>
          <div className="cta-banner__actions">
            <button className="cta-banner__button btn">
              Start Your Project
            </button>
            <button className="cta-banner__button--outline btn">
              View OEM Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
