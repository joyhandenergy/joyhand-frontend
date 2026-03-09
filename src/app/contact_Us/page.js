"use client";
import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import PageHeader from "@/components/pageHeader/PageHeader";
import { 
  MapPin, Phone, Mail, Clock, 
  User, Building2, ChevronRight, CheckCircle2, Zap 
} from "lucide-react";


const contactDetails = [
  { icon: <MapPin />, title: "Address", content: "52 Ubi Avenue 3, #05-41 Frontier, Singapore 408867", link: "https://maps.google.com" },
  { icon: <Phone />, title: "Call Us", content: "+65 80610116", link: "tel:+6580610116" },
  { icon: <Mail />, title: "Email", content: "info@fomo.energy", link: "mailto:info@fomo.energy" },
  { icon: <Clock />, title: "Working Hours", content: "Mon to Fri 9am - 6pm\nSat 9am - 1pm", isText: true }
];

const SolarLeadForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, control, trigger } = useForm();

  // FIX: Use useWatch with control to satisfy the React Compiler
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
    const isValid = await trigger(); // Manually validate before moving forward
    if (isValid) setStep((prev) => prev + 1);
  };

  return (
    <div className="lead-form-container">
      {step < 4 && (
        <div className="form-progress">
          <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="step-fade">
            <h2 className="step-title">How can we help?</h2>
            <div className="options-grid">
              <label className={`option-card ${userType === 'b2c' ? 'selected' : ''}`}>
                <input type="radio" {...register("userType", { required: true })} value="b2c" />
                <User size={32} />
                <span>Home / B2C</span>
              </label>
              <label className={`option-card ${userType === 'b2b' ? 'selected' : ''}`}>
                <input type="radio" {...register("userType", { required: true })} value="b2b" />
                <Building2 size={32} />
                <span>OEM/ODM B2B</span>
              </label>
            </div>
            <button type="button" onClick={handleNext} disabled={!userType} className="btn-primary">
              Continue <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step-fade">
            <h2 className="step-title">Project Details</h2>
            <div className="field-group">
              {userType === 'b2c' ? (
                <input {...register("zip")} placeholder="Installation ZIP Code" className="main-input" required />
              ) : (
                <input {...register("company")} placeholder="Company Name" className="main-input" required />
              )}
              <select {...register("solution")} className="main-input" required>
                <option value="">Select Solution</option>
                <option value="solar">Solar Energy</option>
                <option value="battery">Battery Storage</option>
                <option value="oem">OEM Partnership</option>
              </select>
            </div>
            <button type="button" onClick={handleNext} className="btn-primary">Next Step</button>
          </div>
        )}

        {step === 3 && (
          <div className="step-fade">
            <h2 className="step-title">Contact Info</h2>
            <div className="field-group">
              <input {...register("name")} placeholder="Full Name" className="main-input" required />
              <input {...register("email")} type="email" placeholder="Email" className="main-input" required />
              <input {...register("phone")} type="tel" placeholder="Phone" className="main-input" required />
            </div>
            <button type="submit" className="btn-submit">Request Free Quote</button>
          </div>
        )}

        {step === 4 && (
          <div className="success-ui">
            <CheckCircle2 size={60} color="#4CAF50" />
            <h3>Thank You!</h3>
            <p>Our experts will contact you within 2 hours.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="contact-wrapper">
      <PageHeader title="Connect With Us" pageImage="/images/pageHeadImg/pageheader3.jpg" />
      <section className="form-main-section">
        <div className="section-container">
          <div className="form-intro">
            <span className="solar-badge"><Zap size={14}/> Leading Solar & Storage</span>
            <h1>Custom ODM & OEM Solutions</h1>
            <p>Specializing in high-performance solar and battery storage for global B2B partnerships and residential needs.</p>
          </div>
          <SolarLeadForm />
        </div>
      </section>
      <section className="artistic-contact-section">
        <div className="contact-grid">
          {contactDetails.map((item, index) => (
            <div key={index} className="artistic-card">
              <div className="nfc-container">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
                <div className="artistic-icon-box">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              {item.isText ? <p>{item.content}</p> : <a href={item.link}>{item.content}</a>}
            </div>
          ))}
        </div>
      </section>
      <section className="map-section">
        <iframe title="Location" src="https://www.google.com/maps?q=52+Ubi+Avenue+3,+Singapore+408867&output=embed" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"/>
      </section>
    </div>
  );
}
