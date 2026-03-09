"use client";
import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import { 
  MapPin, Phone, Mail, Clock, 
  User, Building2, ChevronRight, CheckCircle2, Zap 
} from "lucide-react";
import "./contact.css";

const contactDetails = [
  { icon: <MapPin />, title: "Headquarters", content: "52 Ubi Avenue 3, #05-41 Frontier, Singapore 408867", link: "https://maps.google.com" },
  { icon: <Phone />, title: "Global Support", content: "+65 80610116", link: "tel:+6580610116" },
  { icon: <Mail />, title: "Inquiries", content: "info@fomo.energy", link: "mailto:info@fomo.energy" },
  { icon: <Clock />, title: "Operating Hours", content: "Mon - Fri: 9am - 6pm / Sat: 9am - 1pm", isText: true }
];

const SolarLeadForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm();

  const userType = useWatch({
    control,
    name: "userType",
    defaultValue: "" 
  });

  const onSubmit = (data) => {
    console.log("Lead Data:", data);
    setStep(4);
  };

  const handleNext = async () => {
    const isValid = await trigger(["userType", "zip", "company", "solution"]); 
    if (isValid) setStep((prev) => prev + 1);
  };

  return (
    <div className="lead-form">
      {step < 4 && (
        <div className="lead-form__progress-container">
          <div className="lead-form__progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
          <span className="lead-form__step-count">Step {step} of 3</span>
        </div>
      )}

      <form className="lead-form__body" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="lead-form__step">
            <h3 className="lead-form__step-title">How can we help?</h3>
            <div className="lead-form__options">
              <label className={`lead-form__option ${userType === 'b2c' ? 'lead-form__option--selected' : ''}`}>
                <input type="radio" {...register("userType", { required: true })} value="b2c" className="lead-form__radio" />
                <User size={32} />
                <span className="lead-form__option-text">Home / B2C</span>
              </label>
              <label className={`lead-form__option ${userType === 'b2b' ? 'lead-form__option--selected' : ''}`}>
                <input type="radio" {...register("userType", { required: true })} value="b2b" className="lead-form__radio" />
                <Building2 size={32} />
                <span className="lead-form__option-text">OEM/ODM B2B</span>
              </label>
            </div>
            <button type="button" onClick={handleNext} disabled={!userType} className="btn btn--primary lead-form__nav-btn">
              Continue <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="lead-form__step">
            <h3 className="lead-form__step-title">Project Scope</h3>
            <div className="lead-form__fields">
              {userType === 'b2c' ? (
                <input {...register("zip", { required: true })} placeholder="Installation ZIP Code" className="lead-form__input" />
              ) : (
                <input {...register("company", { required: true })} placeholder="Company Name" className="lead-form__input" />
              )}
              <select {...register("solution", { required: true })} className="lead-form__input">
                <option value="">Select Primary Solution</option>
                <option value="solar">Solar Energy Systems</option>
                <option value="battery">Lithium Battery Storage</option>
                <option value="oem">Full OEM/ODM Partnership</option>
              </select>
            </div>
            <button type="button" onClick={handleNext} className="btn btn--primary lead-form__nav-btn">Next Step</button>
          </div>
        )}

        {step === 3 && (
          <div className="lead-form__step">
            <h3 className="lead-form__step-title">Final Details</h3>
            <div className="lead-form__fields">
              <input {...register("name", { required: true })} placeholder="Full Name" className="lead-form__input" />
              <input {...register("email", { required: true })} type="email" placeholder="Business Email" className="lead-form__input" />
              <input {...register("phone", { required: true })} type="tel" placeholder="Phone Number" className="lead-form__input" />
            </div>
            <button type="submit" className="btn btn--primary lead-form__nav-btn">Request Free Quote</button>
          </div>
        )}

        {step === 4 && (
          <div className="lead-form__success">
            <CheckCircle2 size={64} className="lead-form__success-icon" />
            <h3 className="lead-form__success-title">Application Received</h3>
            <p className="lead-form__success-text">Our engineering team will review your requirements and reach out within 2 business hours.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <PageHeader title="Connect With Us" pageImage="/images/pageHeadImg/pageheader3.jpg" />

      {/* ================= FORM SECTION ================= */}
      <section className="contact-form-section">
        <div className="container contact-form-section__grid">
          <div className="contact-form-section__content">
            <SectionHeader 
              badge="Leading Solar & Storage" 
              title="Custom ODM & OEM Energy Solutions" 
              subtitle="Partner with JoyHand for high-performance solar and battery storage systems tailored to your brand's specifications."
            />
            <div className="contact-form-section__features">
                <div className="feature-item"><Zap size={18}/> Global Logistics Support</div>
                <div className="feature-item"><Zap size={18}/> ISO Certified Manufacturing</div>
                <div className="feature-item"><Zap size={18}/> 24/7 Technical Consultation</div>
            </div>
          </div>
          <SolarLeadForm />
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="contact-info">
        <div className="container">
          <SectionHeader title="Global Presence" center />
          <div className="contact-info__grid">
            {contactDetails.map((item, index) => (
              <div key={index} className="contact-card">
                <div className="contact-card__icon-wrapper">
                  <div className="contact-card__pulse"></div>
                  <div className="contact-card__icon">{item.icon}</div>
                </div>
                <h4 className="contact-card__title">{item.title}</h4>
                {item.isText ? (
                  <p className="contact-card__content">{item.content}</p>
                ) : (
                  <a href={item.link} className="contact-card__link">{item.content}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="contact-map">
          <iframe 
            title="Location" 
            src="https://www.google.com/maps?q=52+Ubi+Avenue+3,+Singapore+408867&output=embed" 
            width="100%" 
            height="500" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
            allowFullScreen="" 
            loading="lazy"
          />
      </section>
    </main>
  );
}
