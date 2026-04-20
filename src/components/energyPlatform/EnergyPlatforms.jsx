"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold, PiFactory } from "react-icons/pi";
import "./EnergyPlatforms.css";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Battery Solutions",
    slug: "storage-batteries",
    image: "/homeImg/energyPlatformImage01.jpg",
    desc: "LFP battery systems for residential & industrial use.",
    sourceNote: "In‑house Production"
  },
  {
    id: 2,
    title: "Solar Inverter Solutions",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage002.jpg",
    desc: "High-efficiency pure sine wave power conversion.",
    sourceNote: "Tier‑1 Components"
  },
  {
    id: 3,
    title: "Portable Power Solutions",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage003.jpg",
    desc: "Rugged power for emergency and off-grid needs.",
    sourceNote: "OEM/ODM Ready"
  },
  {
    id: 4,
    title: "Electric Mobility Solutions",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage04.jpg",
    desc: "Sustainable electric motorcycles and scooters.",
    sourceNote: "Urban Logistics"
  },
];

const EnergyPlatforms = () => {
  const sectionRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("energy-platforms--is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="energy-platforms">
      <div className="energy-platforms__grid">
        {FEATURED_CATEGORIES.map((platform, index) => (
          <article
            key={platform.id}
            className="platform-card"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <Link href={`/products/solutions/${platform.slug}`} className="platform-card__link">
              <div className="platform-card__image-wrapper">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  className="platform-card__image"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [platform.id]: true }))}
                />
                <div className="platform-card__overlay"></div>
              </div>

              <div className="platform-card__content">
                <div className="platform-card__center-group">
                  <h3 className="platform-card__title">{platform.title}</h3>
                  
                  {/* These appear only on hover */}
                  <div className="platform-card__reveal-content">
                    <p className="platform-card__description">{platform.desc}</p>
                    <button className="platform-card__button">
                      Explore <PiArrowUpRightBold />
                    </button>
                  </div>
                </div>

                <div className="platform-card__source-tag">
                   <PiFactory size={12} />
                   <span>{platform.sourceNote}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EnergyPlatforms;