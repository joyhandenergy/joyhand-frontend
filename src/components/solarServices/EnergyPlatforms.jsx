"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import SectionHeader from "../sectionHeader/SectionHeader"; 
import "./EnergyPlatforms.css";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Battery",
    slug: "residential",
    image: "/images/homeProImg/homepro4.jpg",
    desc: "Home energy independence",
    badge: "Residential"
  },
  {
    id: 2,
    title: "Solar Inverter",
    slug: "industrial",
    image: "/images/homeProImg/homepro2.jpg",
    desc: "Large scale power backup",
    badge: "Commercial"
  },
  {
    id: 3,
    title: "Portable Power Station",
    slug: "portable",
    image: "/images/homeProImg/homepro3.jpg",
    desc: "Energy on the go",
    badge: "Mobile"
  },
  {
    id: 4,
    title: "Electric Mobility",
    slug: "mobility",
    image: "/images/homeProImg/homepro1.jpg",
    desc: "Clean electric mobility",
    badge: "EV Tech"
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
    <section ref={sectionRef} className="energy-platforms" aria-labelledby="platforms-heading">
      <div className="container">
        <SectionHeader
          badge="Manufacturing Excellence"
          title="Energy Platforms We Manufacture"
          subtitle="Precision-engineered storage and power solutions for international brands and distributors seeking OEM/ODM excellence."
          id="platforms-heading"
        />

        <div className="energy-platforms__grid">
          {FEATURED_CATEGORIES.map((platform, index) => (
            <article 
              key={platform.id} 
              className="platform-card" 
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <Link 
                href={`/products?category=${platform.slug}`} 
                className="platform-card__link"
                aria-label={`Explore our ${platform.title} solutions`}
              >
                <div className="platform-card__image-wrapper">
                  <Image
                    src={platform.image}
                    alt={`${platform.title} manufacturing service`}
                    fill
                    className="platform-card__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={index < 2}
                  />
                  <div className="platform-card__overlay"></div>
                </div>

                <div className="platform-card__content">
                  <div className="platform-card__header">
                    <span className="platform-card__badge">{platform.badge}</span>
                    <h3 className="platform-card__title">{platform.title}</h3>
                    <p className="platform-card__description">{platform.desc}</p>
                  </div>

                  <div className="platform-card__footer">
                    <span className="platform-card__cta">Explore Solutions</span>
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
