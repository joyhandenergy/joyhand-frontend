"use client";

import { useState } from "react";
import { PiCheckCircleFill, PiWarningCircleFill } from "react-icons/pi";

const SimpleContactForm = ({ mode = "quote" }) => {
  const isQuote = mode === "quote";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    orderVolume: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    else if (formData.firstName.trim().length < 2) errors.firstName = "Minimum 2 characters";

    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email format";

    if (isQuote && !formData.companyName.trim()) errors.companyName = "Company name is required";

    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Minimum 10 characters";

    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allFields = Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allFields);

    // Check if there are errors
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/your-endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, mode })
      });

      if (response.ok) {
        setStatus("success");
        // Reset form after success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          orderVolume: "",
          message: ""
        });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Volume options
  const volumeOptions = [
    { value: "", label: "Expected Volume" },
    { value: "<100", label: "Less than 100 units" },
    { value: "100-500", label: "100 - 500 units" },
    { value: "500-1000", label: "500 - 1,000 units" },
    { value: "1000+", label: "1,000+ units" },
    { value: "5000+", label: "5,000+ units" },
  ];

  return (
    <form className="modal__form" onSubmit={handleSubmit} noValidate>

      {/* Name Grid */}
      <div className="modal__grid">
        <div className="modal__field">
          <input
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              touched.firstName && errors.firstName
                ? "modal__input modal__input--error"
                : "modal__input"
            }
          />
          {touched.firstName && errors.firstName && (
            <span className="modal__error">{errors.firstName}</span>
          )}
        </div>

        <div className="modal__field">
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="modal__input"
          />
        </div>
      </div>

      {/* Email */}
      <div className="modal__field">
        <input
          type="email"
          name="email"
          placeholder="Business Email *"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.email && errors.email
              ? "modal__input modal__input--error"
              : "modal__input"
          }
        />
        {touched.email && errors.email && (
          <span className="modal__error">{errors.email}</span>
        )}
      </div>

      {/* Quote-specific fields */}
      {isQuote && (
        <div className="modal__grid">
          <div className="modal__field">
            <input
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                touched.companyName && errors.companyName
                  ? "modal__input modal__input--error"
                  : "modal__input"
              }
            />
            {touched.companyName && errors.companyName && (
              <span className="modal__error">{errors.companyName}</span>
            )}
          </div>

          <div className="modal__field">
            <select
              name="orderVolume"
              className="modal__input modal__select"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.orderVolume}
            >
              {volumeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Message */}
      <div className="modal__field">
        <textarea
          name="message"
          placeholder={isQuote ? "Tell us about your requirements... *" : "Your message... *"}
          rows="4"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            touched.message && errors.message
              ? "modal__input modal__input--error"
              : "modal__input"
          }
        />
        {touched.message && errors.message && (
          <span className="modal__error">{errors.message}</span>
        )}
      </div>

      {/* Status Messages */}
      {status === "error" && (
        <div className="modal__status modal__status--error">
          <PiWarningCircleFill size={18} />
          <span>Please fix the errors above and try again.</span>
        </div>
      )}

      {status === "success" && (
        <div className="modal__status modal__status--success">
          <PiCheckCircleFill size={18} />
          <span>Message sent successfully! We will respond within 24 hours.</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn--primary modal__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <span>Processing</span>
            <span className="modal__loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </>
        ) : (
          isQuote ? "Request Quote" : "Send Message"
        )}
      </button>

      {/* Footnote */}
      <p className="modal__footnote">
        <PiCheckCircleFill size={12} /> Priority response for volume inquiries
      </p>

    </form>
  );
};

export default SimpleContactForm;