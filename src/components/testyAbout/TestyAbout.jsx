"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./TestyAbout.css";

export default function TestyAbout() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        } else {
          section.classList.remove("is-visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="testy-about">
      <div className="container testy-about__container">

        {/* LEFT SIDE */}
        <div className="testy-about__visual-grid">

          <div className="testy-about__top-row">

            <div className="testy-about__card">
              <div className="testy-about__card-header">
                <span className="testy-about__card-brand">
                  Complete Energy System
                </span>
              </div>

              <p className="testy-about__quote">
                Power your home with
                <span className="text-primary"> solar panels</span>,
                smart <span className="text-primary">battery storage</span>,
                and reliable <span className="text-primary">power stations</span>.
              </p>

              <button className="testy-about__card-btn">
                Explore Solutions
              </button>
            </div>

            <div className="testy-about__img-wrapper testy-about__img-wrapper--small">
              <Image
                src="/images/factoryImg/factory2.jpg"
                alt="Solar installation worker"
                fill
                className="testy-about__image"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>

          </div>

          <div className="testy-about__img-wrapper testy-about__img-wrapper--large">
            <Image
              src="/images/factoryImg/factory1.jpg"
              alt="Solar powered home"
              fill
              className="testy-about__image"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="testy-about__content">

          <div className="testy-about__tag">
            <span className="testy-about__tag-square"></span>
            SMART POWER SOLUTIONS
          </div>

          <h2 className="testy-about__heading">
            Engineered for the Next Energy Era
          </h2>

          <ul className="testy-about__list">
            <li>High-efficiency solar panels for maximum energy output</li>
            <li>Advanced lithium battery storage systems</li>
            <li>Backup power stations for uninterrupted supply</li>
            <li>Intelligent energy monitoring & management</li>
            <li>Electric mobility power solutions</li>
          </ul>

          <div className="testy-about__actions">
            <button className="btn">GET A FREE QUOTE</button>
            <button className="btn btn--secondary">VIEW PRODUCTS</button>
          </div>

        </div>

      </div>
    </section>
  );
}