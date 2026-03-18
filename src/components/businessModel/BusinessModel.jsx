"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShieldCheckFill, PiFactory, PiGlobe, PiHandshake } from "react-icons/pi";
import "./BusinessModel.css";

export default function BusinessModel() {

  const sectionRef = useRef(null);

  useEffect(() => {

    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };

  }, []);

  return (

    <section
      ref={sectionRef}
      className="businessModel"
      aria-labelledby="business-model-heading"
    >

      <div className="container businessModel__container">

        {/* LEFT VISUAL GRID */}

        <div className="businessModel__visual-grid">

          <div className="businessModel__top-row">

            {/* SOURCING PARTNER CARD */}

            <div className="businessModel__card">

              <div className="businessModel__card-header">

                <div className="businessModel__card-icon">
                  <PiHandshake size={20} />
                </div>

                <span className="businessModel__card-brand">
                  TRUSTED SOURCING NETWORK
                </span>

              </div>

              <p className="businessModel__quote">
                We connect global distributors with 
                <span className="text-primary"> vetted manufacturers</span> of 
                <span className="text-primary"> clean energy technologies</span> and
                <span className="text-primary"> electric mobility platforms</span> — 
                handling quality control, logistics, and factory coordination every step of the way.
              </p>

              <Link
                href="/services"
                className="businessModel__card-btn"
              >
                Explore Sourcing Services
              </Link>

            </div>


            {/* SMALL IMAGE – E MOTORCYCLE */}

            <div className="businessModel__img-wrapper businessModel__img-wrapper--small">

              <Image
                src="/images/factoryImg/factory2.jpg"
                alt="Electric motorcycle mobility platform sourced from partner factories"
                fill
                className="businessModel__image"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />

            </div>

          </div>


          {/* LARGE IMAGE – SOLAR */}

          <div className="businessModel__img-wrapper businessModel__img-wrapper--large">

            <Image
              src="/images/factoryImg/factory1.jpg"
              alt="Industrial solar power installation and lithium battery storage systems from vetted manufacturers"
              fill
              className="businessModel__image"
              sizes="(max-width:768px) 100vw, 50vw"
            />

          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="businessModel__content">

          <div className="businessModel__tag">

            <span className="businessModel__tag-square"></span>

            YOUR SOURCING PARTNER

          </div>


          <h2
            id="business-model-heading"
            className="businessModel__heading"
          >
            Bridging Distributors and World-Class Manufacturers
          </h2>


          <p className="businessModel__description">

            JoyHand partners with distributors, infrastructure developers, and emerging 
            energy brands worldwide. Through our network of certified factories, dedicated 
            engineering support, and streamlined global logistics, we help companies source, 
            customize, and scale reliable clean energy technologies for international markets — 
            without the risk of dealing with unknown suppliers.

          </p>


          <ul className="businessModel__list">

            <li><strong>Factory Matching:</strong> We connect you with specialized manufacturers based on your specifications</li>

            <li><strong>Quality Assurance:</strong> On-site audits and inspections before any product leaves the facility</li>

            <li><strong>Logistics Managed:</strong> Container consolidation, shipping, and customs clearance handled end-to-end</li>

            <li><strong>Engineering Bridge:</strong> Technical liaison between your requirements and factory capabilities</li>

            <li><strong>Scalable Partnerships:</strong> From pilot orders to full container loads, we grow with you</li>

          </ul>


          <div className="businessModel__actions">

            <Link
              href="/contact"
              className="btn"
            >
              START SOURCING
            </Link>

            <Link
              href="/products"
              className="btn btn--secondary"
            >
              VIEW PRODUCT CATALOG
            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}