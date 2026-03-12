"use client";

import React from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SimpleContactForm from "@/components/contactForm/SimpleContactForm";
import { MapPin, Phone, Mail, Clock, Zap, ShieldCheck, Globe, Cpu } from "lucide-react";
import "./contact.css";

const contactDetails = [
  {
    icon: <MapPin size={22} />,
    title: "Headquarters",
    content: "52 Ubi Avenue 3, #05-41 Frontier, Singapore",
    link: "https://maps.google.com"
  },
  {
    icon: <Phone size={22} />,
    title: "Global Support",
    content: "+86 13060850167",
    link: "tel:+8613060850167"
  },
  {
    icon: <Mail size={22} />,
    title: "Inquiries",
    content: "info@joyhand.com",
    link: "mailto:info@joyhand.com"
  },
  {
    icon: <Clock size={22} />,
    title: "Operating Hours",
    content: "Mon - Fri: 9am - 6pm",
    isText: true
  }
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHeader
        title="Talk About Your Energy Project"
        pageImage="/images/pageHeadImg/pageheader3.jpg"
      />

      {/* ================= INQUIRY TERMINAL SECTION ================= */}
      <section className="contact-form-section">
        <div className="container contact-form-section__grid">
          
          <div className="contact-form-section__content">
            <SectionHeader
              badge="Engineering Support"
              title="Start Your Technical Consultation"
              subtitle="Ready to scale your energy project? Our engineering team is standing by to review your specifications and provide a custom OEM/ODM roadmap."
            />

            {/* Feature Cards linked to the Form's purpose */}
            <div className="contact-features">
              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Cpu size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Expert Tech Review</h5>
                   <p className="contact-feature-card__subtext">Direct access to senior battery and solar engineers.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><ShieldCheck size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Rapid Quote System</h5>
                   <p className="contact-feature-card__subtext">Project estimates delivered within 24-48 business hours.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Globe size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Compliance Ready</h5>
                   <p className="contact-feature-card__subtext">Guidance on international ISO, UL & CE certifications.</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE TECH FORM TERMINAL */}
          <div className="form-terminal">
            <div className="form-terminal__header">
              <div className="form-terminal__status">
                <span className="form-terminal__dot"></span>
                PROJECT INTAKE ACTIVE
              </div>
              <Zap size={16} className="form-terminal__bolt" />
            </div>
            <div className="form-terminal__body">
               <SimpleContactForm mode="contact" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT CARDS (NFC STYLE) ================= */}
      <section className="contact-info">
        <div className="container">
          <SectionHeader title="Global Presence" center />
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
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="contact-map">
        <div className="contact-map__overlay"></div>
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7381375100404!2d113.32627807386486!3d22.9966549172976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340253812b5d13e5%3A0xd8ff7029ec3354bd!2sChimelong%20Paradise!5e0!3m2!1sen!2sus!4v1773151558148!5m2!1sen!2sus"
          width="100%"
          height="500"
          style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }}
          allowFullScreen=""
          loading="lazy"
        />
      </section>
    </main>
  );
}
