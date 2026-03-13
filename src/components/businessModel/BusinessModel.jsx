"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShieldCheckFill } from "react-icons/pi";
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

            {/* TECHNOLOGY CARD */}

            <div className="businessModel__card">

              <div className="businessModel__card-header">

                <div className="businessModel__card-icon">
                  <PiShieldCheckFill size={20} />
                </div>

                <span className="businessModel__card-brand">
                  ENGINEERED ENERGY TECHNOLOGY
                </span>

              </div>

              <p className="businessModel__quote">
                We design and supply
                <span className="text-primary"> clean energy technologies</span>
                and
                <span className="text-primary"> electric mobility platforms</span>
                for companies building the next generation of
                <span className="text-primary"> sustainable infrastructure</span>.
              </p>

              <Link
                href="/products"
                className="businessModel__card-btn"
              >
                Explore Energy Solutions
              </Link>

            </div>


            {/* SMALL IMAGE – E MOTORCYCLE */}

            <div className="businessModel__img-wrapper businessModel__img-wrapper--small">

              <Image
                src="/images/factoryImg/factory2.jpg"
                alt="Electric motorcycle mobility platform"
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
              alt="Industrial solar power installation and lithium battery storage systems"
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

            GLOBAL ENERGY PARTNER

          </div>


          <h2
            id="business-model-heading"
            className="businessModel__heading"
          >
            Supporting Energy Brands From Manufacturing to Global Supply
          </h2>


          <p className="businessModel__description">

            JoyHand partners with distributors, infrastructure developers,
            and emerging energy brands worldwide. Through advanced
            manufacturing, engineering support, and global logistics,
            we help companies scale reliable clean energy technologies
            and electric mobility solutions for international markets.

          </p>


          <ul className="businessModel__list">

            <li>OEM & ODM manufacturing for energy technology brands</li>

            <li>Global distribution of solar power and battery storage systems</li>

            <li>Electric mobility platforms including e-motorcycles</li>

            <li>Engineering support for product customization</li>

            <li>International logistics and scalable supply chain support</li>

          </ul>


          <div className="businessModel__actions">

            <Link
              href="/contact"
              className="btn"
            >
              GET A FREE QUOTE
            </Link>

            <Link
              href="/products"
              className="btn btn--secondary"
            >
              VIEW PRODUCTS
            </Link>

          </div>

        </div>

      </div>

    </section>

  );

}