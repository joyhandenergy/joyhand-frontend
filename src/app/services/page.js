import {
  PiGear,
  PiLightbulb,
  PiTruck,
  PiArrowRight,
  PiBatteryCharging,
  PiShieldCheck,
  PiGlobe,
  PiCheckCircle
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Link from "next/link";
import "./services.css";

export default function ServicesPage() {
  const services = [
    {
      title: "OEM Energy Storage",
      desc: "Custom-engineered lithium battery storage systems designed for solar, industrial backup power and grid energy platforms.",
      icon: <PiBatteryCharging />,
      tag: "Manufacturing"
    },
    {
      title: "ODM Solar Solutions",
      desc: "Ready-to-market solar inverter and storage systems developed with certified design standards for rapid deployment.",
      icon: <PiLightbulb />,
      tag: "Design"
    },
    {
      title: "Electric Mobility Power",
      desc: "Battery platforms engineered for electric bikes, scooters and mobility vehicles with long cycle life.",
      icon: <PiTruck />,
      tag: "Mobility"
    },
    {
      title: "Global Supply Network",
      desc: "International logistics and factory-direct manufacturing enabling global brands to scale energy solutions efficiently.",
      icon: <PiGlobe />,
      tag: "Distribution"
    }
  ];

  return (
    <main className="services-page">
      <PageHeader
        title="Industrial Expertise"
        subtitle="Engineering the future of energy storage and electric mobility systems"
        pageImage="/images/solarImg/panel.home.jpg"
      />

      {/* ================= INTRO ================= */}
      <section className="services-intro">
        <div className="container">
          <div className="services-intro__grid">
            <SectionHeader 
              badge="20+ Years Experience" 
              title="One-Stop Energy Solutions From Factory to Field" 
            />
            <p className="services-intro__desc">
              JoyHand combines industrial manufacturing precision with advanced battery engineering. 
              Our production facilities deliver high-performance solar storage systems and electric 
              mobility batteries trusted by global brands.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="services-grid">
        <div className="container">
          <div className="services-grid__wrapper">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card__header">
                  <div className="service-card__icon">{service.icon}</div>
                  <span className="service-card__badge">{service.tag}</span>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <Link href="/contact" className="service-card__link">
                  Request Specs <PiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELIABILITY ================= */}
      <section className="reliability">
        <div className="container">
          <div className="reliability__box">
            <SectionHeader 
              title="Engineered for Reliability" 
              subtitle="Global brands trust JoyHand manufacturing infrastructure for safety, consistency and excellence."
            />
            <div className="reliability__grid">
              <div className="reliability-item">
                <PiShieldCheck className="reliability-item__icon" />
                <div className="reliability-item__content">
                  <h4 className="reliability-item__title">ISO/TS16949 Certified</h4>
                  <p className="reliability-item__text">Automotive-grade certification ensuring strict production quality standards.</p>
                </div>
              </div>
              <div className="reliability-item">
                <PiGear className="reliability-item__icon" />
                <div className="reliability-item__content">
                  <h4 className="reliability-item__title">Advanced Engineering</h4>
                  <p className="reliability-item__text">Dedicated R&D teams developing next-generation energy solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process">
        <div className="container">
          <SectionHeader badge="Our Process" title="How We Deliver Global Energy Solutions" center />
          <div className="process__grid">
            {["Consultation", "Engineering Design", "Manufacturing", "Global Delivery"].map((step, i) => (
              <div key={i} className="process-card">
                <div className="process-card__step">0{i + 1}</div>
                <PiCheckCircle className="process-card__icon" />
                <h4 className="process-card__title">{step}</h4>
                <p className="process-card__text">Standardized procedures ensuring consistent product excellence and delivery.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__banner">
            <h2 className="services-cta__title">Start Your OEM / ODM Energy Project</h2>
            <p className="services-cta__subtitle">Partner with JoyHand to develop solar storage and battery systems.</p>
            <Link href="/contact" className="btn btn--secondary">
              Contact Our Global Offices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
