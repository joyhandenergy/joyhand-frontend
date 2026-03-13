"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PiLinkedinLogo,
  PiArrowRight,
  PiCheckCircleFill
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import TrustSignals from "@/components/trustSignals/TrustSignals";
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

      <PageHeader
        title="Global Energy Solutions"
        pageImage="/images/pageHeadImg/pageheader1.jpg"
      />

      {/* ================= INTRO ================= */}

      <section className="about-intro">

        <div className="container about-intro__container">

          <div className="about-intro__content">

            <div className="about-intro__description">

              <p>
                Founded in 2018, JoyHand has evolved from a specialized
                manufacturing unit into a
                <strong> premier global trading and OEM partner.</strong>
                We solve the two biggest hurdles for distributors:
                <strong> Quality Assurance</strong> and
                <strong> Supply Chain Liquidity.</strong>
              </p>

              <div className="about-intro__highlights">

                <div className="highlight-tag">
                  <span className="highlight-tag__icon">🚢</span>

                  <div>
                    <strong>Global Logistics Mastery</strong>
                    <p>
                      We manage complex shipping and customs for effortless
                      container-load delivery.
                    </p>
                  </div>
                </div>

                <div className="highlight-tag">
                  <span className="highlight-tag__icon">🛡️</span>

                  <div>
                    <strong>Independent QC Protocols</strong>
                    <p>
                      Our engineers perform on-site factory audits before
                      any product leaves the hub.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* IMAGE */}

          <div className="about-intro__visual">

            <div className="nfc-scanner">

              <div className="nfc-scanner__ring"></div>
              <div className="nfc-scanner__ring nfc-scanner__ring--delayed"></div>

              <div className="about-intro__image-wrapper">

                <Image
                  src="/images/solarImg/panel.home.jpg"
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

      <TrustSignals />

      {/* ================= FOUR PILLARS ================= */}

      <section className="visual-proof">

        <div className="container">

          <SectionHeader
            badge="Our Ecosystem"
            title="The Four Pillars of JoyHand Energy"
            center
          />

          {/* PILLAR 1 */}

          <div className="proof-row">

            <div className="proof-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Solar Inverter"
                fill
              />
              <div className="proof-badge">System Brain</div>
            </div>

            <div className="proof-text">

              <h3>Intelligent Solar Inverters</h3>

              <p>
                The &quote;Brain&quote; of your energy system. We source high-efficiency
                pure sine wave inverters that bridge solar harvest and grid
                stability.
              </p>

              <ul className="proof-list">
                <li><PiCheckCircleFill /> 98% Peak Efficiency</li>
                <li><PiCheckCircleFill /> Smart Grid Switching</li>
                <li><PiCheckCircleFill /> Tier-1 Components</li>
              </ul>

              <Link href="/products" className="btn-link">
                View Inverter Specs <PiArrowRight />
              </Link>

            </div>

          </div>

          {/* PILLAR 2 */}

          <div className="proof-row proof-row--reverse">

            <div className="proof-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Battery"
                fill
              />
              <div className="proof-badge">Energy Heart</div>
            </div>

            <div className="proof-text">

              <h3>High-Density Storage Batteries</h3>

              <p>
                Safe, long-lasting energy storage. Our LFP batteries are
                tested for 6,000+ cycles for long-term reliability.
              </p>

              <ul className="proof-list">
                <li><PiCheckCircleFill /> LiFePO4 Chemistry</li>
                <li><PiCheckCircleFill /> Intelligent BMS</li>
                <li><PiCheckCircleFill /> Modular Design</li>
              </ul>

              <Link href="/products" className="btn-link">
                Explore Battery Tech <PiArrowRight />
              </Link>

            </div>

          </div>

          {/* PILLAR 3 */}

          <div className="proof-row">

            <div className="proof-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="Power Station"
                fill
              />
              <div className="proof-badge">Mobile Power</div>
            </div>

            <div className="proof-text">

              <h3>Portable Solar Power Stations</h3>

              <p>
                Rugged, high-capacity portable units for emergency backup
                and off-grid energy independence.
              </p>

              <ul className="proof-list">
                <li><PiCheckCircleFill /> Fast Charge</li>
                <li><PiCheckCircleFill /> Multiple Outputs</li>
                <li><PiCheckCircleFill /> OEM Branding</li>
              </ul>

              <Link href="/products" className="btn-link">
                Portable Solutions <PiArrowRight />
              </Link>

            </div>

          </div>

          {/* PILLAR 4 */}

          <div className="proof-row proof-row--reverse">

            <div className="proof-image">
              <Image
                src="/images/solarImg/panel.home.jpg"
                alt="EV Charger"
                fill
              />
              <div className="proof-badge">Future Ready</div>
            </div>

            <div className="proof-text">

              <h3>Electric Mobility Infrastructure</h3>

              <p>
                EV charging systems designed for commercial hubs,
                residential properties, and smart cities.
              </p>

              <ul className="proof-list">
                <li><PiCheckCircleFill /> Universal Connectors</li>
                <li><PiCheckCircleFill /> IP65 Weatherproof</li>
                <li><PiCheckCircleFill /> Smart Monitoring</li>
              </ul>

              <Link href="/products" className="btn-link">
                E-Mobility Catalog <PiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TEAM ================= */}

      <section className="team-section">

        <div className="container">

          <SectionHeader
            badge="Leadership"
            title="The Supply Chain Experts"
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

      <section className="cta-banner">

        <div className="container">

          <div className="cta-banner__wrapper">

            <div className="cta-banner__text">

              <h4 className="cta-banner__title">
                Expand Your Distribution Hub
              </h4>

              <p className="cta-banner__subtitle">
                Partner with JoyHand for reliable sourcing and factory-direct
                quality control.
              </p>

            </div>

            <Link href="/contact" className="btn btn--secondary cta-banner__btn">
              Apply for Partnership <PiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}