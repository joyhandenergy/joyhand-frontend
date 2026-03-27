"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiCube, PiMicroscope, PiBuildings } from "react-icons/pi";
import "./BusinessModel.css";
import SuperRing from "../superRing/SuperRing";

const SERVICES = [
  {
    id: "oem",
    tag: "OEM / WHITE LABEL",
    title: "Scale Your Brand with Certified Solar & Battery Products",
    description:
      "Launch your own line of solar inverters, power stations, and energy storage systems using JoyHand’s mature, certified platforms. We handle manufacturing, branding, and compliance so you can focus on sales and distribution.",
    extra:
      "Our OEM program gives you direct access to factory‑tested LFP batteries, hybrid inverters, and portable power stations. Add your logo, packaging, and firmware – we manage production, quality control, and global certifications (CE, UL, UN38.3). Scale from pilot orders to full container loads with predictable lead times.",
    features: [
      "Custom branding & packaging for your target markets",
      "Certified base designs ready for immediate production",
      "LFP battery technology with 6,000+ cycle life",
      "Flexible MOQs and scalable capacity"
    ],
    icon: <PiCube size={32} />,
    image: "/images/factoryImg/factory1.jpg",
    imageAlt: "OEM production line for solar inverters and battery packs"
  },
  {
    id: "odm",
    tag: "ODM / CUSTOM ENGINEERING",
    title: "From Concept to Production‑Ready Energy Systems",
    description:
      "When off‑the‑shelf won’t do, our engineering team designs custom lithium battery packs, e‑mobility powertrains, and integrated solar solutions tailored to your exact specifications.",
    extra:
      "We provide full‑stack development: electrical architecture, BMS tuning, thermal simulation, structural design, and certification support. Work with our 30+ engineers to create unique products with exclusive tooling and IP protection. Prototyping, pilot runs, and mass production all under one roof.",
    features: [
      "Full engineering: electronics, BMS, mechanics, firmware",
      "Custom form factors for e‑motorcycles, industrial storage, and more",
      "Thermal management and reliability testing",
      "Exclusive tooling and IP protection"
    ],
    icon: <PiMicroscope size={32} />,
    image: "/images/factoryImg/factory3.png",
    imageAlt: "Engineering team developing custom battery solutions"
  },
  {
    id: "b2b",
    tag: "B2B & B2C SOURCING",
    title: "Direct Factory Supply for Distributors & Retailers",
    description:
      "Grow your catalog with ready‑to‑ship energy products. Choose from our standard range of storage batteries, inverters, and portable power stations – all certified and available for immediate logistics.",
    extra:
      "Benefit from direct factory pricing, low MOQs, and complete technical support. Whether you’re stocking warehouses or dropshipping to end customers, JoyHand provides consistent quality, datasheets, and after‑sales service. Ideal for solar installers, e‑mobility dealers, and online retailers.",
    features: [
      "Global certifications: CE, UL, UN38.3",
      "Low minimum order quantities",
      "Direct factory pricing with volume discounts",
      "Logistics support: bulk shipments or dropshipping"
    ],
    icon: <PiBuildings size={32} />,
    image: "/images/factoryImg/factory2.jpg",
    imageAlt: "Finished products ready for global shipment"
  }
];

export default function BusinessModel() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const sectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState({
    dynamic: false,
    static: false
  });

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (type) => {
    setImagesLoaded(prev => ({ ...prev, [type]: true }));
  };

  return (
    <section ref={sectionRef} className="businessModel" aria-labelledby="business-model-heading">

      {/* Decorative rings */}
      <SuperRing
        type="primary"
        size="1400px"
        thickness="40px"
        top="50%"
        left="50%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.06}
      />
      <SuperRing
        type="secondary"
        size="900px"
        thickness="40px"
        top="15%"
        left="70%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.05}
      />
      <SuperRing
        type="accent"
        size="900px"
        thickness="40px"
        top="85%"
        left="30%"
        translateX="-50%"
        translateY="-50%"
        opacity={0.05}
      />

      <div className="container businessModel__container">
        
        {/* LEFT SIDE – images */}
        <div className="businessModel__images">
          {/* Static Image Card */}
          <div className={`businessModel__image-card businessModel__image-card--static ${imagesLoaded.static ? 'businessModel__image-card--loaded' : ''}`}>
            <Image
              src="/images/factoryImg/factory3.png"
              alt="JoyHand manufacturing facility"
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              loading="lazy"
              onLoad={() => handleImageLoad('static')}
            />
            {/* Overlay for image – adds gradient for text readability */}
            <div className="businessModel__image-overlay"></div>
          </div>
          
          {/* Dynamic Image Card */}
          <div className={`businessModel__image-card businessModel__image-card--dynamic ${imagesLoaded.dynamic ? 'businessModel__image-card--loaded' : ''}`}>
            <Image
              src={activeService.image}
              alt={activeService.imageAlt}
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority={activeService.id === SERVICES[0].id}
              onLoad={() => handleImageLoad('dynamic')}
            />
            {/* Overlay for image */}
            <div className="businessModel__image-overlay"></div>
          </div>
        </div>

        {/* RIGHT SIDE – content */}
        <div className="businessModel__content">
          {/* Tabs - Pill Buttons (left-aligned on desktop) */}
          <div className="businessModel__service-tabs">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s)}
                className={`service-tab-btn ${activeService.id === s.id ? 'active' : ''}`}
                aria-label={`Switch to ${s.id.toUpperCase()} services`}
              >
                {s.id.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="businessModel__tag">
            <span className="businessModel__tag-square"></span>
            {activeService.tag}
          </div>

          <h2 className="businessModel__heading">
            {activeService.title}
            <span className="businessModel__heading-underline"></span>
          </h2>

          <p className="businessModel__description">{activeService.description}</p>

          <p className="businessModel__extra">{activeService.extra}</p>

          <ul className="businessModel__list">
            {activeService.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <div className="businessModel__actions">
            <Link href="/services" className="btn btn--secondary businessModel__btn">
              EXPLOR CAPABILITY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}