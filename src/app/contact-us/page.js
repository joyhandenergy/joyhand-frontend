"use client";

import React from "react";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import SimpleContactForm from "@/components/contactForm/SimpleContactForm";
import SectionDecor from "@/components/sectionDecor/SectionDecor";
import { 
  Phone, 
  Mail, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Factory,
  Handshake,
  MessageCircle,
  Building2,
  Award,
  CheckCircle
} from "lucide-react";
import "./contact.css";

// Updated global offices – manufacturing facility highlighted
const globalOffices = [
  {
    icon: <Building2 size={22} />,
    title: "USA - Headquarters",
    content: "Montgomery, AL, USA",
    address: "2530 E South Blvd, Montgomery, AL 36116, United States",
    link: "https://maps.google.com",
    isOffice: true,
    region: "Americas"
  },
  {
    icon: <Factory size={22} />,
    title: "China - Manufacturing Facility",
    content: "Guangzhou, Guangdong, China",
    address: "No. 7 Nansha District, Guangzhou 511400, Guangdong, China",
    link: "https://maps.google.com",
    isOffice: true,
    region: "Asia Pacific",
    featured: true
  },
  {
  icon: <Globe size={22} />,
  title: "Australia - Pacific Office",
  content: "Melbourne, VIC, Australia",
  address: "157 A'Beckett Street, Melbourne VIC 3000, Australia",
  link: "https://maps.google.com",
  isOffice: true,
  region: "Oceania"
  },
  {
    icon: <Award size={22} />,
    title: "Nigeria - Africa Office",
    content: "Lagos, Nigeria",
    address: "New Mandilas International Market, Trade Fair, Ojo, Lagos",
    link: "https://maps.google.com",
    isOffice: true,
    region: "Africa"
  }
];

// Global support contact (unified)
const globalSupport = {
  icon: <Phone size={22} />,
  title: "Global Support",
  content: "+86 130 6085 0617",
  link: "tel:+8613060850617"
};

const manufacturingInquiries = {
  icon: <Mail size={22} />,
  title: "Manufacturing Inquiries",
  content: "sales@joyhand.com",
  link: "mailto:sales@joyhand.com"
};

const responseHours = {
  icon: <Clock size={22} />,
  title: "Response Hours",
  content: "24/7 Global Support | Office Hours: Mon-Fri 9am-6pm (Local Time)",
  isText: true
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHeader
        title="Let's Talk Manufacturing"
        subtitle="24-hour response. Global reach."
        pageImage="/pageHeadImg/pageheader-contact.jpg"
      />

      {/* ================= INQUIRY SECTION ================= */}
      <section className="contact-form-section">
        <SectionDecor type="accent" count={8} />
        <div className="container contact-form-section__grid">
          
          <div className="contact-form-section__content">
            <SectionHeader
              badge="Start Here"
              title="Tell Us About Your Project"
              subtitle="Share your requirements and we'll prepare a manufacturing proposal — usually within 24 hours."
            />

            {/* Feature Cards reflecting direct manufacturing capabilities */}
            <div className="contact-features">
              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Factory size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Custom Manufacturing</h5>
                   <p className="contact-feature-card__subtext">We produce to your specifications – from battery packs to complete systems.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><ShieldCheck size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">In‑House Quality Control</h5>
                   <p className="contact-feature-card__subtext">100% inspection at our facility. Every product is tested before shipment.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><Handshake size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Engineering Support</h5>
                   <p className="contact-feature-card__subtext">Work directly with our R&D team to customize designs and firmware.</p>
                </div>
              </div>

              <div className="contact-feature-card">
                <div className="contact-feature-card__icon"><CheckCircle size={22} /></div>
                <div className="contact-feature-card__info">
                   <h5 className="contact-feature-card__label">Certification Assistance</h5>
                   <p className="contact-feature-card__subtext">We help you navigate CE, UL, UN38.3, and other market requirements.</p>
                </div>
              </div>
            </div>
          </div>

          {/* THE FORM TERMINAL */}
          <div className="form-terminal">
            <div className="form-terminal__header">
              <div className="form-terminal__status">
                <span className="form-terminal__dot"></span>
                MANUFACTURING INTAKE
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

      {/* ================= GLOBAL OFFICES SECTION ================= */}
      <section className="global-offices">
        <div className="container">
          <SectionHeader 
            badge="Our Global Presence" 
            title="Offices Around the World" 
            subtitle="Serving distributors across four continents with local expertise and global reach"
            center 
          />
          
          <div className="global-offices__grid">
            {globalOffices.map((office, index) => (
              <div key={index} className={`office-card ${office.featured ? "office-card--featured" : ""}`}>
                <div className="office-card__icon">{office.icon}</div>
                <h3 className="office-card__title">{office.title}</h3>
                <p className="office-card__location">{office.content}</p>
                <p className="office-card__address">{office.address}</p>
                <span className="office-card__region">{office.region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS (NFC STYLE) ================= */}
      <section className="contact-info">
        <div className="container">
          <SectionHeader 
            badge="Get in Touch" 
            title="Global Support & Inquiries" 
            center 
          />
          <div className="contact-info__grid">
            {/* Global Support Card */}
            <div className="contact-card">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">
                  {globalSupport.icon}
                </div>
              </div>
              <h4 className="contact-card__title">{globalSupport.title}</h4>
              <a href={globalSupport.link} className="contact-card__link">
                {globalSupport.content}
              </a>
            </div>

            {/* Manufacturing Inquiries Card */}
            <div className="contact-card">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">
                  {manufacturingInquiries.icon}
                </div>
              </div>
              <h4 className="contact-card__title">{manufacturingInquiries.title}</h4>
              <a href={manufacturingInquiries.link} className="contact-card__link">
                {manufacturingInquiries.content}
              </a>
            </div>

            {/* Response Hours Card */}
            <div className="contact-card">
              <div className="contact-card__nfc-wrapper">
                <div className="contact-card__ring"></div>
                <div className="contact-card__icon">
                  {responseHours.icon}
                </div>
              </div>
              <h4 className="contact-card__title">{responseHours.title}</h4>
              <p className="contact-card__content">{responseHours.content}</p>
            </div>
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
            <span className="contact-map__badge">Global Manufacturing Network</span>
            <h3 className="contact-map__title">Four Continents. One Factory Partner.</h3>
            <p className="contact-map__text">
              Our headquarters in the USA, manufacturing facility in Guangzhou, and regional offices in Australia and Nigeria 
              give you direct access to JoyHand production line and engineering support worldwide.
            </p>
          </div>
        </div>
        <iframe
          title="JoyHand Global Locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000000!2d-100!3d35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAwJzAwLjAiTiAxMDXCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
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
                Our manufacturing team reviews your requirements within 24 hours. We will contact you from your nearest regional office 
                to discuss specifications, volume, and provide a detailed manufacturing proposal.
              </p>
            </div>
            <div className="contact-faq__item">
              <h4 className="contact-faq__question">Do you work with new distributors?</h4>
              <p className="contact-faq__answer">
                Absolutely. We partner with distributors of all sizes, from emerging brands to established players. Minimum order quantities vary 
                by product – we will help you find a configuration that fits your needs.
              </p>
            </div>
            <div className="contact-faq__item">
              <h4 className="contact-faq__question">How do you ensure quality?</h4>
              <p className="contact-faq__answer">
                We control production entirely in our ISO 9001:2025 certified facility. Every product undergoes in‑process inspections, final 
                testing, and full documentation before shipping. Certifications (CE, UL, UN38.3) are validated on‑site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL CTA ================= */}
      <section className="contact-bottom-cta">
        <div className="container">
          <div className="contact-bottom-cta__wrapper">
            <div className="contact-bottom-cta__content">
              <MessageCircle size={32} className="contact-bottom-cta__icon" />
              <h3 className="contact-bottom-cta__title">Prefer to talk?</h3>
              <p className="contact-bottom-cta__text">
                Call our global support line at <a href="tel:+8613060850617" className="contact-bottom-cta__phone">+86 130 6085 0617</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}