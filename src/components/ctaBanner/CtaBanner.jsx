import React from 'react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-section container">
      <div className="cta-banner">
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">Build Your Energy Product With Us</h2>
          <p className="cta-banner__description">
            Partner with JoyHand to develope and manufacture next-generation energy and mobility technologies.
          </p>
          <button className="cta-banner__button btn">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
