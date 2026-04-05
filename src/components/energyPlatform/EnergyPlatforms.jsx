"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold, PiFactory } from "react-icons/pi";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./EnergyPlatforms.css";
import SectionDecor from "../sectionDecor/SectionDecor";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Batteries",
    slug: "storage-batteries",
    image: "/homeImg/energyPlatformImage1.png",
    blurImage: "/homeImg/energyPlatformImage1.png",
    desc: "LFP battery systems for residential & industrial",
    sourceNote: "Manufactured in‑house"
  },
  {
    id: 2,
    title: "Solar Inverters",
    slug: "solar-inverters",
    image: "/homeImg/energyPlatformImage2.png",
    blurImage: "/homeImg/energyPlatformImage2.png",
    desc: "High-efficiency pure sine wave inverters",
    sourceNote: "Tier‑1 components"
  },
  {
    id: 3,
    title: "Portable Power Stations",
    slug: "portable-power-stations",
    image: "/homeImg/energyPlatformImage3.png",
    blurImage: "/homeImg/energyPlatformImage3.png",
    desc: "Rugged units for emergency & off-grid",
    sourceNote: "OEM/ODM ready"
  },
  {
    id: 4,
    title: "Electric Mobility",
    slug: "electric-mobility",
    image: "/homeImg/energyPlatformImage4.png",
    blurImage: "/homeImg/energyPlatformImage4.png",
    desc: "Electric motorcycles, scooters & e-bikes",
    sourceNote: "Sustainable urban mobility"
  },
];

const EnergyPlatforms = () => {
  const sectionRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Check if already visible (above the fold)
    const checkVisibility = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100) {
        section.classList.add("energy-platforms--is-visible");
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("energy-platforms--is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section
      ref={sectionRef}
      className="energy-platforms"
      aria-labelledby="platforms-heading"
    >

    <SectionDecor type="accent" count={8} />

      <div className="container">
        <SectionHeader
          badge="Our Manufacturing Range"
          title="Products We Manufacture"
          subtitle="Precision‑engineered storage and power solutions directly from our ISO 9001:2025 certified facility. Fully customizable for OEM/ODM partners."
          id="platforms-heading"
        />

        <div className="energy-platforms__grid">
          {FEATURED_CATEGORIES.map((platform, index) => (
            <article
              key={platform.id}
              className={`platform-card ${loadedImages[platform.id] ? 'platform-card--image-loaded' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <Link
                href={`/products/solutions/${platform.slug}`}
                className="platform-card__link"
                aria-label={`Explore our ${platform.title} solutions`}
              >
                <div className="platform-card__image-wrapper">
                  {/* Blur placeholder - loads first */}
                  <div 
                    className="platform-card__blur-placeholder"
                    style={{
                      backgroundImage: `url(${platform.blurImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Main image with Next.js optimization */}
                  <Image
                    src={platform.image}
                    alt={`${platform.title} manufactured by JoyHand`}
                    fill
                    className={`platform-card__image ${loadedImages[platform.id] ? 'platform-card__image--loaded' : ''}`}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                    quality={85}
                    loading={index < 2 ? "eager" : "lazy"}
                    onLoad={() => handleImageLoad(platform.id)}
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
                      Request Info
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