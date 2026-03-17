"use client";

import { useState, useEffect, useCallback } from "react";
import {
  PiXBold,
  PiFactoryDuotone,
  PiChatsCircleDuotone,
  PiCheckCircleFill,
  PiWarningCircleFill,
  PiArrowRight,
} from "react-icons/pi";

import "./PopUpModal.css";

const PopUpModal = ({ isOpen, onClose, mode = "quote" }) => {
  const isQuote = mode === "quote";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  /* ------------------------------ */
  /* Prevent page scroll on modal */
  /* ------------------------------ */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  /* ------------------------------ */
  /* Field Validation Logic */
  /* ------------------------------ */
  const validateField = useCallback((name, value) => {
    let error = null;

    switch (name) {
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address";
        }
        break;

      case "firstName":
      case "lastName":
        if (value && value.length < 2) {
          error = "Must be at least 2 characters";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  }, []);

  /* ------------------------------ */
  /* Reset Logic (Triggered on Close) */
  /* ------------------------------ */
  // Instead of resetting when it OPENS (causing a double render),
  // we ensure it is clean when it closes or we use the parent's state.
  const handleClose = () => {
    setStatus("idle");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      orderVolume: "",
      message: "",
    });
    setTouched({});
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  /* ------------------------------ */
  /* Handle Change */
  /* ------------------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  /* ------------------------------ */
  /* Handle Blur */
  /* ------------------------------ */
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    validateField(name, formData[name]);
  };

  /* ------------------------------ */
  /* Form Validation */
  /* ------------------------------ */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "Required";
    if (!formData.lastName) newErrors.lastName = "Required";

    if (!formData.email) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) newErrors.message = "Required";

    if (isQuote) {
      if (!formData.companyName) newErrors.companyName = "Required";
      if (!formData.orderVolume) newErrors.orderVolume = "Select volume";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------------------ */
  /* Submit Handler */
  /* ------------------------------ */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  const volumeOptions = [
    { value: "", label: "Expected Monthly Volume" },
    { value: "<100", label: "Less than 100 units" },
    { value: "100-500", label: "100 - 500 units" },
    { value: "500-1000", label: "500 - 1,000 units" },
    { value: "1000+", label: "1,000+ units" },
    { value: "5000+", label: "5,000+ units (Volume Pricing)" },
  ];

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={handleClose}
          aria-label="Close Modal"
        >
          <PiXBold size={20} />
        </button>

        <header className="modal__header">
          <div className="modal__nfc-visual">
            <div className="modal__nfc-ring"></div>
            <div className="modal__icon-box">
              {isQuote ? (
                <PiFactoryDuotone size={40} />
              ) : (
                <PiChatsCircleDuotone size={40} />
              )}
            </div>
          </div>

          <h3 className="modal__title">
            {isQuote ? "Request OEM / ODM Quote" : "Technical Consultation"}
          </h3>

          <p className="modal__subtitle">
            {isQuote
              ? "Tell us about your requirements. We'll connect you with vetted manufacturing partners."
              : "Have technical questions? Our engineering team is ready to help."}
          </p>
        </header>

        {status === "success" ? (
          <div className="modal__success-state">
            <PiCheckCircleFill size={60} className="modal__success-icon" />
            <h4 className="modal__success-title">Request Received</h4>
            <p className="modal__success-text">
              {isQuote
                ? "Our sourcing team will review your request and contact you within 24 hours."
                : "A technical specialist will contact you within 24 hours."}
            </p>
            <button
              className="btn btn--primary modal__success-btn"
              onClick={handleClose}
            >
              Close <PiArrowRight />
            </button>
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__grid">
              <div className="modal__field">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  className={`modal__input ${
                    touched.firstName && errors.firstName ? "modal__input--error" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <span className="modal__error">{errors.firstName}</span>
                )}
              </div>

              <div className="modal__field">
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  className={`modal__input ${
                    touched.lastName && errors.lastName ? "modal__input--error" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <span className="modal__error">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="modal__field">
              <input
                type="email"
                name="email"
                placeholder="Business Email *"
                className={`modal__input ${
                  touched.email && errors.email ? "modal__input--error" : ""
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email}
              />
              {touched.email && errors.email && (
                <span className="modal__error">{errors.email}</span>
              )}
            </div>

            <div className="modal__grid">
              <div className="modal__field">
                <input
                  name="companyName"
                  placeholder={isQuote ? "Company Name *" : "Company Name (Optional)"}
                  className={`modal__input ${
                    touched.companyName && errors.companyName ? "modal__input--error" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.companyName}
                />
                {touched.companyName && errors.companyName && (
                  <span className="modal__error">{errors.companyName}</span>
                )}
              </div>

              <div className="modal__field">
                <select
                  name="orderVolume"
                  value={formData.orderVolume}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`modal__input modal__select ${
                    touched.orderVolume && errors.orderVolume ? "modal__input--error" : ""
                  }`}
                >
                  {volumeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {touched.orderVolume && errors.orderVolume && (
                  <span className="modal__error">{errors.orderVolume}</span>
                )}
              </div>
            </div>

            <div className="modal__field">
              <textarea
                name="message"
                rows="4"
                placeholder={
                  isQuote
                    ? "Describe your requirements and specifications... *"
                    : "Tell us about your project or questions... *"
                }
                className={`modal__input modal__textarea ${
                  touched.message && errors.message ? "modal__input--error" : ""
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
              />
              {touched.message && errors.message && (
                <span className="modal__error">{errors.message}</span>
              )}
            </div>

            {status === "error" && (
              <div className="modal__status modal__status--error">
                <PiWarningCircleFill size={18} />
                <span>Please correct the highlighted fields.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn--primary modal__submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span>Processing</span>
                  <span className="modal__loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                </>
              ) : (
                <>
                  {isQuote ? "Request Quote" : "Send Inquiry"} <PiArrowRight />
                </>
              )}
            </button>
            <p className="modal__footnote">
              * Required fields. Our team will respond within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopUpModal;