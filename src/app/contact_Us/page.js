"use client";

import React from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SimpleContactForm from "@/components/contactForm/SimpleContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu,
  Factory,
  Handshake,
  ClipboardCheck
} from "lucide-react";
import "./contact.css";

const contactDetails = [
  {
    icon: <MapPin size={22} />,
    title: "Sourcing Hub",
    content: "Shenzhen Tech Park, China / AL, USA",
    link: "https://maps.google.com"
  },
  {
    icon: <Phone size={22} />,
    title: "Partnership Support",
    content: "+86 130 6085 0617",
    link: "tel:+8613060850617"
  },
  {
    icon: <Mail size={22} />,
    title: "Sourcing Inquiries",
    content: "partnership@joyhand.com",
    link: "mailto:partnership@joyhand.com"
  },
  {
    icon: <Clock size={22} />,
    title: "Response Hours",
    content: "Mon - Fri: 9am - 6pm (GMT+8)",
    isText: true
  }
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHeader
        title="Start Your Sourcing Partnership"
        subtitle="Connect with our team to discuss your energy product requirements"
        pageImage="/images/pageHeadImg/pageheader3.jpg"
      />

      {/* ================= INQUIRY TERMINAL SECTION ================= */}
      <section className="contact-form-section">
        <div className="container contact-form-section__grid">
          
          <div className="contact-form-section__content">
            <SectionHeader
              badge="Sourcing Support"
              title="Ready to Source Through JoyHand?"
              subtitle="Tell us about your project requirements. Our team will match you with vetted manufacturing partners and provide a custom OEM/ODM roadmap within 48 hours."
            />

            {/* Feature Cards linked to the Form's purpose */}
            <div className="contact-features">
              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Factory size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Factory Matching</h5>
                   <p className="contact-feature-card__subtext">We connect you with specialized manufacturers based on your product specifications.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><ClipboardCheck size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Quality Verification</h5>
                   <p className="contact-feature-card__subtext">Every factory partner is audited. Every shipment is inspected before leaving.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Handshake size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Partnership Roadmap</h5>
                   <p className="contact-feature-card__subtext">Clear timeline from sample verification to container delivery.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Globe size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Compliance Guidance</h5>
                   <p className="contact-feature-card__subtext">We verify ISO, CE, UL certifications directly with our factory partners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE TECH FORM TERMINAL */}
          <div className="form-terminal">
            <div className="form-terminal__header">
              <div className="form-terminal__status">
                <span className="form-terminal__dot"></span>
                SOURCING INTAKE ACTIVE
              </div>
              <Zap size={16} className="form-terminal__bolt" />
            </div>
            <div className="form-terminal__body">
               <SimpleContactForm mode="contact" />
            </div>
            <div className="form-terminal__footer">
              <p className="form-terminal__footnote">
                <Zap size={12} /> Priority response for volume inquiries
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT CARDS (NFC STYLE) ================= */}
      <section className="contact-info">
        <div className="container">
          <SectionHeader 
            badge="Global Sourcing Hubs" 
            title="Reach Our Partnership Team" 
            center 
          />
          <div className="contact-info__grid">
            {contactDetails.map((item, index) => (
              <div key={index} className="contact-card">
                <div className="contact-card__nfc-wrapper">
                  <div className="contact-card__ring"></div>
                  <div className="contact-card__icon">
                    {item.icon}
                  </div>
                </div>

                <h4 className="contact-card__title">{item.title}</h4>

                {item.isText ? (
                  <p className="contact-card__content">{item.content}</p>
                ) : (
                  <a href={item.link} className="contact-card__link">
                    {item.content}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ADDITIONAL TRUST SIGNAL */}
          <div className="contact-note">
            <p className="contact-note__text">
              <ShieldCheck size={16} /> All inquiries receive a response within 24 hours. 
              We respect your confidentiality and project timelines.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="contact-map">
        <div className="contact-map__overlay">
          <div className="contact-map__content">
            <span className="contact-map__badge">Global Sourcing Hub</span>
            <h3 className="contact-map__title">Shenzhen Tech Park</h3>
            <p className="contact-map__text">
              Our sourcing operations center, connecting distributors with 
              manufacturing partners across Asia.
            </p>
          </div>
        </div>
        <iframe
          title="JoyHand Sourcing Hub Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7381375100404!2d113.32627807386486!3d22.9966549172976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340253812b5d13e5%3A0xd8ff7029ec3354bd!2sChimelong%20Paradise!1m0!5e0!3m2!1sen!2sus!4v1773151558148!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ================= FAQ SNIPPET ================= */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq__grid">
            <div className="contact-faq__item">
              <h4 className="contact-faq__question">What happens after I submit this form?</h4>
              <p className="contact-faq__answer">
                Our sourcing team reviews your requirements within 24 hours. We will contact you to 
                discuss specifications, volume, and introduce relevant factory partners from our network.
              </p>
            </div>
            <div className="contact-faq__item">
              <h4 className="contact-faq__question">Do you work with new distributors?</h4>
              <p className="contact-faq__answer">
                Absolutely. We partner with distributors of all sizes, from emerging brands to established 
                players. Our minimums are flexible based on factory partner capabilities.
              </p>
            </div>
            <div className="contact-faq__item">
              <h4 className="contact-faq__question">How do you verify factory quality?</h4>
              <p className="contact-faq__answer">
                Every factory in our network undergoes on-site audits. We verify certifications, 
                production lines, and quality control processes before any partnership begins.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}