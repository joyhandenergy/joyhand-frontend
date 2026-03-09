import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiArrowRight } from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import Trustee from "@/components/Trustee/Trustee";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
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

      {/* ================= INTRO ================= */}
      <section className="about-intro">
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader 
              badge="About JoyHand" 
              title="A unique combination of solar energy and advanced battery technology"
            />
            <div className="about-intro__description">
              <p>JoyHand is a technology-driven manufacturer specializing in solar energy systems, lithium battery storage, and electric mobility power platforms.</p>
              <p>Our engineering teams combine expertise in solar technology and battery management to deliver scalable energy products.</p>
            </div>
          </div>
          <div className="about-intro__visual">
            <div className="about-intro__image-wrapper">
              <Image src="/images/solarImg/panel.home.jpg" alt="Solar expertise" fill className="about-intro__img" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="capabilities">
        <div className="container">
          <SectionHeader title="Our Core Capabilities" center />
          <div className="capabilities__grid">
            {["Solar Energy Systems", "Energy Storage Technology", "Electric Mobility Power"].map((cap, i) => (
              <div key={i} className="capabilities__card">
                <h3 className="capabilities__card-title">{cap}</h3>
                <p className="capabilities__card-text">Advanced systems engineered for residential and industrial energy optimization.</p>
                <PiArrowRight className="capabilities__card-icon" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Trustee />

      {/* ================= TEAM ================= */}
      <section className="team-section">
        <div className="container">
          <SectionHeader badge="Our Team" title="The People Powering JoyHand" center />
          <div className="team-section__grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-card__header">
                  <div className="team-card__image-container">
                    <Image src={member.image} alt={member.name} fill className="team-card__img" />
                  </div>
                  <div className="team-card__info">
                    <h4 className="team-card__name">{member.name}</h4>
                    <p className="team-card__role">{member.title}</p>
                    <PiLinkedinLogo className="team-card__social" />
                  </div>
                </div>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__wrapper">
            <div className="cta-banner__text">
              <h4 className="cta-banner__title">Partner With JoyHand</h4>
              <p className="cta-banner__subtitle">Ready to develop next-generation energy solutions?</p>
            </div>
            <Link href="/contact" className="btn btn--secondary cta-banner__btn">
              Start a Project <PiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
