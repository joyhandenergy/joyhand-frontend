"use client";

import { useState } from "react";
import {
  PiGear,
  PiArrowRight,
  PiShieldCheck,
  PiCheckCircleFill,
  PiSealCheckFill,
  PiMagnifyingGlass,
  PiHandshake,
  PiClipboardText,
  PiBoat,
  PiFactory
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import Link from "next/link";
import PopUpModal from "@/components/contactForm/PopUpModal";
import "./services.css";
import SuperRing from "@/components/superRing/SuperRing";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      title: "OEM Manufacturing",
      desc: "We produce certified solar inverters, storage batteries, and portable power stations under your brand. Custom labeling, packaging, and firmware – all from our factory.",
      icon: <PiFactory weight="duotone" />,
      tag: "OEM",
      bgImage: "/serviceImg/serviceodm.jpg"
    },
    {
      title: "ODM Engineering",
      desc: "Full custom design and development of energy storage systems and e-mobility powertrains. Our engineers handle PCB layout, BMS tuning, and mechanical integration.",
      icon: <PiGear weight="duotone" />,
      tag: "ODM",
      bgImage: "/serviceImg/serviceoem.jpg"
    },
    {
      title: "Quality Assurance",
      desc: "100% in-process inspection and final testing. Our QC lab performs thermal shock, vibration, and cycle life testing on every production batch.",
      icon: <PiShieldCheck weight="duotone" />,
      tag: "Quality",
      bgImage: "/serviceImg/servicequality.jpg"
    },
    {
      title: "Global Logistics",
      desc: "We handle container consolidation, dangerous goods documentation, and customs clearance – delivering your products to warehouses worldwide.",
      icon: <PiBoat weight="duotone" />,
      tag: "Logistics",
      bgImage: "/serviceImg/servicelogistic.jpg"
    }
  ];

  const qcProtocols = [
    {
      title: "In-Process Inspection",
      desc: "Continuous monitoring during assembly; every cell and PCB is tested inline.",
      icon: <PiClipboardText />
    },
    {
      title: "Batch Testing",
      desc: "Random sampling and performance testing before shipment release.",
      icon: <PiMagnifyingGlass />
    },
    {
      title: "Certification Validation",
      desc: "We maintain CE, UL, UN38.3, and IEC certifications – validated on-site.",
      icon: <PiSealCheckFill />
    },
    {
      title: "Pre‑Shipment Audit",
      desc: "Final quality check during container loading; 100% of shipments inspected.",
      icon: <PiShieldCheck />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      desc: "We discuss your specifications, target markets, and volume requirements.",
      icon: <PiHandshake />
    },
    {
      step: "02",
      title: "Engineering & Prototyping",
      desc: "Our engineers create CAD designs, BOMs, and prototypes for your approval.",
      icon: <PiGear />
    },
    {
      step: "03",
      title: "Sample Verification",
      desc: "Samples are tested against your specifications before production begins.",
      icon: <PiMagnifyingGlass />
    },
    {
      step: "04",
      title: "Production Oversight",
      desc: "Our QC team monitors production and conducts random in-line inspections.",
      icon: <PiFactory />
    },
    {
      step: "05",
      title: "Pre‑shipment Inspection",
      desc: "Final QC check before container loading at our facility.",
      icon: <PiShieldCheck />
    },
    {
      step: "06",
      title: "Global Logistics",
      desc: "We coordinate shipping, customs clearance, and delivery to your warehouse.",
      icon: <PiBoat />
    }
  ];

  return (
    <main className="services-page">
      <PageHeader
        title="Manufacturing Capabilities"
        subtitle="From engineering to global delivery."
        pageImage="/pageHeadImg/pageheader-services.jpg"
      />

      {/* INTRO */}
      <section className="services-intro">
        <SectionDecor type="accent" count={8} />
        <div className="container">
          <div className="services-intro__grid">
            <div className="services-intro__header">
              <SectionHeader 
                badge="Direct Manufacturing" 
                title="Your End‑to‑End Production Partner" 
              />
            </div>
            <div className="services-intro__content">
              <p className="services-intro__desc">
                Since 1998, JoyHand has designed, engineered, and manufactured energy solutions. 
                Today, we offer complete OEM/ODM services, quality control, and global logistics – 
                giving distributors a single, reliable partner for the entire product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-grid">
        <SuperRing type="primary" size="1400px" thickness="40px" top="50%" left="50%" translateX="-50%" translateY="-50%" opacity={0.06} />
        <SuperRing type="secondary" size="900px" thickness="40px" top="15%" left="70%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <SuperRing type="accent" size="900px" thickness="40px" top="85%" left="30%" translateX="-50%" translateY="-50%" opacity={0.05} />
        <div className="container">
          <div className="services-grid__wrapper">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="service-card"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="service-card__overlay"></div>
                <div className="service-card__pattern"></div>
                <div className="service-card__badge">{service.tag}</div>
                <div className="service-card__icon-box">{service.icon}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.desc}</p>
                </div>
                <button onClick={openModal} className="service-card__link">
                  <span>Request Info</span>
                  <PiArrowRight weight="bold" className="service-card__arrow" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROTOCOLS */}
      <section className="qc-protocols">
        <SectionDecor type="primary" count={4} />
        <div className="container">
          <SectionHeader badge="Our Quality Standards" title="Every Product. Every Batch. Verified." center />
          <div className="qc-protocols__grid">
            {qcProtocols.map((protocol, idx) => (
              <div key={idx} className="qc-card">
                <div className="qc-card__icon">{protocol.icon}</div>
                <h4 className="qc-card__title">{protocol.title}</h4>
                <p className="qc-card__desc">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DISTRIBUTORS */}
      <section className="why-distributors">
        <div className="container">
          <div className="why-distributors__box">
            <div className="why-distributors__header">
              <span className="badge">Trusted by Global Distributors</span>
              <h2 className="why-distributors__title">Why Partners Work With Us</h2>
            </div>
            <div className="why-distributors__grid">
              <div className="why-item"><div className="why-item__number">01</div><h4 className="why-item__title">Direct Factory Access</h4><p className="why-item__text">You skip the middleman. We manufacture, so you get the best pricing and full traceability.</p></div>
              <div className="why-item"><div className="why-item__number">02</div><h4 className="why-item__title">Quality Guaranteed</h4><p className="why-item__text">On-site inspections at every stage. If it doesn’t pass, it doesn’t ship.</p></div>
              <div className="why-item"><div className="why-item__number">03</div><h4 className="why-item__title">Logistics Managed</h4><p className="why-item__text">From container consolidation to customs clearance – we handle the complexity.</p></div>
              <div className="why-item"><div className="why-item__number">04</div><h4 className="why-item__title">Scale With Us</h4><p className="why-item__text">Whether you need one container or hundreds, our production lines grow with you.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sourcing-process">
        <SectionDecor type="accent" count={8} />
        <div className="container">
          <SectionHeader badge="How We Work" title="From Your Specs to Your Warehouse" center />
          <div className="sourcing-process__grid">
            {process.map((item, i) => (
              <div key={i} className="process-card">
                <div className="process-card__number">{item.step}</div>
                <div className="process-card__inner">
                  <div className="process-card__icon">{item.icon}</div>
                  <h4 className="process-card__title">{item.title}</h4>
                  <p className="process-card__text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="partner-facilities">
        <div className="container">
          <div className="partner-facilities__box">
            <div className="partner-facilities__content">
              <SectionHeader badge="Our Factory" title="Manufacturing Hub in Guangzhou" light />
              <p className="partner-facilities__text">50,000 m² ISO 9001:2025 certified facility. We specialize in:</p>
              <ul className="partner-facilities__list">
                <li><PiCheckCircleFill /> LFP battery assembly (Grade-A prismatic cells)</li>
                <li><PiCheckCircleFill /> Solar inverter production (Tier-1 components)</li>
                <li><PiCheckCircleFill /> EV charging infrastructure & e‑mobility platforms</li>
                <li><PiCheckCircleFill /> Portable power station manufacturing</li>
              </ul>
              <Link href="/about-us" className="btn btn--secondary">Explore Our Facility</Link>
            </div>
            <div className="partner-facilities__visual">
              <div className="facility-stats">
                <div className="facility-stats__item"><span className="facility-stats__number">50,000</span><span className="facility-stats__label">m² Facility</span></div>
                <div className="facility-stats__item"><span className="facility-stats__number">100%</span><span className="facility-stats__label">In‑Process QC</span></div>
                <div className="facility-stats__item"><span className="facility-stats__number">30+</span><span className="facility-stats__label">R&D Engineers</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__banner">
            <div className="services-cta__content">
              <PiSealCheckFill className="services-cta__icon" />
              <h2 className="services-cta__title">Ready to Manufacture With Confidence?</h2>
              <p className="services-cta__subtitle">Partner with JoyHand for direct factory quality and engineering support.</p>
              <Link href="/contact-us" className="btn btn--secondary">Contact Our Manufacturing Team</Link>
            </div>
          </div>
        </div>
      </section>

      <PopUpModal isOpen={isModalOpen} onClose={closeModal} mode="quote" />
    </main>
  );
}