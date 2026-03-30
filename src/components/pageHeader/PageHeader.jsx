"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./PageHeader.css";

const PageHeader = ({ title, pageImage, subtitle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback: If the image takes too long, show it anyway after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page-header">
      {/* Background Image Layer */}
      <div className="page-header__bg-wrapper">
        <Image
          src={pageImage}
          alt={`${title} - JOYHAND Energy`}
          fill
          priority
          quality={85}
          sizes="100vw"
          onLoad={() => setImageLoaded(true)}
          className={`page-header__bg ${imageLoaded ? "page-header__bg--loaded" : ""}`}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* Visual Enhancements */}
      <div className="page-header__overlay"></div>
      <div className="page-header__glow"></div>

      <div className="container page-header__container">
        <div className="page-header__content">
          <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
            <Link href="/" className="page-header__breadcrumb-link">
              Home
            </Link>
            <span className="page-header__breadcrumb-separator">/</span>
            <span className="page-header__breadcrumb-current" aria-current="page">
              {title}
            </span>
          </nav>

          <h1 className="page-header__title">{title}</h1>

          {subtitle && <p className="page-header__description">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;