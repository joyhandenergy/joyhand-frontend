"use client";
import React from "react";
import "./SectionDecor.css";

const SectionDecor = ({ type = "primary", count = 3 }) => {
  return (
    <div
      className={`section-decor section-decor--${type}`}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="section-decor__shape"
          style={{ "--index": index }}
        />
      ))}
    </div>
  );
};

export default SectionDecor;