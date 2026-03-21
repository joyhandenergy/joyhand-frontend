"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold, PiFactory } from "react-icons/pi";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./EnergyPlatforms.css";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Batteries",
    slug: "storage-batteries",
    image: "/images/homeProImg/homepro4.jpg",
    desc: "LFP battery systems for residential & industrial",
    sourceNote: "Sourced from ISO-certified factories"
  },
  {
    id: 2,
    title: "Solar Inverters",
    slug: "solar-inverters",
    image: "/images/homeProImg/homepro2.jpg",
    desc: "High-efficiency pure sine wave inverters",
    sourceNote: "Tier-1 component suppliers"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/images/homeProImg/homepro3.jpg",
    desc: "Rugged units for emergency & off-grid",
    sourceNote: "OEM branding available"
  },
  {
    id: 4,
    title: "Electric Mobility",
    slug: "electric-mobility",
    image: "/images/homeProImg/homepro1.jpg",
    desc: "Electric motorcycles, scooters & e-bikes",
    sourceNote: "Sustainable urban mobility"
  },
];

const EnergyPlatforms = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("energy-platforms--is-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="energy-platforms"
      aria-labelledby="platforms-heading"
    >
      <div className="container">
        <SectionHeader
          badge="Sourcing Excellence"
          title="Energy Platforms We Source"
          subtitle="Precision-engineered storage and power solutions sourced from vetted manufacturing partners for international brands and distributors seeking OEM/ODM excellence."
          id="platforms-heading"
        />

        <div className="energy-platforms__grid">
          {FEATURED_CATEGORIES.map((platform, index) => (
            <article
              key={platform.id}
              className="platform-card"
            >
              <Link
                href={`/products/solutions/${platform.slug}`}
                className="platform-card__link"
                aria-label={`Explore our ${platform.title} solutions`}
              >
                <div className="platform-card__image-wrapper">
                  <Image
                    src={platform.image}
                    alt={`${platform.title} sourcing solutions from partner factories`}
                    fill
                    className="platform-card__image"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="platform-card__overlay"></div>
                </div>

                <div className="platform-card__content">
                  <div className="platform-card__header">
                    <h3 className="platform-card__title">
                      {platform.title}
                    </h3>

                    <p className="platform-card__description">
                      {platform.desc}
                    </p>

                    <div className="platform-card__source-note">
                      <PiFactory size={14} />
                      <span>{platform.sourceNote}</span>
                    </div>
                  </div>

                  <div className="platform-card__footer">
                    <span className="platform-card__cta">
                      Request Sourcing Info
                    </span>

                    <div className="platform-card__icon-wrapper">
                      <PiArrowUpRightBold size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyPlatforms;