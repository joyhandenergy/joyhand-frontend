"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PiLinkedinLogo,
  PiArrowRight,
  PiCheckCircleFill,
  PiTruck,
  PiShieldCheck,
  PiHandshake,
  PiGlobe,
  PiUsers,
  PiFactory,
  PiChartLineUp
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

import "./about.css";

export default function AboutPage() {

  const team = [
    {
      name: "Michael Zhang",
      title: "Chief Executive Officer",
      image: "/images/solarImg/panel.home.jpg",
      bio: "Michael leads JoyHand's global strategy, building partnerships with Tier-1 manufacturers and connecting them with distributors worldwide."
    },
    {
      name: "Sarah Chen",
      title: "Head of Engineering",
      image: "/images/solarImg/panel.home.jpg",
      bio: "Sarah bridges client specifications with factory capabilities, ensuring technical requirements and quality standards across all sourced products."
    }
  ];

  const values = [
    {
      icon: <PiShieldCheck size={32} />,
      title: "Quality Assured",
      description: "Every shipment undergoes rigorous on-site factory audits before leaving for your destination."
    },
    {
      icon: <PiHandshake size={32} />,
      title: "Partnership First",
      description: "We succeed only when our distributors succeed—long-term relationships over transactions."
    },
    {
      icon: <PiGlobe size={32} />,
      title: "Global Reach",
      description: "Logistics mastery enabling seamless container delivery to 12+ countries worldwide."
    },
    {
      icon: <PiFactory size={32} />,
      title: "Factory Expertise",
      description: "Deep manufacturing roots mean we speak the language of production—fluently."
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Founded",
      description: "Started with deep roots in EV manufacturing and battery technology.",
      icon: <PiFactory />
    },
    {
      year: "2003",
      title: "Evolved",
      description: "Expanded into full-service sourcing platform connecting distributors with vetted factories.",
      icon: <PiUsers />
    },
    {
      year: "2010",
      title: "Scaled",
      description: "Reached 5,000+ e-motorcycles supplied globally across 12 countries.",
      icon: <PiChartLineUp />
    },
    {
      year: "2018",
      title: "Expanded",
      description: "50+ active distributor partnerships and 15MW+ solar capacity delivered.",
      icon: <PiGlobe />
    },
    {
      year: "2025",
      title: "Today",
      description: "Trusted sourcing partner for global energy brands and distributors.",
      icon: <PiShieldCheck />
    }
  ];

  const testimonials = [
    {
      quote: "JoyHand handles everything—factory communication, quality checks, shipping. We just receive the container and sell.",
      author: "Ahmed Ibrahim",
      company: "GreenTech Distributors, Nigeria",
      image: "/images/solarImg/panel.home.jpg"
    },
    {
      quote: "Finally a sourcing partner who understands both manufacturing AND our market needs. Their QC protocols saved us countless headaches.",
      author: "Carlos Mendez",
      company: "SolEnergy Latin America",
      image: "/images/solarImg/panel.home.jpg"
    }
  ];

  return (
    <main className="about-page">

      <PageHeader
        title="Who We Are"
        subtitle="Manufacturing roots. Sourcing expertise."
        pageImage="/images/pageHeadImg/pageheader1.jpg"
      />

      {/* ================= INTRO + MISSION ================= */}
      <section className="about-intro">
        <div className="container about-intro__container">
          <div className="about-intro__content">
            <SectionHeader 
              badge="OUR EVOLUTION"
              title="From Factory Floors to Global Markets"
            />

            <div className="about-intro__description">
              <p>
                Founded in 1998, JoyHand began on EV manufacturing lines. Today, we have transformed that hands-on experience into a 
                <strong> premier global sourcing platform</strong> that tackles the two biggest challenges distributors face:
                <strong> Quality Assurance</strong> and
                <strong> Supply Chain Liquidity</strong>.
              </p>

              <div className="mission-statement">
                <h4 className="mission-statement__title">Our Mission</h4>
                <p className="mission-statement__text">
                  We believe distributors should focus on growing their markets, not worrying about factory reliability. 
                  JoyHand exists to remove the risk, complexity, and uncertainty from international sourcing.
                </p>
              </div>

              <div className="about-intro__highlights">
                <div className="highlight-tag">
                  <span className="highlight-tag__icon"><PiTruck /></span>
                  <div>
                    <strong>Logistics Mastery</strong>
                    <p>
                      We manage complex shipping and customs for container-load delivery.
                    </p>
                  </div>
                </div>

                <div className="highlight-tag">
                  <span className="highlight-tag__icon"><PiShieldCheck /></span>
                  <div>
                    <strong>QC Protocols</strong>
                    <p>
                      On-site factory audits before any product leaves for your destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NFC SCANNER VISUAL */}
          <div className="about-intro__visual">
            <div className="nfc-scanner">
              <div className="nfc-scanner__ring"></div>
              <div className="nfc-scanner__ring nfc-scanner__ring--delayed"></div>
              <div className="about-intro__image-wrapper">
                <Image
                  src="/images/abtImg/factory-photo1.jpg"
                  alt="QC Verification"
                  fill
                  className="about-intro__img"
                  priority
                />
                <div className="nfc-status">
                  <div className="nfc-status__dot"></div>
                  <span>Batch Quality Verified</span>
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
            badge="Our Journey"
            title="1998 — 2025"
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

      {/* ================= CORE VALUES ================= */}
      <section className="values-section">
        <div className="container">
          <SectionHeader
            badge="How We Work"
            title="Four Pillars. One Purpose."
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

      {/* ================= MARKETS WE SERVE ================= */}
      <section className="markets-section">
        <div className="container">
          <SectionHeader
            badge="Markets We Serve"
            title="Energy Sectors We Support"
            center
          />

          {/* MARKET 1 - Residential & Industrial Storage */}
          <div className="market-row">
            <div className="market-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Battery Storage Market"
                fill
              />
              <div className="market-badge">Storage</div>
            </div>
            <div className="market-text">
              <h3>Residential & Industrial Storage</h3>
              <p>
                We connect distributors with LFP battery factories serving homes and grid projects. 
                Our engineers verify cycle life claims before any shipment leaves.
              </p>
              <ul className="market-list">
                <li><PiCheckCircleFill /> 6,000+ cycle LFP batteries</li>
                <li><PiCheckCircleFill /> Automotive-grade cell suppliers</li>
                <li><PiCheckCircleFill /> Modular, scalable designs</li>
              </ul>
              <Link href="/services" className="btn-link">
                Explore Storage Sourcing <PiArrowRight />
              </Link>
            </div>
          </div>

          {/* MARKET 2 - Commercial EV Infrastructure */}
          <div className="market-row market-row--reverse">
            <div className="market-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="EV Infrastructure Market"
                fill
              />
              <div className="market-badge">E-Mobility</div>
            </div>
            <div className="market-text">
              <h3>Commercial EV Infrastructure</h3>
              <p>
                Sourcing partners for developers and municipalities. We connect you with manufacturers 
                producing weatherproof EV charging systems.
              </p>
              <ul className="market-list">
                <li><PiCheckCircleFill /> Universal connector compatibility</li>
                <li><PiCheckCircleFill /> IP65 weatherproof certified</li>
                <li><PiCheckCircleFill /> Smart monitoring & load balancing</li>
              </ul>
              <Link href="/services" className="btn-link">
                Explore EV Sourcing <PiArrowRight />
              </Link>
            </div>
          </div>

          {/* MARKET 3 - Solar Integration */}
          <div className="market-row">
            <div className="market-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Solar Integration Market"
                fill
              />
              <div className="market-badge">Solar</div>
            </div>
            <div className="market-text">
              <h3>Solar Integration Partnerships</h3>
              <p>
                Bridging inverter manufacturers with energy installers worldwide. We source 
                high-efficiency pure sine wave inverters from Tier-1 component suppliers.
              </p>
              <ul className="market-list">
                <li><PiCheckCircleFill /> 98% peak efficiency</li>
                <li><PiCheckCircleFill /> Smart grid switching</li>
                <li><PiCheckCircleFill /> Tier-1 component sourcing</li>
              </ul>
              <Link href="/services" className="btn-link">
                Explore Inverter Sourcing <PiArrowRight />
              </Link>
            </div>
          </div>

          {/* MARKET 4 - Emergency & Off-Grid */}
          <div className="market-row market-row--reverse">
            <div className="market-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Portable Power Market"
                fill
              />
              <div className="market-badge">Portable</div>
            </div>
            <div className="market-text">
              <h3>Emergency & Off-Grid</h3>
              <p>
                Custom rugged portable stations for disaster relief and remote energy independence. 
                Fast-charge technology and OEM branding available.
              </p>
              <ul className="market-list">
                <li><PiCheckCircleFill /> Fast-charge capable</li>
                <li><PiCheckCircleFill /> Multiple output configurations</li>
                <li><PiCheckCircleFill /> Full OEM branding available</li>
              </ul>
              <Link href="/services" className="btn-link">
                Explore Portable Sourcing <PiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">
        <div className="container">
          <SectionHeader
            badge="Partner Stories"
            title="Trusted by Distributors Worldwide"
            center
          />

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__quote">&quot;</div>
                <p className="testimonial-card__text">{testimonial.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__author-image">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                    />
                  </div>
                  <div>
                    <h5>{testimonial.author}</h5>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">
        <div className="container">
          <SectionHeader
            badge="Leadership"
            title="The Team Behind Your Supply Chain"
            center
          />

          <div className="team-section__grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card__visual-container">
                  <div className="team-card__visual">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="team-card__img"
                    />
                  </div>
                  <a href="#" className="team-card__linkedin">
                    <PiLinkedinLogo size={24} />
                  </a>
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
              <h4 className="abtCta-banner__title">
                Ready to Scale?
              </h4>
              <p className="abtCta-banner__subtitle">
                Partner with JoyHand for reliable sourcing and quality control.
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