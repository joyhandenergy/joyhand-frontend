"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PiLinkedinLogo,
  PiArrowRight,
  PiCheckCircleFill,
  PiGear,
  PiShieldCheck,
  PiGlobe,
  PiFactory,
  PiChartLineUp,
  PiQuotesFill,
  PiBatteryHigh,
  PiLightning,
  PiMotorcycle
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

import "./about.css";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import SuperRing from "@/components/superRing/SuperRing";

export default function AboutPage() {
  const team = [
    {
      name: "Michael Zhang",
      title: "CEO & Founder",
      image: "/aboutImg/aboutProductimg1.png",
      bio: "Michael leads JoyHand's manufacturing strategy, driving vertical integration and sustainable scaling for global energy markets."
    },
    {
      name: "Sarah Chen",
      title: "Chief Technical Officer",
      image: "/aboutImg/aboutProductimg2.png",
      bio: "Sarah oversees our 30+ in-house engineers, ensuring every product meets international safety certifications and performance benchmarks."
    }
  ];

  const values = [
    {
      icon: <PiFactory size={32} />,
      title: "Direct Manufacturing",
      description: "We own our assembly lines. No middlemen – you get factory-direct pricing, quality oversight, and full traceability."
    },
    {
      icon: <PiGear size={32} />,
      title: "In-House R&D",
      description: "Our engineers develop proprietary BMS firmware, thermal management, and cell-level safety systems for every LFP pack."
    },
    {
      icon: <PiShieldCheck size={32} />,
      title: "Certified QC Lab",
      description: "On-site testing facility conducts thermal shock, vibration, and 72-hour aging tests on 100% of our production batches."
    },
    {
      icon: <PiGlobe size={32} />,
      title: "Global Export Mastery",
      description: "We manage complex international logistics for lithium batteries and EVs, delivering to over 12 countries with full customs compliance."
    }
  ];

  const energySectors = [
    {
      title: "LFP Battery Manufacturing",
      desc: "We produce high-performance Lithium Iron Phosphate storage using Grade-A prismatic cells. Our batteries power residential, commercial, and industrial backup systems.",
      features: ["Grade-A Prismatic Cells", "6000+ Cycle Lifespan", "Automotive-Grade Assembly"],
      img: "/aboutImg/aboutProductimg1.png",
      tag: "Energy Storage"
    },
    {
      title: "Solar Inverter Production",
      desc: "Our pure sine wave inverters are built with Tier-1 components for superior grid-tie and off-grid reliability. 98% peak efficiency and smart grid switching.",
      features: ["98% Peak Efficiency", "Pure Sine Wave Tech", "Smart Grid Switching"],
      img: "/aboutImg/aboutProductimg2.png",
      tag: "Power Electronics"
    },
    {
      title: "Portable Power Stations",
      desc: "Production-ready portable energy solutions for global brands. Engineered with fast-charge technology and multi-region outlet configurations.",
      features: ["Fast-Charge Capability", "OEM/ODM Branding", "Multi-Output Design"],
      img: "/aboutImg/aboutProductimg3.png",
      tag: "Portable Energy"
    },
    {
      title: "E-Mobility Engineering",
      desc: "Specialized assembly of electric motorcycles and scooters. Reinforced chassis engineering and weatherproof motor controllers for commercial use.",
      features: ["Reinforced EV Frames", "IP65 Weatherproof Motors", "Custom Motor Controllers"],
      img: "/aboutImg/aboutProductimg4.png",
      tag: "Electric Mobility"
    }
  ];

  const timeline = [
    { 
      year: "1998", 
      title: "The Production Roots", 
      description: "Founded as a specialized facility for electric vehicle components and chassis engineering.", 
      icon: <PiFactory /> 
    },
    { 
      year: "2010", 
      title: "E-Mobility Leadership", 
      description: "Reached 5,000+ electric motorcycles produced annually for international export.", 
      icon: <PiChartLineUp /> 
    },
    { 
      year: "2018", 
      title: "Energy Storage Pivot", 
      description: "Integrated our battery expertise into residential LFP storage and high-efficiency inverter lines.", 
      icon: <PiLightning /> 
    },
    { 
      year: "2026", 
      title: "JoyHand Global", 
      description: "Operating a fully integrated manufacturing hub for next-generation renewable energy infrastructure.", 
      icon: <PiShieldCheck /> 
    }
  ];

  const testimonials = [
    {
      quote: "Working directly with JoyHand's engineering team allowed us to customize the BMS for our specific climate. Their manufacturing transparency is a massive competitive advantage.",
      author: "Ahmed Ibrahim",
      company: "GreenTech Distributors, Nigeria",
      image: "/aboutImg/aboutTestimonial1g.jpg"
    },
    {
      quote: "The build quality of their factory-direct LFP packs is significantly higher than the generic units we sourced before. Their QC protocols saved us from field failures.",
      author: "Carlos Mendez",
      company: "SolEnergy Latin America",
      image: "/aboutImg/aboutTestimonial2.jpg"
    }
  ];

  return (
    <main className="about-page">
      <PageHeader
        title="Direct Manufacturing Excellence"
        subtitle="Since 1998, we've built the technology that powers global energy markets."
        pageImage="/images/pageHeadImg/pageheader1.jpg"
      />

      {/* ================= INTRO ================= */}
      <section className="about-intro">

        <SectionDecor type="accent" count={8} />

        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader 
              badge="OWNING THE FLOOR"
              title="A Factory-First Approach to Renewable Energy"
            />

            <div className="about-intro__description">
              <p>
                JoyHand was born on the factory floor. We are engineers and builders first. 
                By maintaining <strong>direct control over our assembly lines</strong>, we ensure that every cell and circuit board meets the rigorous demands of professional distributors worldwide.
              </p>

              <div className="mission-statement">
                <h4 className="mission-statement__title">Our Manufacturing Promise</h4>
                <p className="mission-statement__text">
                  To eliminate the risk of the energy supply chain by providing importers with direct access to high-performance hardware, built and tested in our own factory.
                </p>
              </div>
            </div>
          </div>

          <div className="about-intro__visual">
            <div className="nfc-scanner">
              <div className="nfc-scanner__ring"></div>
              <div className="nfc-scanner__ring nfc-scanner__ring--delayed"></div>
              <div className="about-intro__image-wrapper">
                <Image
                  src="/images/abtImg/factory-photo1.jpg"
                  alt="JoyHand Automated Factory Line"
                  fill
                  className="about-intro__img"
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>Direct Factory Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="timeline-section">
        <div className="container">
          <SectionHeader
            badge="OUR HERITAGE"
            title="Over 26 Years of Engineering"
            center
          />
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className="timeline__icon">{item.icon}</div>
                <div className="timeline__content">
                  <span className="timeline__year">{item.year}</span>
                  <h4 className="timeline__title">{item.title}</h4>
                  <p className="timeline__description">{item.description}</p>
                </div>
                {index < timeline.length - 1 && <div className="timeline__connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="values-section">
        <div className="container">
          <SectionHeader
            badge="THE JOYHAND STANDARD"
            title="The 4 Pillars of Production"
            center
          />
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h4 className="value-card__title">{value.title}</h4>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENERGY SOLUTIONS (4 CARDS) ================= */}
      <section className="markets-section">
        <SectionDecor type="accent" count={8} />
            {/* CENTER RING */}
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
        <div className="container">
          <SectionHeader
            badge="CORE PRODUCTION"
            title="Energy Infrastructure We Manufacture"
            center
          />
          <div className="markets-grid">
            {energySectors.map((sector, index) => (
              <div key={index} className={`market-row ${index % 2 !== 0 ? 'market-row--reverse' : ''}`}>
                <div className="market-image">
                  <Image src={sector.img} alt={sector.title} fill />
                  <div className="market-badge">{sector.tag}</div>
                </div>
                <div className="market-text">
                  <h3>{sector.title}</h3>
                  <p>{sector.desc}</p>
                  <ul className="market-list">
                    {sector.features.map((feature, i) => (
                      <li key={i}><PiCheckCircleFill /> {feature}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-link">
                    Inquire for Wholesale <PiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">
        <div className="container">
          <SectionHeader
            badge="PARTNER SUCCESS"
            title="Trusted by Professional Importers"
            center
          />
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <PiQuotesFill className="testimonial-card__quote-icon" size={40} />
                <p className="testimonial-card__text">{t.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__author-image">
                    <Image src={t.image} alt={t.author} fill />
                  </div>
                  <div>
                    <h5>{t.author}</h5>
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="team-section">
        <SectionDecor type="primary" count={5} />
        <div className="container">
          <SectionHeader
            badge="TECHNICAL LEADERSHIP"
            title="The Minds Behind Your Supply Chain"
            center
          />
          <div className="team-section__grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card__visual-container">
                  <div className="team-card__visual">
                    <Image src={member.image} alt={member.name} fill className="team-card__img" />
                  </div>
                  <a href="#" className="team-card__linkedin"><PiLinkedinLogo size={24} /></a>
                </div>
                <h4 className="team-card__name">{member.name}</h4>
                <span className="team-card__role">{member.title}</span>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="abtCta-banner">
        <div className="container">
          <div className="abtCta-banner__wrapper">
            <div className="abtCta-banner__text">
              <h4 className="abtCta-banner__title">Scale Your Distribution With a Real Manufacturer</h4>
              <p className="abtCta-banner__subtitle">
                Access direct factory pricing, technical support, and OEM/ODM engineering services.
              </p>
            </div>
            <Link href="/contact" className="btn btn--secondary abtCta-banner__btn">
              Apply for Partnership <PiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}