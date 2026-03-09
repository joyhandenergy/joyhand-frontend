"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";
import SectionHeader from "../sectionHeader/SectionHeader";
import "./SolarServices.css";

const FEATURED_CATEGORIES = [
  {
    id: 1,
    title: "Storage Battery",
    slug: "residential",
    image: "/images/homeProImg/homepro4.jpg",
    desc: "Home energy independence",
  },
  {
    id: 2,
    title: "Solar Inverter",
    slug: "industrial",
    image: "/images/homeProImg/homepro2.jpg",
    desc: "Large scale power backup",
  },
  {
    id: 3,
    title: "Portable Power Station",
    slug: "portable",
    image: "/images/homeProImg/homepro3.jpg",
    desc: "Energy on the go",
  },
  {
    id: 4,
    title: "Electric Mobility",
    slug: "mobility", // changed to unique slug
    image: "/images/homeProImg/homepro1.jpg",
    desc: "Clean electric mobility",
  },
];

const SolarServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="solar-services">
      <div className="container">
        <SectionHeader
          badge="Since 2010"
          title="Energy Platforms We Manufacture"
          subtitle="Precision-engineered storage solutions tailored for every scale."
        />

        <div className="solar-services__grid">
          {FEATURED_CATEGORIES.map((item, index) => (
            <Link
              href={`/products?category=${item.slug}`}
              key={item.id}
              className="service-card"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="service-card__image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="service-card__image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="service-card__overlay"></div>
              </div>

              <div className="service-card__floating-content">
                <div className="service-card__text">
                  <p className="service-card__desc">{item.desc}</p>
                  <h3 className="service-card__title">{item.title}</h3>
                  <span className="service-card__action">
                    Explore Solutions
                  </span>
                </div>

                <div className="service-card__icon-badge">
                  <PiArrowUpRightBold size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarServices;