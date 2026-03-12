"use client";

import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiArrowRight, PiShieldCheckFill } from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import Trustee from "@/components/Trustee/Trustee";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import "./about.css";

export default function AboutPage() {
  const team = [
    {
      name: "Michael Zhang",
      title: "Chief Executive Officer",
      image: "/images/solarImg/panel.home.jpg",
      bio: "Michael leads JoyHand’s global strategy and innovation across solar energy systems, battery storage platforms and electric mobility technologies."
    },
    {
      name: "Sarah Chen",
      title: "Head of Engineering",
      image: "/images/solarImg/panel.home.jpg",
      bio: "Sarah oversees engineering development of lithium battery storage systems and intelligent energy management platforms."
    }
  ];

  return (
    <main className="about-page">
      <PageHeader title="About JoyHand" pageImage="/images/pageHeadImg/pageheader1.jpg" />

      {/* ================= INTRO (NFC ANIMATION) ================= */}
      <section className="about-intro">
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader 
              badge="Innovation Leader" 
              title="A unique combination of solar energy and advanced battery technology"
            />
            <div className="about-intro__description">
              <p>JoyHand is a technology-driven manufacturer specializing in solar energy systems, lithium battery storage, and electric mobility power platforms.</p>
              <p>Our engineering teams combine expertise in solar technology and battery management to deliver scalable energy products.</p>
            </div>
          </div>

          <div className="about-intro__visual">
            <div className="nfc-scanner">
              <div className="nfc-scanner__ring"></div>
              <div className="nfc-scanner__ring nfc-scanner__ring--delayed"></div>
              <div className="about-intro__image-wrapper">
                <Image 
                  src="/images/solarImg/panel.home.jpg" 
                  alt="Solar expertise" 
                  fill 
                  className="about-intro__img" 
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>System Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Trustee />
      {/* ================= CAPABILITIES ================= */}
      <section className="capabilities">
        <div className="container">
          <SectionHeader title="Our Core Capabilities" center />
          <div className="capabilities__grid">
            {["Solar Energy Systems", "Energy Storage Technology", "Electric Mobility Power"].map((cap, i) => (
              <div key={i} className="capabilities__card">
                <div className="capabilities__card-header">
                   <h3 className="capabilities__card-title">{cap}</h3>
                   <PiShieldCheckFill className="capabilities__card-badge" />
                </div>
                <p className="capabilities__card-text">Advanced systems engineered for residential and industrial energy optimization.</p>
                <div className="capabilities__card-link">
                   <span>Learn More</span>
                   <PiArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM (CIRCULAR DESIGN) ================= */}
      <section className="team-section">
        <div className="container">
          <SectionHeader badge="Leadership" title="The Experts Behind JoyHand" center />
          <div className="team-section__grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-card__visual-container">
                  <div className="team-card__visual">
                    <Image src={member.image} alt={member.name} fill className="team-card__img" />
                  </div>
                  {/* LinkedIn Icon as requested */}
                  <a href="#" className="team-card__linkedin" aria-label="LinkedIn Profile">
                    <PiLinkedinLogo size={24} weight="fill" />
                  </a>
                </div>
                <div className="team-card__content">
                  <h4 className="team-card__name">{member.name}</h4>
                  <span className="team-card__role">{member.title}</span>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (BOTTOM MARGIN) ================= */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__wrapper">
            <div className="cta-banner__text">
              <h4 className="cta-banner__title">Partner With JoyHand</h4>
              <p className="cta-banner__subtitle">Ready to source solar and electric mobility products for your market? Whether you need:</p>
            </div>
            <Link href="/contact" className="btn btn--secondary cta-banner__btn">
              Get Started <PiArrowRight weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
