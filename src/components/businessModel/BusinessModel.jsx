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
      "Launch your own line of solar inverters, power stations, and energy storage systems using JoyHand's mature, certified platforms. We handle manufacturing, branding, and compliance so you can focus on sales and distribution.",
    extra:
      "Our OEM program gives you direct access to factory‑tested LFP batteries, hybrid inverters, and portable power stations. Add your logo, packaging, and firmware – we manage production, quality control, and global certifications (CE, UL, UN38.3). Scale from pilot orders to full container loads with predictable lead times.",
    features: [
      "Custom branding & packaging for your target markets",
      "Certified base designs ready for immediate production",
      "LFP battery technology with 6,000+ cycle life",
      "Flexible MOQs and scalable capacity"
    ],
    icon: <PiCube size={32} />,
    image: "/homeImg/businessModelImage2.jpg",  // Fixed path (lowercase)
    imageAlt: "OEM production line for solar inverters and battery packs"
  },
  {
    id: "odm",
    tag: "ODM / CUSTOM ENGINEERING",
    title: "From Concept to Production‑Ready Energy Systems",
    description:
      "When off‑the‑shelf won't do, our engineering team designs custom lithium battery packs, e‑mobility powertrains, and integrated solar solutions tailored to your exact specifications.",
    extra:
      "We provide full‑stack development: electrical architecture, BMS tuning, thermal simulation, structural design, and certification support. Work with our 30+ engineers to create unique products with exclusive tooling and IP protection. Prototyping, pilot runs, and mass production all under one roof.",
    features: [
      "Full engineering: electronics, BMS, mechanics, firmware",
      "Custom form factors for e‑motorcycles, industrial storage, and more",
      "Thermal management and reliability testing",
      "Exclusive tooling and IP protection"
    ],
    icon: <PiMicroscope size={32} />,
    image: "/homeImg/businessModelImage03.jpg"
  },
  {
    id: "b2b",
    tag: "B2B & B2C SOURCING",
    title: "Direct Factory Supply for Distributors & Retailers",
    description:
      "Grow your catalog with ready‑to‑ship energy products. Choose from our standard range of storage batteries, inverters, and portable power stations – all certified and available for immediate logistics.",
    extra:
      "Benefit from direct factory pricing, low MOQs, and complete technical support. Whether you're stocking warehouses or dropshipping to end customers, JoyHand provides consistent quality, datasheets, and after‑sales service. Ideal for solar installers, e‑mobility dealers, and online retailers.",
    features: [
      "Global certifications: CE, UL, UN38.3",
      "Low minimum order quantities",
      "Direct factory pricing with volume discounts",
      "Logistics support: bulk shipments or dropshipping"
    ],
    icon: <PiBuildings size={32} />,
    image: "/homeImg/businessModelImage4.jpg",  // Fixed path
    imageAlt: "Finished products ready for global shipment"
  }
];

export default function BusinessModel() {
  const [activeService, setActiveService] = useState(SERVICES[0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Preload next image when tab changes (optional performance)
  const handleTabChange = (service) => {
    setActiveService(service);
  };

  return (
    <section 
      ref={sectionRef} 
      className={`businessModel ${isVisible ? 'is-visible' : ''}`} 
      aria-labelledby="business-model-heading"
    >
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
          <div className="businessModel__image-card businessModel__image-card--static">
            <Image
              src="/homeImg/businessModelImage01.jpg"
              alt="JoyHand manufacturing facility"
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority
            />
            <div className="businessModel__image-overlay"></div>
          </div>
          
          {/* Dynamic Image Card */}
          <div className="businessModel__image-card businessModel__image-card--dynamic" key={activeService.id}>
            <Image
              src={activeService.image}
              alt={activeService.imageAlt}
              fill
              className="businessModel__image"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority={activeService.id === SERVICES[0].id}
            />
            <div className="businessModel__image-overlay"></div>
          </div>
        </div>

        {/* RIGHT SIDE – content */}
        <div className="businessModel__content">
          {/* Tabs - Pill Buttons */}
          <div className="businessModel__service-tabs">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => handleTabChange(s)}
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
              EXPLORE CAPABILITY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}