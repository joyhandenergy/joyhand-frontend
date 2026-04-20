"use client";

import { useState } from "react";
import { PiQuestion, PiCaretDown, PiCaretUp } from "react-icons/pi";

export default function ProductFAQ({ product }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "MOQ varies by product. Contact our sales team for a custom quote based on your volume requirements."
    },
    {
      question: "Do you offer OEM/ODM services for this product?",
      answer: "Yes, we provide full OEM/ODM services including custom branding, packaging, and firmware modifications."
    },
    {
      question: "What certifications are available?",
      answer: `This product is certified: ${product.certifications?.join(", ") || "CE, UL, IEC"}. Additional certifications can be arranged.`
    },
    {
      question: "How long is the lead time?",
      answer: "Standard lead time is 15-30 days depending on quantity. Expedited options available."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="product-details__faq">
      <h3 className="product-details__faq-heading">Frequently Asked Questions</h3>
      <div className="product-details__faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="product-details__faq-item">
            <button
              className="product-details__faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <PiQuestion size={18} className="product-details__faq-icon" />
              <span>{faq.question}</span>
              {openIndex === idx ? <PiCaretUp size={24} /> : <PiCaretDown size={24} />}
            </button>
            {openIndex === idx && (
              <div className="product-details__faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}